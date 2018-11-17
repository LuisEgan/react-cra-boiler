import api from "../api";

export const ACTION = "ACTION",
    LOGIN_SUCCES = "LOGIN_SUCCES";

// * DISPATCH FUNCS

const doLogin = res => ({
    type: LOGIN_SUCCES,
    res
})

// * FETCHING FUNCS

export const login = async (email, password) => dispatch => {

    const data = {
        email,
        password
    };
    let res;

    try {
        res = await api.login(data);
        dispatch(doLogin(res));
    } catch (error) {
        console.log('error: ', error);
        // or dispatch an asyncError() func to keep the error in the store state
    }
}