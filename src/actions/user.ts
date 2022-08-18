import axios from "axios"
import { Dispatch } from "redux"
import { API } from "../helpers"
import { UserAction, UserActionTypes } from "../types/types"
import { IUser } from "../types/Users"

export const addUser = (newUser: IUser) => {
    console.log(newUser, "newUsre");
  
return async (dispatch : Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionTypes.GET_USERS})
        await axios.post(API, newUser)
        getUsers()
    } catch (error) {
        dispatch({type: UserActionTypes.GET_USERS_ERROR, payload:' errror'})
    }
  }
}

export const getUsers = () => {
    return async (dispatch: Dispatch <UserAction>) => {
        try {
            dispatch({type:UserActionTypes.GET_USERS})
            const response = await axios(API)            
            dispatch({type:UserActionTypes.GET_USERS_SUCCESS, payload: response.data})
        } catch (error:any) {
            dispatch({type: UserActionTypes.GET_USERS_ERROR, payload: error  })
        }
    }
}


export const deleteUser = (id:number) => {
return async (dispatch: Dispatch<UserAction>) => {
    try {
        await axios.delete(`${API}/${id}`)
        getUsers()
    } catch (error: any) {
        dispatch({type: UserActionTypes.GET_USERS_ERROR, payload: error})
    }
}
}


export const editedUser = (id:any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const {data} = await axios(`${API}/${id}`)
            console.log(data, "data");
            
            dispatch({type: UserActionTypes.GET_USERS_UPDATE, payload: data})
        } catch (error: any) {
            dispatch({type: UserActionTypes.GET_USERS_ERROR, payload: error})
        }
    }
}

export const saveEdited = (id: any, editedUser: IUser)=> {
    return async (dispatch:Dispatch<UserAction>) => {
    try {
     dispatch({type: UserActionTypes.GET_USERS})
     await axios.patch(`${API}/${id}`, editedUser)
    } catch (error: any) {
        dispatch({type: UserActionTypes.GET_USERS_ERROR, payload: error})
    }
}
}


 