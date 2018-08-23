import * as actionTypes from './actionTypes';

export const setSubtractItemPrice = (price) => {
    return {
        type: actionTypes.SET_SUBTRACT_ITEM_PRICE,
        price: price
    }
}