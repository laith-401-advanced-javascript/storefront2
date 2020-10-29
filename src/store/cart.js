import superagent from 'superagent';
let initialState = {
  cartItem: [],
  drawer: false
};


export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET-CART':
      payload.results.forEach(element => {
        // console.log('element >',element);
        if(state.cartItem.length < 3){
        state.cartItem.push(element)
        }
      });
      return { ...state }

    case 'ADD':
      state.cartItem.push(payload);
      return { ...state };

    case 'REMOVE':
      state.cartItem.splice(payload, 1);
      return { ...state  };

      case 'TOOGLE-DRAWER': 
        
      return !state.drawer ;

    default:
      return state;
  }
}


let api = 'https://todos-api1.herokuapp.com/api/v1/carts';
export const getCartAPI = () => dispatch => {
  return superagent.get(api)
    .then(data => {
      dispatch(getCartAction(data.body))
    });
}

export const createCart = (cartData) => dispatch => {
  // console.log('cartData >>>',cartData);
  return superagent.post(api).send(cartData).then()
}


export const updateRemoteCart = (cartData) => async dispatch => {
  // console.log('cartData', cartData);
  await superagent.put(`${api}/${cartData[0]._id}`).send(cartData);
}

export const getCartAction = payload => {
  return {
    type: 'GET-CART',
    payload: payload
  }
}

export const addAction = productAddedToCart => {
  return {
    type: 'ADD',
    payload: productAddedToCart
  }
}
export const removeFromCart = productRemoveFromCart => {
  return {
    type: 'REMOVE',
    payload: productRemoveFromCart
  }
}

export const toggleDrawer = toggle => {
  return {
    type: 'TOOGLE-DRAWER',
    payload: toggle
  }
}