import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const categories = ['pending', 'confirmed', 'canceled', 'out for shipping', 'delivered'];

function OrderFilter() {
  const [category, setCategory] = useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };


  return (
    <div className='filters'>
    <h2>Filters</h2>
    <div className='filters-ctn'>
      <div className='filter-box mt-3 mb-2'>
        <InputLabel id='demo-simple-select-label mb-2'>Category</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={category}
          label='Age'
          className='w-100'
          onChange={handleChangeCategory}
        >
          {categories.map((category) => {
            return <MenuItem value={category}>{category}</MenuItem>;
          })}
        </Select>
      </div>
    </div>
    <Button variant="contained">Apply</Button>
  </div>
  )
}

export default OrderFilter
