// import superagent from 'superagent' ;

// var api = 'https://alhrthani-todos.herokuapp.com/api/v1/categories';

// export const getRemoteCategories =  () => (dispatch) => {
//     return superagent.get(api)
//     .then(data => {
//         dispatch(getActionCategories(data.body));
//     })
// }


// export const getActionCategories = payload => {
//     return {
//         type: 'GET'  ,
//         payload : payload
//     }
// }



// var apiProduct = 'https://alhrthani-todos.herokuapp.com/api/v1/products';

// export const getRemoteProducts =  () => (dispatch) => {
//     return superagent.get(apiProduct)
//     .then(data => {
//         dispatch(getActionProducts(data.body));
//     })
// }


// export const getActionProducts = payload => {
//     return {
//         type: 'GET'  ,
//         payload : payload
//     }
// }