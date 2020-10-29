/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import React from 'react';
import Header from './component/header.js';
import Footer from './component/footer.js';
import Categories from './component/categories.js';
import Products from './component/products.js';
import ProductsDetails from './component/productDetails';

import Cart from './component/cart.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './app.scss';


const App = props => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Categories />
                    <Products />
                </Route>
                
                <Route exact path="/product">
                    <ProductsDetails />
                </Route>

                <Route exact path="/cart">
                    <Cart />
                </Route>

            </Switch>
            <Footer />
        </BrowserRouter >
    )

}

export default App;