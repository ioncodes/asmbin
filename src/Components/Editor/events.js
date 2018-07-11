import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

var settingsStore = createStore((state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS':
      return state = !state;
    default:
      return state;
  }
}, composeWithDevTools());

var codeStore = createStore((state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_CODE':
      return state = !state;
    default:
      return state;
  }
}, composeWithDevTools());

function toggleSettings() {
  settingsStore.dispatch({
    type: 'TOGGLE_SETTINGS'
  });
}

function toggleCode() {
  codeStore.dispatch({
    type: 'TOGGLE_CODE'
  });
}

export {
  toggleSettings,
  settingsStore,
  toggleCode,
  codeStore
};
