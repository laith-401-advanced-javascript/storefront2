/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { change } from '../store/categories.js';
// import { chooseList } from '../store/products.js';
import * as actions from '../store/categories';
// import * as productAction from '../store/products';

import { Box, ButtonGroup, Button, CssBaseline } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    browseCategories: {
        padding: 4,
        margin: 4,
    },
}));


const Status = props => {

    useEffect(() => {
        props.get();
        

    }, []);
    const classes = useStyles();

    console.log('props in categories >>', props);

    return (
        <>
            <CssBaseline />
            <Box>
                <h2 className={classes.browseCategories}>Browse our Categories</h2>

                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">

                    {props.categorieData.results.map((record, idx) => (
                        <Button key={idx} onClick={() => {
                            props.change(record.name)
                    
                        }}>
                                {record.name}
                            </Button>
                    )) }

                </ButtonGroup>
            </Box>

        </>
    )
}


const mapStateToProps = state => ({
    categorieData: state.categorieData
});

const mapDispatchToProps = (dispatch) => ({
    // chooseList, 
    change:  (name) => dispatch(actions.change(name)),
    get: () => dispatch(actions.getRemoteCategories())
    // getActionProducts: (name) => dispatch(productAction.getActionProducts(name))

});


export default connect(mapStateToProps, mapDispatchToProps)(Status)