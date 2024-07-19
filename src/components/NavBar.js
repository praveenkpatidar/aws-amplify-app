import React from 'react';
import '../App.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { signOut } from 'aws-amplify/auth';



const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className="navBarTitle">
          Smart Shopping List
        </Typography>
        <Button color="inherit"
          onClick={async () => {
            await signOut();
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
