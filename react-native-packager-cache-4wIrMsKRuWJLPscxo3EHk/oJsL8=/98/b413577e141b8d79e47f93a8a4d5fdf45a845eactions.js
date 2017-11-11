Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;
exports.open = open;
exports.close = close;
function toggle() {
  return {
    type: 'SIDEMENU_TOGGLE'
  };
}

function open() {
  return {
    type: 'SIDEMENU_OPEN'
  };
}

function close() {
  return {
    type: 'SIDEMENU_CLOSE'
  };
}