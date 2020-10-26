let initialState = {
    categories: [
        {
            name: 'ELECTRONICS',
            displayName: 'Adidas display',
            desciption: 'Category Description Goes Here'

             },
        {
            name: 'FOOD',
            displayName: 'Gucci display',
            desciption: 'Category Description Goes Here'
        },

    ],
    current: '',
};

//reducer 
// eslint-disable-next-line
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'change':
            let current = payload;
            let categories = state.categories.map((item,idx)=> {
                if(item.name === payload) {
                    return {name: item.name ,
                         displayName : item.displayName ,
                          desciption: item.desciption}
                }
                return item ;
            });
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