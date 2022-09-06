import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
  } from "redux";
  import {
    userReducer
  } from "../Reducers/userReducers";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'main-root',
  storage
}

  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  
  const reducers = combineReducers({
    login: userReducer
  });
  const persistedReducer = persistReducer(persistConfig, reducers)
   const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  const Persistor = persistStore(store)
  export default store
  export {Persistor}

