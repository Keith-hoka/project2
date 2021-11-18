import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import "./Location.css";

const countries = [
  {
    label: 'United States',
  },
  {
    label: 'Australia',
  },
  {
    label: 'Canada',
  },
  {
    label: 'Japan',
  },
  {
    label: 'United Kingdom',
  },
  {
    label: 'France',
  },
  {
    label: 'Germany',
  },
];



function Location() {
  const [country, setCountry] = useState('Australia');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <form>
      <div>
        <TextField
          select
          value={country}
          onChange={handleChange}
        >
          {countries.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}

export default Location;
