import * as actionTypes from '../actions/actionTypes';

const initialItems = [
    {id: 1, name: 'Polo Shirt', imgUrl: 'https://images.sportsdirect.com/images/products/54202501_l.jpg', styleNum: 'MS13KT1906', color: 'blue', size: 'S', quantity: 1, price: 11 },
    {id: 2, name: 'Graphic Shirt', imgUrl: 'https://cdn.shopify.com/s/files/1/2250/2843/products/mockup-d28bd8b0_grande.jpg', styleNum: 'MS13KT1906', color: 'pink', size: 'S', quantity: 1, price: 17 },
    {id: 3, name: 'V-Neck', imgUrl: 'https://shirtsofcotton.com/en/media/catalog/product/cache/10/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/s/h/shirtsofcotton-t-shirt-soc-12-front-1200px.jpg', styleNum: 'MS13KT1906', color: 'blue', size: 'S', quantity: 1, price: 21 },
    {id: 4, name: 'Tank Top', imgUrl: 'http://cdn.shopify.com/s/files/1/1347/4217/products/BonJovi-MoonTank-Womens-Main_grande.jpg', styleNum: 'MS13KT1906', color: 'red', size: 'M', quantity: 1, price: 22 },
]

const initialState = {
    items: initialItems, 
    selectedItem: null,
    editItemMode: false
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case (actionTypes.DELETE_ITEM):
            let newItems = state.items.filter(item => {
                return item.id !== action.id
            });
            return {
                ...state,
                items: newItems
            }
        case (actionTypes.SET_EDIT_ITEM_MODE):
            return {
                ...state,
                editItemMode: action.bool
            }
        case (actionTypes.SET_SELECTED_ITEM):
            return {
                ...state,
                selectedItem: action.item
            }
        case (actionTypes.SET_EDIT_SELECTED_ITEM):
        
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.editInfo.id ) {
                        item.color = action.editInfo.color;
                        item.size = action.editInfo.size;
                        item.quantity = action.editInfo.quantity;
                        return item;
                    } else {
                        return item;
                    }
                })
            }
        default:
            return state; 
    }

}

export default reducer;