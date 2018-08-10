import * as types from '../actions/types';

const initialState = {
    'inputValue': null,
}

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case types.STORE_INPUT: {
            console.log(action)
            return {
                ...state,
                'inputValue': action.payload,
            }
        }
        default:
            return state;
    }
}