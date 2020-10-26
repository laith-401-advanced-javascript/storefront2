let initialState = {
    categories: [
        {
            name: 'Adidas',
            displayName: 'Adidas display',
            desciption: 'this is Adidas Discription'
        },
        {
            name: 'Gucci',
            displayName: 'Gucci display',
            desciption: 'this is Gucci Discription'
        },
        {
            name: 'Polo',
            displayName: 'Polo display',
            desciption: 'this is Polo Discription'
        },
    ],
    current: '',
};

//reducer 
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