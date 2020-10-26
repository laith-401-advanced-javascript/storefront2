import React from 'react';

import Header from './component/header.js';
import Footer from './component/footer.js';
import Categories from './component/categories.js';
import Products from './component/products.js';

import './app.scss';



class App extends React.Component {
    render() {

        return (
            <>
                <Header />
                <Categories />
                <Products />
                <Footer />
            </>
        )
    }
}

export default App ;