/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */

import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/cart.js'
import { removeFromCart } from '../store/cart.js'
import {  CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
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
        paddingTop: '24px',
        paddingBottom: '24px'
    }
}));



const Cart = props => {

    const classes = useStyles();
    // console.log('Props in Cart >>', props);

    return (
        <>
            {props.cart.cart.map((item,idx) => {
                return (
                    <>
                        <Container key={idx} maxWidth="md" component="main">

                            <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">
                                <Grid className={classes.jss8} container item xs={12} sm={6} lg={2} >
                                    <Card key={idx} className={classes.card}>

                                        <CardMedia key={idx}
                                            className={classes.media}
                                            image={item.image}
                                            title={item.name}
                                        />
                                        <CardContent >

                                            <Typography variant="h5" color="textPrimary">
                                                {item.name}
                                            </Typography>

                                        </CardContent>

                                        <CardActions>
                                            <Button key={idx}  style={{ fontSize: '0.8125rem' }} color="primary" onClick={() => { props.removeFromCart(item) }} >X</Button>
                                        </CardActions>

                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>

                    </>
                )
            }

            )}

        </>
    )
}



const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = { addToCart, removeFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)