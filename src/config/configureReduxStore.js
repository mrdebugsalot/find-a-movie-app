import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../store/reducers/rootReducer.js';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(rootReducer)

// import { createStore, applyMiddleware  } from 'redux';
// import thunk from 'redux-thunk'

// import rootReducer from '../store/reducers/rootReducer.js';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;