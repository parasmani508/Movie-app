import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import { makeStyles } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';



const useStyles=makeStyles(
    {
        root:
        {
            width: '100%',
            position: 'fixed',
            bottom: 0,
          //  backgroundColor: "#21506b",

            zIndex: 100,
            
        },
    }
);

export default function SimpleBottomNavigation() {
    const classes=useStyles();
  const [value, setValue] = React.useState(0);
  const nevigate=useNavigate();//Nevigate is coming from react router dom
  
  
  useEffect(()=>
  {
     if(value===0)
     nevigate("/");
    else if(value===1)
    nevigate("/movies");
    else if(value===2)
    nevigate("/series");
    else if(value===3)
    nevigate("/search");
  },[value,nevigate])

  return (
    <Box  sx={{ width: 500}} >
      <BottomNavigation 
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
        // style={{color:"white"}}
        label="Recents" 
        icon={<WhatshotIcon />} 
        />
        <BottomNavigationAction 
        // style={{color:"white"}}
        label="Movies" 
        icon={<MovieIcon />} 
        />
        <BottomNavigationAction 
        //  style={{color:"white"}}
        label="TV series" 
        icon={<TvIcon />}
         />
        <BottomNavigationAction 
        //  style={{color:"white"}}
        label="Search" 
        icon={<SearchIcon />} 
        />
      </BottomNavigation>
    </Box>
  );
}