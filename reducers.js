import {combineReducers} from "redux";
import types from "./action-types";

function news (state = [], action) {

    switch(action.type) {
        case types.SET_NEWS: {
            return [...action.payload];
        }
        default: return state;
    }
}

/********************** */

function userLoaded (state = false, action) {
    switch(action.type){
        case types.SET_USER_LOADED: {
            return action.payload;
        }
        default: return state;
    }
}

function currentUser (state = {}, action) {
    switch(action.type) {
        case types.SET_USER: {
            return {...action.payload};
        }
        default: return state;
    }
}

function token (state = localStorage.getItem('token') ? localStorage.getItem('token') : '', action) {
    switch(action.type) {
        case types.SAVE_TOKEN: {
            localStorage.setItem('token', action.payload);
            return action.payload;
        }
        default: return state;
    }
}

function graphQLErrors (state = [], action){
    switch(action.type) {
        case types.ADD_GRAPHQL_ERROR: {
            return [...state, action.payload];
        }
        default: return state;
    }
}

/*************** */

function students (state = [], action) {
    switch (action.type) {
        case types.SET_STUDENT: {
            return [...action.payload];
        }
        case types.ADD_STUDENT: {
            const currentStudents = state.slice();
            currentStudents.push(action.payload);
            return [...currentStudents];
        }
        case types.DELETE_STUDENT: {
            return state.filter(item => item._id !== action.payload)            
        }
        default: return state;
    }
}

function error (state = {}, action) {
    switch(action.type) {
        case types.SET_ERROR: {
            return {...action.payload}
        }
        default: return state;
    }
}

/********************* */

function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
  }
}


function quotes(state = {}, action) {
  switch (action.type) {

    default:
      return state
  }
}

export default combineReducers ({
    news,
    userLoaded,
    currentUser,
    students,
    token,
    graphQLErrors,
    error,
    auth,
    quotes
});