import * as actionTypes from './actionTypes';

export const setSubtractItemPrice = (price) => {
    return {
        type: actionTypes.SET_SUBTRACT_ITEM_PRICE,
        price: price
    }
}

export const setSubtotalPrice = (subtotal) => {
    return {
        type: actionTypes.SET_SUBTOTAL_PRICE,
        subtotal: subtotal
    }
}