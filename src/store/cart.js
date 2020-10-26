/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
let initialState = {
    cart: [],
    count: 0
}

// eslint-disable-next-line
export default (state = initialState, action) => {
    let { type, payload } = action;
    let count = state.count;
    let cart = state.cart;

    switch (type) {
        case 'cart':
            let length = state.cart.length;
            payload = { ...payload, id: length + 1 } // this line say pring to me the same payload and add the id on it

            count = state.count + 1;
            return { cart: [...state.cart, payload], count }

        case 'removeFromCart':

            // eslint-disable-next-line
            cart = cart.filter(item => {
                if (item.id !== payload.id) {
                    return item;
                }
            });

            count = state.count - 1;
            return {  cart, count };

        default:
            return state;
    }

}


export const addToCart = (add) => {
    return {
        type: 'cart',
        payload: add
    }
}

//action RemoveFrom Cart 
export const removeFromCart = (remove) => {
    return {
        type: 'removeFromCart',
        payload: remove
    }
}