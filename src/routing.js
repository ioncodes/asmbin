import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function set(value) {
  return {
    type: 'SET_LOCATION',
    value: value
  }
}

var store = createStore((state = '', action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return state = action.value;
    default:
      return state;
  }
}, composeWithDevTools());

function setLocation(value) {
  store.dispatch(set(value));
}

export {
  setLocation,
  store
};
