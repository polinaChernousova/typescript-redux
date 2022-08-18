import { combineReducers } from "redux";
import {userReducers} from './UserReducers'

export const rootReducer = combineReducers({
    userReducers
})

export type RootState = ReturnType <typeof rootReducer>