import { AuthAction, AuthActionTypes, AuthState } from "../types/types";

const INIT_STATE: AuthState = {
    user: null,
}

export const AuthReducers = (state = INIT_STATE, action:AuthAction): AuthState => {
    switch(action.type) {
        case AuthActionTypes.CHECK_USER :
            return {...state, user: action.payload};
            default:
                return state;
    }
}