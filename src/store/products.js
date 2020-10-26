let initialState = {
    products: [
         {
            name: 'shoes',
            description: 'this is shoes desctiption',
            category: 'Adidas'
        },
        {
            name: 'bags',
            description: 'this is bags desctiption',
            category: 'Polo'
        },
        {
            name: 'sokes',
            description: 'this is sokes desctiption',
            category: 'Gucci'
        },
    ],
    results: [],
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'choose':
            let products = state.products;
            let results = state.products.filter((item,idx)=> {
                console.log('payload >>', payload);
                return item.category === payload.name;
            });
            console.log('results >>',results);
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
