

export interface UserState {
    user: any[],
    edit: any,
    loading: boolean,
    error: null | string,
    pagination: number, 
}

export interface AuthState {
    user: null
}

export enum UserActionTypes {
GET_USERS = 'GET_USERS',
GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
GET_USERS_ERROR = "GET_USERS_ERROR",
GET_USERS_UPDATE = "GET_USERS_UPDATE",
PAGE_USERS = "PAGE_USERS"
}

export enum AuthActionTypes {
    CHECK_USER = "CHECK_USER"
}


interface fetchUsersActionSuccess {
    type: UserActionTypes.GET_USERS_SUCCESS,
    payload: any
}

interface fetchUsersActionError {
    type: UserActionTypes.GET_USERS_ERROR,
    payload:string,
}

interface fetchUsersActionUpdate {
    type: UserActionTypes.GET_USERS_UPDATE,
    payload: {}
}

interface fetchUsersAction {
    type: UserActionTypes.GET_USERS,

}


interface fetchAuthUserAction {
    type: AuthActionTypes.CHECK_USER,
    payload: any

}


export type AuthAction = fetchAuthUserAction

export type UserAction  = fetchUsersAction | fetchUsersActionSuccess | fetchUsersActionError | fetchUsersActionUpdate
