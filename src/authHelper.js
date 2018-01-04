import qs from 'query-string';
import axios from 'axios';
import history from 'fm3/history';

import { setHomeLocation, startProgress, stopProgress, setActiveModal } from 'fm3/actions/mainActions';
import { toastsAdd, toastsAddError } from 'fm3/actions/toastsActions';
import { authSetUser } from 'fm3/actions/authActions';
import { tipsNext, tipsPreventNextTime } from 'fm3/actions/tipsActions';

export default function initAuthHelper(store) {
  try {
    store.dispatch(authSetUser(JSON.parse(localStorage.getItem('user'))));
  } catch (e) {
    const authToken = localStorage.getItem('authToken'); // for compatibility
    if (authToken) {
      store.dispatch(authSetUser({ authToken, name: '...' }));
    }
  } finally {
    localStorage.removeItem('authToken'); // for compatibility
  }

  const { user } = store.getState().auth;
  if (user) {
    verifyUser(store, user);
  } else {
    handleTips(store);
  }

  setupOsmLoginStep2Listener(store);
}

function setupOsmLoginStep2Listener(store) {
  window.addEventListener('message', (e) => {
    /* eslint-disable no-underscore-dangle */

    if (e.origin !== window.location.origin || typeof e.data !== 'object' || !e.data.__freemap || !e.data.__freemap.oauthParams) {
      return;
    }

    const { oauth_token: token, oauth_verifier: verifier } = qs.parse(e.data.__freemap.oauthParams);

    const pid = Math.random();
    store.dispatch(startProgress(pid));
    axios.post(
      `${process.env.API_URL}/auth/login2`,
      { token, verifier },
      {
        validateStatus: status => status === 200,
      },
    )
      .then(({ data }) => {
        if (!store.getState().main.homeLocation) {
          store.dispatch(setHomeLocation({ lat: data.lat, lon: data.lon }));
        }

        store.dispatch(toastsAdd({
          collapseKey: 'login',
          messageKey: 'logIn.success',
          style: 'info',
          timeout: 5000,
        }));

        store.dispatch(authSetUser(data));
      })
      .catch((err) => {
        store.dispatch(toastsAddError('logIn.logInError', err));
      })
      .then(() => {
        store.dispatch(stopProgress(pid));
      });
  });
}

function verifyUser(store, user) {
  const pid = Math.random();
  store.dispatch(startProgress(pid));
  axios({
    url: `${process.env.API_URL}/auth/validate`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${user.authToken}`,
    },
    validateStatus: status => status === 200 || status === 401,
  })
    .then((res) => {
      store.dispatch(authSetUser(res.status === 200 ? res.data : null));
    })
    .catch((err) => {
      store.dispatch(toastsAddError('logIn.verifyError', err));
    })
    .then(() => {
      store.dispatch(stopProgress(pid));

      handleTips(store);
    });
}

function handleTips(store) {
  const embedded = window.self !== window.top;

  // show tips only if not embedded and there are no other query parameters except 'map' or 'layers'
  if (!embedded && history.location.search.substring(1).split('&').every(x => /^(map|layers)=|^$/.test(x))) {
    if (!store.getState().auth.user) {
      store.dispatch(tipsPreventNextTime(localStorage.getItem('preventTips') === 'true'));
    }
    if (!store.getState().tips.preventTips) {
      store.dispatch(tipsNext(localStorage.getItem('tip') || null));
      store.dispatch(setActiveModal('tips'));
    }
  }
}
