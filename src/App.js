// import logo from './logo.svg';
import './App.css';

// src/App.js
import React, { useState } from 'react';
import Header from './Header';
import { Grid } from '@mui/material';
import Leftapp from './Leftapp';
import Rightapp from './Rightapp';
import Data from './data';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemId) => {
    const selectedItem = Data.find(item => item.id === itemId);
    setSelectedItem(selectedItem);
  };

  return (
    <><Grid item xs={12}>
      <Header />
    </Grid><div style={{ padding: '2rem' }} className='main'>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Leftapp onClick={handleItemClick} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Rightapp selectedItem={selectedItem} />
          </Grid>
        </Grid>
      </div></>
  );
};

export default App;
