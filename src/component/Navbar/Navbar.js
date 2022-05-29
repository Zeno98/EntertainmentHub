import * as React from 'react';
import {useNavigate} from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState(0);

  let navigate=useNavigate();

  React.useEffect(()=>{
      if(value===0){
          navigate('/')
      }
      else if(value===1){
          navigate('/movies')
      }
      else if(value===2){
        navigate('/series')
      }
      else if(value===3){
        navigate('/search')
      }

  },[value,navigate])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
      
    <BottomNavigation sx={{ width: "100%", position:"fixed",bottom:0,color:"black" }} onChange={handleChange} showLabels >
      <BottomNavigationAction
      sx={{ color:"black" }}
        label="Trending"
        value={0}
        icon={<WhatshotIcon />}
        
      />
      <BottomNavigationAction
       sx={{ color:"black" }}
        label="Movies"
        value={1}
        icon={<TheatersIcon />}
      />
      <BottomNavigationAction
       sx={{ color:"black" }}
        label="TV Series"
        value={2}
        icon={<LiveTvIcon />}
      />
      <BottomNavigationAction
       sx={{ color:"black" }}
       label="Search"
        value={3}
        icon={<SearchIcon />} />
    </BottomNavigation>
  );
}