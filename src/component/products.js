/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionsCart from '../store/cart.js'
import * as actions from '../store/products';
import * as actionsDetails from '../store/productDetails';

import { Box, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    fullHeight: {
        height: "100%"
    },
    card: {
        margin: '1em',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px'
    },
    jss8: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'initial'
    },
    jss5: {
        padding: '64px 0px 48px'
    },
    jss7: {
        paddingTop: '64px',
        paddingBottom: '64px'
    }
}));


const Status = props => {

    useEffect(() => {
        props.getProduct();
         // eslint-disable-next-line
    }, []);

    const updateFunctions = element => {
        props.addToCart(element) //working
        props.decrementInStock(element)
        props.updateRemoteCart(props.cartData.cartItem)
    }

    const classes = useStyles();
    // console.log('propppps in p', props);

    return (
        <section className="product">
            <ul>

                <Box className={classes.jss5} textAlign="center">
                    <Typography variant="h2" color="textPrimary">
                        {props.categorieData.activeCategory}
                    </Typography>
                </Box>

                {/* eslint-disable-next-line*/}
                {props.productData.results.map((item, idx) => {
                    // console.log('item ><<<<', item);
                    if (item.category === props.categorieData.activeCategory) {
                        return (

                            <Container key={idx} maxWidth="md" component="main">

                                <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">

                                    <Grid key={idx} className={classes.jss8} container item xs={12} sm={6} lg={4} >


                                        <Card key={idx} className={classes.card}>

                                            <CardMedia key={idx}
                                                className={classes.media}
                                                image={item.img}
                                                title={item.name}

                                            />
                                            <CardContent >
                                                <Typography variant="h5" color="textPrimary">
                                                    {item.name}
                                                </Typography>
                                                <Typography color="textSecondary">
                                                    {item.description}
                                                </Typography>
                                                <Typography color="textSecondary">
                                                    inStock :  {item.inStock}
                                                </Typography>
                                            </CardContent>

                                            <CardActions>
                                                <Button key={idx} style={{ fontSize: '0.8125rem' }} color="primary" onClick={() => updateFunctions(item)}  >ADD TO CART</Button>

                                                <Link to="/product">
                                                    <Button key={idx} style={{ fontSize: '0.8125rem' }} color="primary" onClick={() => props.get(item)}  >VIEW DETAILS</Button>
                                                </Link>

                                            </CardActions>
                                        </Card>

                                    </Grid>

                                </Grid>
                            </Container>

                        );
                    }
                })}
            </ul>
        </section>
    )
}


const mapStateToProps = state => ({
    productData: state.productData,
    productDataDetails: state.productDataDetails,
    categorieData: state.categorieData,
    cartData: state.cartData,

});


const mapDespatchRoProps = (dispatch) => ({
    decrementInStock: (product) => dispatch(actions.decrementInStock(product)),
    addToCart: (product) => dispatch(actionsCart.addAction(product)),
    updateRemoteCart: (product) => dispatch(actionsCart.updateRemoteCart(product)),
    getProduct: () => dispatch(actions.getRemoteProducts()),
    get: (product) => dispatch(actionsDetails.getActionProductsDetails(product))
});


export default connect(mapStateToProps, mapDespatchRoProps)(Status)