import * as actionTypes from '../actions/actionTypes';

const initialState = {
    setPromoCode: false,
    promoCode: '',
    promoCodeValue: 5,
    subtotal: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case(actionTypes.SET_SUBTRACT_ITEM_PRICE):
            return {
                ...state,
                subtotal: state.subtotal - action.price
            }
        case(actionTypes.SET_SUBTOTAL_PRICE):
            return {
                ...state,
                subtotal: action.subtotal
            }
        default: 
            return state;
    }
}

export default reducer;