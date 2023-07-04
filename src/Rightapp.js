// src/RightChild.js
import React from 'react';
import './App.css'
import { styled} from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

const useStyles = styled({
    root: {
      minWidth: 100,
      backgroundColor: '#f0f0f0',
      padding: '1rem',
    },
  });

const Rightapp = ({ selectedItem }) => {
    const classes=useStyles();
  const item = selectedItem || { id: 3, Name: 'Shirt 3', Price: 150 };

  return (
    <div  className={classes.root}>
      <h2>Right Child</h2>
      <Card variant="outlined" className='rightapp'>
        <CardContent>
          <Typography variant="h5" component="h2">
            {item.Name}
          </Typography>
          <Typography color="textSecondary">ID: {item.id}</Typography>
          <Typography variant="body2" component="p">
            Price: {item.Price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rightapp;
