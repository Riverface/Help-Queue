export default (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_FORM':
    console.log("Toggling form visible state");
    return !state;
  default:
    return state;
  }
};