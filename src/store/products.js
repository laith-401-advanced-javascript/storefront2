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

        case 'DEC-CART':
            state.results.forEach((element) => {
                if (element.name === payload.name) element.inStock--;
            });
            return { ...state };

        case 'INC-CART':
            state.results.forEach((element) => {
                if (element.name === payload.name) element.inStock++;
            });
            return { ...state };

        default:
            return state;
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

export const incrementInStock = (name) => {
    return {
        type: 'INC-CART',
        payload: name
    }
}