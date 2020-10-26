import React from 'react';

import { connect } from 'react-redux';
import { change } from '../store/categories.js';
import { chooseList } from '../store/products.js';
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

    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Box>
                <h2 className={classes.browseCategories}>Browse our Categories</h2>

                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">

                    {props.current.categories.map(item => (
                        <Button key={item.name} onClick={() => {
                            props.change(item);
                            props.chooseList(item);

                        }} >
                            {item.name}

                        </Button>
                    ))}
                </ButtonGroup>
            </Box>

        </>
    )
}

const mapStateToProps = state => {
    return { current: state.activator };
}

const mapDispatchToProps = { change, chooseList }


export default connect(mapStateToProps, mapDispatchToProps)(Status)