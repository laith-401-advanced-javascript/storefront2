import React from 'react';
import { Grid, AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';


function Header() {
    return (
        <>
            <CssBaseline />
            <AppBar position="static" elevation={0} className="MuiAppBar-root">
                <Toolbar className="">
                    <Grid container justify="space-between" alignItems="center">
                        <Typography variant="h4">Our Store</Typography>
                        <Typography variant="h6">Cart ()</Typography>
                    </Grid>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Header;
