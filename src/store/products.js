let initialState = {
    products: {
        Adidas : {
            name: ['shose', 'bags'],
            desciption: ['this is Adidas shose', 'this is Adidas bags', ],
            inventoryCount: [2, 4,],
            price: ['$100', '$200']
        },
        Gucci : {
            name: [ 'cologne', 'perfume'],
            desciption: ['this is Gucci cologne', 'this is Gucci perfume'],
            inventoryCount: [6, 10],
            price: ['$30', '$40'],
        },
        Polo: { 
            name: ['T-shert', 'jacket'],
            desciption: ['this is T-shert Polo', 'this is jacket Polo'],
            inventoryCount: [ 20, 22],
            price: ['$50', '$120']
        }
    },
    results: [],
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'choose':
            let products = state.products;
            let results = state.products[payload];
            // console.log('results >>',results);
            return { results, products };

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
