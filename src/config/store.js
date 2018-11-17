import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = applyMiddleware(thunk)

const reducer = combineReducers(rootReducer);
const store = createStore(reducer, middleware);

export default () => ({
    store
});