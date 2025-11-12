import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <AppBar position='static' color='primary'>
        <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }} >
                My Blog
                </Link>

            </Typography>

            <Button color='inherit' component={Link} to="/">
            Home
            </Button>

            <Button color='inherit' component = {Link} to= '/create'>
                Create Blog
            </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar
