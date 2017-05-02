export function mapReset() {
  return { type: 'MAP_RESET' };
}

export function mapRefocus(changes) {
  return { type: 'MAP_REFOCUS', payload: { ...changes } };
}

export function mapSetTileFormat(tileFormat) {
  return { type: 'MAP_SET_TILE_FORMAT', payload: tileFormat };
}

export function mapSetOverlayOpacity(overlayType, overlayOpacity) {
  return { type: 'MAP_SET_OVERLAY_OPACITY', overlayType, overlayOpacity };
}

export function setMouseCursorToCrosshair() {
  return { type: 'MAP_SET_MOUSE_CURSOR', payload: 'crosshair' };
}

export function resetMouseCursor() {
  return { type: 'MAP_SET_MOUSE_CURSOR', payload: 'auto' };
}

export function mapLoadState(payload) {
  return { type: 'MAP_LOAD_STATE', payload };
}
