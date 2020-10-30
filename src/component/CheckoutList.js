/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// import { CardMedia,ListItem,List, ListItemText , Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../store/cart';
import * as actionsProduct from '../store/products';



const useStyles = makeStyles((theme) => ({
  ul1: {
    background: '#fff',
    border: 'none',
    listStyleType: 'none',
    margin: 0,
    padding: '1rem'
  },
  li1: {
    border: 'none!important'
  },
  listHeader: {
    padding: '20px 0px 0 20px',
  }
}));



const CheckoutList = props => {
  const { cartData } = props;
  const classes = useStyles();
// eslint-disable-next-line
  useEffect(() => {
    props.getCartAPI();

  }, [props]);

  console.log(')))))))))))', props);

  let total = 0;
  let list = [];
  cartData.cartItem.forEach((product) => {
    console.log('product >>', product);
    total += product.total;
    list.push(
      <ListItem className={classes.li1} key={product._id}>
        {/* secondary={product.description} */}
        <ListItemText primary={product.name} />
        <Typography variant='body2'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(product.price)}{' '}
          x {product.quantity} = {' '}
          <strong>
            {' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price * product.quantity)}
          </strong>
        </Typography>
      </ListItem>,
    );
  });

  console.log('Props in Cart >>', props);

  // const deleteProductsfromCart = (idx, element) => {
  //   props.removeFromCart(idx);
  //   props.incrementInStock(element);
  // }


  return (
    <>
      {/* {props.cartData.cartItem.map((element, idx) => { */}

      <>
        {/* <Container key={idx} maxWidth="md" component="main">

                            <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">
                                <Grid className={classes.jss8} container item xs={12} sm={6} lg={2} >
                                    <Card key={idx} className={classes.card}>

                                        <CardMedia key={idx}
                                            className={classes.media}
                                            image={element.img}
                                            title={element.name}
                                        />
                                        <CardContent >

                                            <Typography variant="h5" color="textPrimary">
                                                {element.name}
                                            </Typography>

                                        </CardContent>

                                        <CardActions>
                                            <Button key={idx} style={{ fontSize: '0.8125rem' }} color="primary" onClick={() => deleteProductsfromCart(idx , element)} >X</Button>
                                        </CardActions>

                                    </Card>
                                </Grid>
                            </Grid>
                        </Container> */}

        <Typography className={classes.listHeader} variant='h6' align='left' gutterBottom>
          Order summary
                   </Typography>

        <List className={classes.ul1}>
          {list}

          <ListItem className={classes.li1}>

            <ListItemText primary='Total' />

            <Typography variant='subtitle1'>

              <strong>

                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(total)}

              </strong>

            </Typography>

          </ListItem>

        </List>
      </>





    </>
  )
}


const mapStateToProps = state => ({
  cartData: state.cartData,
  cart: state.cart,

});


const mapDispatchToProps = (dispatch, getState) => ({
  getCartAPI: () => dispatch(actions.getCartAPI()),
  removeFromCart: (productidx) => dispatch(actions.removeFromCart(productidx)),
  incrementInStock: (product) => dispatch(actionsProduct.incrementInStock(product)),
});



export default connect(mapStateToProps, mapDispatchToProps)(CheckoutList)