import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

const categories = ['Electronics', 'Cloths', 'Home Decor', 'Mobile', 'Laptops'];

function valuetext(value) {
  return `${value[0]}-${value[1]}`;
}

function Filter() {
  const [priceRange, setPriceRange] = useState([0,1000]);
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };


  const handleChangePrice = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleChangeRating = (event, newValue) => {
    setRating(newValue);
  }


  return (
    <div className='filters'>
    <h2>Filters</h2>
    <div className='filters-ctn'>
      <div className='filter-box mt-3 mb-2'>
        <InputLabel id='demo-simple-select-label mb-2'>Rating</InputLabel>
        <Rating name='no-value' value={rating} onChange={handleChangeRating} precision={0.5}/>
      </div>
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
      <div className='filter-box mt-3 mb-2'>
        <InputLabel id='demo-simple-select-label mb-2'>Price Range</InputLabel>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={priceRange}
          valueLabelDisplay='auto'
          onChange={handleChangePrice}
          max={1000}
          min={10}
          getAriaValueText={valuetext}
        />
      </div>
    </div>
    <Button variant="contained">Apply</Button>
  </div>
  )
}

export default Filter
