let initialState = {
    categories: {
        name: ['Adidas', 'Gucci', 'Polo'],
        displayName: ['Adidas display', 'Gucci display', 'Polo display'],
        desciption: ['this is Adidas Discription', 'this is Gucci Discription', 'this is Polo Discription']

    },
    current: '',
};

// name: {  'Adidas', displayName: 'Adidas display', desciption: 'this is Adidas Discription' },
// { name: 'Gucci', displayName: 'Gucci display', desciption: 'this is Gucci Discription' },
// { name: 'Polo', displayName: 'Polo display', desciption: 'this is Polo Discription' },


//reducer 

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'change':
            let current = payload;
            let categories = state.categories;
            return { categories, current };

        default:
            return state;
    }
}


// action 
export const change = (activated) => {
    return {
        type: 'change',
        payload: activated

    }
}