import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const categories = [
  'pending',
  'confirmed',
  'canceled',
  'out for shipping',
  'delivered',
];

function OrderCard(props) {
  const [category, setCategory] = useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const { totalProductCount, totalValue, status, orderBy, address, isAdmin } =
    props;
  return (
    <div className='card m-3' style={{ width: '18rem' }}>
      <div className='card-body'>
        <div className='product-card-title-grp'>
          <h5 className='card-title'>Products Count: {totalProductCount}</h5>
          <h5 className='card-title'>Rs {totalValue}</h5>
        </div>
        <p className='card-text'>Current Status: {status}</p>
        <p className='card-text'>Order Made by: {orderBy}</p>
        <p className='card-text'>Address: {address}</p>
      </div>
      <div className='card-body'>
          {isAdmin ? (
            <>
              <div className='filters-ctn'>
                <div className='filter-box mt-3 mb-2'>
                  <InputLabel id='demo-simple-select-label mb-2'>
                    Category
                  </InputLabel>
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
              <Button variant='contained'>Update</Button>
            </>
          ) : (
            ''
          )}
      </div>
    </div>
  );
}

export default OrderCard;
