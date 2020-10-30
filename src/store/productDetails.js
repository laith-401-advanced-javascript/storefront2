// import superagent from 'superagent';

let initialState = {
    products: {},
}

// eslint-disable-next-line
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch(type) {
        case 'GET-DETAILS':
            console.log(' payload in detail >>', payload);
            state.products = payload ;
        return {...state};

        case 'GIVE-DETAILS':

        return state.products;

        default :
        return state ;
    }
}


export const getActionProductsDetails = payload => {
    return {
        type: 'GET-DETAILS',
        payload: payload
    }
}


export const giveActionProductsDetails = payload => {
    return {
        type: 'GIVE-DETAILS',
        payload: payload
    }
}