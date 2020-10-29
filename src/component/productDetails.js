import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import * as actionsDetails from '../store/productDetails';
import * as actionsCart from '../store/cart.js'
import * as actions from '../store/products';

import { Box, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
    },
    jss9: {
        width: '100%',
        marginTop: '24px',
        marginBottom: '24px',
        color: '#fff',
        backgroundColor: '#3f51b5'
    }

}));




const ProductDetails = props => {

    const classes = useStyles();

    useEffect(() => {
        props.give();
    }, []);

    const updateFunctions = element => {
        props.addToCart(element) //working
        props.decrementInStock(element)
        // props.updateRemoteCart(props.productDateDetails.products)
    }
    console.log("props in prod details ---> ", props)
    return (
        <>

            
            <Box className={classes.jss5} textAlign="center">
                <Typography variant="h2" color="textPrimary">
                    {props.productDateDetails.name}
                </Typography>
            </Box>

            <Container maxWidth="md" component="main">

                <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">

                    <Grid className={classes.jss8} container item xs={12} sm={6} lg={6} >


                        <Card className={classes.card}>

                            <CardMedia
                                className={classes.media}
                                image={props.productDateDetails.img}
                            // title={item.name}

                            />
                            <CardContent >

                                <Typography color="textSecondary">
                                    inStock :  {props.productDateDetails.inStock}
                                </Typography>

                                <Typography color="textSecondary">
                                    price :  {props.productDateDetails.price}
                                </Typography>


                            </CardContent>


                            
                            <Button className={classes.jss9} style={{ fontSize: '0.8125rem' }} color="primary" onClick={() => updateFunctions(props.productDateDetails)} >BUY</Button>
                          


                        </Card>

                    </Grid>

                </Grid>
            </Container>

        </>
    )
}

const mapStateToProps = state => ({
    productDateDetails: state.productDateDetails
})

const mapDispatchToProps = (dispatch) => ({
    give: () => dispatch(actionsDetails.giveActionProductsDetails()),
    decrementInStock: (product) => dispatch(actions.decrementInStock(product)),
    addToCart: (product) => dispatch(actionsCart.addAction(product)),
    updateRemoteCart: (product) => dispatch(actionsCart.updateRemoteCart(product)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)