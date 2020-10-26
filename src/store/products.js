let initialState = {
    products: [
        {
            category: "ELECTRONICS",
            name: " SAMSUNG TV",
            description: "SAMSUNG TV 50 INCH ",
            inventoryCount: 200,
            price: "$100",
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6268/6268403_sd.jpg'
          },
          {
            category: "ELECTRONICS",
            name: " LG TV",
            description: "LG TV 40 inch",
            inventoryCount: 40,
            price: "$200",
            image: 'https://e-spotechnologies.com/wp-content/uploads/2020/02/LG-32LM630BPVB.jpg'
          },
      
          {
            category: "FOOD",
            name: "chips",
            description: "DORITOS CHIPS IS THE BEST ",
            inventoryCount: 600,
            price: "$3",
            image: 'https://images-na.ssl-images-amazon.com/images/I/81kZD%2BSrSDL._SY445_.jpg'
          },
          {
            category: "FOOD",
            name: "chochlate",
            description: "snikers chochlate",
            inventoryCount: 100,
            price: "$1.50",
            image: 'https://www.kroger.com/product/images/xlarge/front/0004000044327'
          },
      
    ],
    results: [],
}
// eslint-disable-next-line
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'choose':
            let products = state.products;
            let results = state.products.filter((item,idx)=> {
                // console.log('payload >>', payload);
                return item.category === payload.name;
            });
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
