import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

var store = createStore((state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS':
      return state = !state;
    default:
      return state;
  }
}, composeWithDevTools());

function toggleSettings() {
  store.dispatch({
    type: 'TOGGLE_SETTINGS'
  });
}

export {
  toggleSettings,
  store
};
