import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as actionCreators from '../actions/user'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators, dispatch)
}