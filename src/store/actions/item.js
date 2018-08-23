import * as actionTypes from './actionTypes';

export const deleteItem = (id) => {
    return {
        type: actionTypes.DELETE_ITEM,
        id: id
    }
};

export const setEditItemMode = (bool) => {
    return {
        type: actionTypes.SET_EDIT_ITEM_MODE,
        bool: bool
    }
}

export const setSelectedItem = (item) => {
    return {
        type: actionTypes.SET_SELECTED_ITEM,
        item: item
    }
}