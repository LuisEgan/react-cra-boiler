import {
    Map
} from "immutable";

import {
    ACTION,
    LOGIN_SUCCESS
} from "../actions";

const initialStateValues = { isLoggedIn: false };

export const initialState = Map(initialStateValues);

const actionsMap = {
    [LOGIN_SUCCESS]: (state, action) => {
        const {
              data
        } = action.data;
        const isLoggedIn = true;

        // data es la respues de api.login() asi que trae todo lo qeu devuelva la db

        const newState = {
              isLoggedIn,
              username: data.username
        };

        if (data.adminToken) {
              newState.adminToken = data.adminToken;
        }

        return state.merge(Map(newState));
  }
}

export default (state = initialState, action = {}) => {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}