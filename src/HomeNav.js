import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    appbar : {
     background : 'linear-gradient(45deg, #00EFFE 40%, #93EDC7 90%)',
     height : '13vh',
    },
    
    title :{
     color : '#ffffff',
     alignContent : "center" ,
     justifyContent : "center" ,
    },
  
  }));

export const HomeNav = () => {
    
    const classes = useStyles();

  return (
    <div>
            <Box sx={{ flexGrow: 1 }} className = {classes.appbar} >
      <AppBar position="static" color='transparent' className = {classes.appbar} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}

          >
          <ListIcon/>
          </IconButton>
           
           <Typography variant="h4" color="default" component="div" sx={{ flexGrow: 1 }} className={classes.title} >
            AATANK
          </Typography>

           <Button color="info" href = '/'>Home</Button> 
          <Button color="info" href = '/signup' >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
