import * as actionTypes from './actionTypes';

export const deleteItem = (id) => {
    return {
        type: actionTypes.DELETE_ITEM,
        id: id
    }
};