import * as types from './types';

export function storeInput(payload) {
    return ({ type: types.STORE_INPUT, payload });
}