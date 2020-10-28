import superagent from 'superagent' ;


let initialState = {
    results: [],
    activeCategory: '',
};

//reducer 
// eslint-disable-next-line
export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GETCATEGORIES':
            // state.categories = [...payload.results]
            // return {...state};
            return payload;
        case 'change':
            // console.log('pay',payload);
            state.activeCategory = payload;
            return {...state };

        default:
            return state;
    }
}

// action 
export const change = (name) => {
    return {
        type: 'change',
        payload: name

    }
}



export const getRemoteCategories =  () => (dispatch) => {
    var api = 'https://todos-api1.herokuapp.com/api/v1/categories';

    return superagent.get(api)
    .then(data => {
        dispatch(getActionCategories(data.body));
    })
}


export const getActionCategories = payload => {
    return {
        type: 'GETCATEGORIES'  ,
        payload : payload
    }
}
