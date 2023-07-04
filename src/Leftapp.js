import React from 'react';
import Data from './data';
import './Dropdown.css';
import {styled} from '@mui/material/styles';
// import {List, ListItem, ListItemText, InputLabel} from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';





const useStyles = styled({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#f0f0f0',
      padding: '0.5rem',
    },
  });

const Leftapp = ({onClick}) => {
    const classes=useStyles();
    const handleChange = (event) => {
      onClick(event.target.value);
    };
  return (
    <div>
      <h2>Leftapp</h2>
      <FormControl variant="outlined" style={{ minWidth: 200 }}>
        <InputLabel>Items</InputLabel>
        <Select onChange={handleChange} label="Items">
          {Data.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

  )
}

export default Leftapp