import { act } from 'react-test-renderer';
import { NAME_IN, NAME_OUT } from '../actionTypes/auth';

const initialState = ''
export default function (state, action) {
    switch (action.type) {
        case NAME_IN:
            return action.payload

        case NAME_OUT:
            return initialState

        default:
            return initialState
    }

}