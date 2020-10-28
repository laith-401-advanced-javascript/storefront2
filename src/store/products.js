import superagent from 'superagent';

let initialState = {
    products: [],
    results: [],
}


// eslint-disable-next-line
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'GETPRODUCT':
            return payload;

        case 'choose':
            let products = state.products;
            let results = state.products.filter((item, idx) => {
                // console.log('payload >>', payload);
                return item.category === payload.name;
            });
            // console.log('results >>',results);
            return { results, products };

        case 'DEC-CART':
            // console.log('state  >>' , state.results);

            state.results.forEach((element) => {
                // console.log('element >>' , element);
                if (element.name === payload.name) element.inStock--;
            });
            return { ...state };

        default:
            return state;
    }

}

// action 
export const chooseList = (clicked) => {
    return {
        type: 'choose',
        payload: clicked
    }
}


export const getRemoteProducts = () => (dispatch) => {
    var apiProduct = 'https://todos-api1.herokuapp.com/api/v1/products';
    return superagent.get(apiProduct)
        .then(data => {
            dispatch(getActionProducts(data.body));
        })
}


export const getActionProducts = payload => {
    return {
        type: 'GETPRODUCT',
        payload: payload
    }
}

export const decrementInStock = (name) => {
    return {
        type: 'DEC-CART',
        payload: name
    }
}

