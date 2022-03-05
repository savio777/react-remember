import { createStore, combineReducers } from "redux";

import reducerUser from "./users/reducer";

const reducers = combineReducers({ users: reducerUser });

const store = createStore(reducers);

export default store;
