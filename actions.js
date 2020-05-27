import types from './action-types';
import networkClient from './network-client';
import graphQLService from '../network/graphql-service';

export function setNews (news) {
    return {type: types.SET_NEWS, payload: news}
}

export function setError (error) {
    return {type: types.SET_ERROR, payload: error}
}

export const getNews = () => async dispatch => {

    try{
        const res = await networkClient.get(
            "http://newsapi.org/v2/top-headlines.json"
        );
        dispatch(setNews(res.news));
    }catch(ex){
        dispatch(setError({message: 'Error!'}))
    }
};

/********************* */

export const getUser = (responseFields = "_id") => async dispatch => {

    try{
        const response = await graphQLService.getUser(responseFields);
        dispatch(setUser(response.data.Users));
    }catch(ex) {
        dispatch(setError({message: "Error"}));
    }
}

export function setUser (user) {
    return {type: types.SET_USER, payload: user}
}

export const addUser = variables => async dispatch => {
    try {
        const response = await graphQLService.addUser(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.addUser));
    }catch(e) {
        e.graphQLErrors.forEach(error => {
            console.log(error);
        })
        dispatch(setGraphQLError({request: 'addUser', errors: []}));
    }

};

export const deleteUser = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteUser(variables, responseFields);
        dispatch.deleteUserFromStore(response.data.deleteUser._id);
    }catch(ex) {
        dispatch(setError({message: 'Error deleting user'}));
    }
};

export function addUserToStore(user){
    return {type: types.ADD_USER, payload: user}
}

export function deleteUserFromStore(user){
    return {type: types.DELETE_USER, payload: user}
}

export const editUser = (variables, responseFields = "_id email username userType {name}") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.editUser));
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "editUser", errors: []}))
    }
}

export const login = variables => async dispatch => {
    try {
        const response = await graphQLService.login(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.login));
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "login", errors: []}))
    }
}
export function saveToken(token){
    return {type: types.SAVE_TOKEN, payload: token}
}

export function setUserLoaded(){
    return {type: types.SET_USER_LOADED, payload: true}
}

export function setGraphQLError (error) {
    return { type: types.ADD_GRAPHQL_ERROR, payload: error };
}

export const getCurrentUser = () => async dispatch => {
    try {
        const response = await graphQLService.currentUser();
        dispatch(saveCurrentUser(response.data.currentUser));
        dispatch(setUserLoaded())
    } catch(e){
        dispatch(saveToken(''));
        dispatch(setUserLoaded())
    }
}

export function saveCurrentUser(user){
    return {type: types.SET_USER, payload: user}
}


/********************* */

export const getStudent = (responseFields = "_id") => async dispatch => {

    try{
        const response = await graphQLService.getStudent(responseFields);
        dispatch(setStudents(response.data.students));
    }catch(ex) {
        dispatch(setError({message: "Error"}));
    }
}

export function setStudents (students) {
    return {type: types.SET_STUDENT, payload: students}
}

export const addStudent = (variables, responseFields="_id") => async dispatch => {
    try {
        const response = await graphQLService.addStudent(variables, responseFields);
        dispatch.addStudentToStore(response.data.addStudent);
    }catch(ex) {
        dispatch(setError({message: 'Error in addind student to DB'}));
    }

};

export const deleteStudent = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteStudent(variables, responseFields);
        dispatch.deleteStudentFromStore(response.data.deleteStudent._id);
    }catch(ex) {
        dispatch(setError({message: 'Error deleting student'}));
    }
};

export function addStudentToStore(student){
    return {type: types.ADD_STUDENT, payload: student}
}

export function deleteStudentFromStore(student){
    return {type: types.DELETE_STUDENT, payload: student}
}

/****************** */

function requestLogin(creds) {
    return {
      type: types.LOGIN_REQUEST,
      isFetching: true,
      isAuthenticated: false,
      creds
    }
  }

  function receiveLogin(user) {
    return {
      type: types.LOGIN_SUCCESS,
      isFetching: false,
      isAuthenticated: true,
      id_token: user.id_token
    }
  }
  
  function loginError(message) {
    return {
      type: types.LOGIN_FAILURE,
      isFetching: false,
      isAuthenticated: false,
      message
    }
  }