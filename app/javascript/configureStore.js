import { legacy_createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

const initialState = {
  greeting: {}
}

const rootReducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'GET_GREETING_SUCCESS':
      return { greeting: action.message}
    default:
      return state
  }
}

const configureStore = () => {
  const store = legacy_createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}

export default configureStore;