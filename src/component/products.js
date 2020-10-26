import React from 'react';
import { connect } from 'react-redux';
import { chooseList } from '../store/products.js';
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
    }
}));


const Status = props => {
    // console.log('props >>>2222', props);

    const classes = useStyles();

    return (
        <section className="product">
            <ul>

                <Box className={classes.jss5} textAlign="center">
                    <Typography variant="h2" color="textPrimary">
                        {props.activator.current.name}

                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        {props.activator.current.desciption}
                    </Typography>
                </Box>

                {props.list.results.map((item, idx) => {
                    return (

                        <Container maxWidth="md" component="main">

                            <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">

                                <Grid className={classes.jss8} container item xs={12} sm={6} lg={4} >


                                    <Card key={item.name} className={classes.card}>

                                        <CardMedia
                                            className={classes.media}
                                            image={item.image}
                                            title={item.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" color="textPrimary">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="p" color="textSecondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button style={{ fontSize: '0.8125rem' }} color="primary">Add to Cart</Button>
                                        </CardActions>
                                    </Card>

                                </Grid>

                            </Grid>
                        </Container>

                    );

                })}
            </ul>
        </section>

    )
}


const mapStateToProps = state => {
    return state;
};

const mapDespatchRoProps = { chooseList };

export default connect(mapStateToProps, mapDespatchRoProps)(Status)