const initialState = {
  activePopup: null,
  tool: null,
  homeLocation: { lat: null, lon: null },
  progress: false,
  location: null,
  expertMode: false,
};

export default function main(state = initialState, action) {
  switch (action.type) {
    case 'MAIN_LOAD_STATE': {
      const s = { ...state };
      const { homeLocation, expertMode } = action.payload;
      if (homeLocation) {
        s.homeLocation = { ...homeLocation };
      }
      if (expertMode) {
        s.expertMode = expertMode;
      }
      return s;
    }
    case 'SET_ACTIVE_POPUP':
      return { ...state, activePopup: action.payload };
    case 'CLOSE_POPUP':
      return { ...state, activePopup: null };
    case 'MAP_RESET':
      return { ...state, tool: null };
    case 'SET_TOOL':
      return { ...state, tool: action.payload, progress: false };
    case 'SET_HOME_LOCATION':
      return { ...state, homeLocation: action.payload };
    case 'START_PROGRESS':
      return { ...state, progress: true };
    case 'STOP_PROGRESS':
      return { ...state, progress: false };
    case 'SET_LOCATION':
      return { ...state, location: { lat: action.payload.lat, lon: action.payload.lon, accuracy: action.payload.accuracy } };
    case 'SET_EXPERT_MODE':
      return { ...state, expertMode: action.payload };
    default:
      return state;
  }
}
