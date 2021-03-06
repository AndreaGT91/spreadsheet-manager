import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("/api/user", userData)
        .then(res => history.push("/Login")) // re-direct to login on successful register
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Reset password for user
export const passwordReset = (userData, history) => dispatch => {
    axios
        .post("/api/user/forgotpassword", userData)
        .then(res => history.push("/Login")) // re-direct to login on successful reset
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login - get user token
export const loginUser = userData => dispatch => {
    axios
        .post("/api/user/Login", userData)
        .then(res => {
            // Save to localStorage
            // Set token to localStorage
            const { token, id, name } = res.data;

            localStorage.setItem("jwtToken", JSON.stringify(token));
            localStorage.setItem("userID", JSON.stringify(id));
            localStorage.setItem("userName", JSON.stringify(name));

            // Set token to Auth header
            setAuthToken(token);

            // Decode token to get user data
            const decoded = jwt_decode(token);

            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userID")
    localStorage.removeItem("userName")

    // Remove auth header for future requests
    setAuthToken(false);

    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};