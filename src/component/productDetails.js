import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import * as actionsDetails from '../store/productDetails';
import * as actionsCart from '../store/cart.js'
import * as actions from '../store/products';

// import { Box,Accordion,AccordionSummary,AccordionDetails, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    imgStyle: {
        width: '100%',
        padding: '20px 15px 0 15px'
    },
    rightAlign: {
        textAlign: 'right'
    },
    addBtn: {
        margin: '20px 0 30px 0'
    },
    container: {
        padding: '20px 0 50px 0'
    },
    margin: {
        margin: '30px 0 10px 0'
    },
}));




const ProductDetails = props => {

    const classes = useStyles();

    useEffect(() => {
        props.give();
         // eslint-disable-next-line
    }, []);

    const updateFunctions = element => {
        props.addToCart(element) //working
        props.decrementInStock(element)
        // props.updateRemoteCart(props.productDateDetails.products)
    }
    console.log("props in prod details ---> ", props)
    return (
        <>


            {/* <Box className={classes.jss5} textAlign="center">
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
            </Container> */}
            <Container maxWidth='sm' className={classes.container}>
                <Typography variant='h3' align='center' gutterBottom>
                    {props.productDateDetails.name}
                </Typography>
                <Typography
                    align='center'
                    color='textSecondary'
                    component='div'
                    gutterBottom>
                    {props.productDateDetails.description}
                </Typography>
                <Card className='card'>
                    <img src={props.productDateDetails.img} className={classes.imgStyle} alt="img" />
                    <CardContent justify="space-between">
                        <Grid container xs={12}>
                            <Grid xs={6}>
                                <Typography align='left' color='textSecondary' component='span'>
                                    In Stock: {props.productDateDetails.inStock}
                                </Typography>
                            </Grid>
                            <Grid xs={6} className={classes.rightAlign}>
                                <Typography align='right' color='textSecondary' component='span'>
                                    {new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(props.productDateDetails.price)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    className={classes.addBtn}
                    onClick={() => {
                        updateFunctions(props.productDateDetails)
                    }}
                    // disabled={disabled} 
                    >
                    Add To Cart
            </Button>
                <Grid container>
                    <Grid className={classes.margin} item xs={12}>
                        <Typography variant='h5'>Related Items</Typography>
                    </Grid>
                    <Grid item xs={4} className='suggestions'>
                        <Card>
                            <CardContent>
                                <Typography variant='body2' display='inline' align='center'>
                                    Suggestion
                        </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <Typography variant='body2' display='inline' align='center'>
                                    Suggestion
                        </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <Typography variant='body2' display='inline' align='center'>
                                    Suggestion
                        </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid className={classes.margin} item xs={12}>
                        <Typography variant='h5'>Product Details</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls='panel1a-content'
                                id='panel1a-header'
                            >
                                <Typography>Specifications</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    This product has all the specs...don't even worry about it.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls='panel2a-content'
                                id='panel2a-header'
                            >
                                <Typography>User Reviews</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    This product was so great! You should buy it.
                        </Typography>
                            </AccordionDetails>
                        </Accordion>
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