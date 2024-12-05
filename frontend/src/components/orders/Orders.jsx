import React from 'react';
import OrderFilter from './OrderFilter';
import OrderCard from './OrderCard';
import Pagination from '@mui/material/Pagination';

function Orders(props) {
  const { isAdmin } = props
  const orders=[
    {
      status: 'pending',
      address: '110c new york',
      orderBy: 'donald',
      totalValue: 1000,
      totalProductCount: 5 
    },
    {
      status: 'pending',
      address: '110c new york',
      orderBy: 'donald',
      totalValue: 1000,
      totalProductCount: 5 
    },
    {
      status: 'pending',
      address: '110c new york',
      orderBy: 'donald',
      totalValue: 1000,
      totalProductCount: 5 
    },
    {
      status: 'pending',
      address: '110c new york',
      orderBy: 'donald',
      totalValue: 1000,
      totalProductCount: 5 
    },
  ]
  return (
    <div className='products'>
      <div className='product-ctn'>
        <h1 className='product-heading'>{isAdmin ? 'Cusomter Orders': 'Your Orders' }</h1>
        <div className='products-ctn'>
          <OrderFilter />
          <div className='product-cards d-flex flex-wrap justify-content-around'>
            {
              orders.map(order=>{
                const { totalProductCount, totalValue, orderBy, status, address} = order;
                return <OrderCard totalProductCount={totalProductCount} totalValue={totalValue} orderBy={orderBy} status={status} address={address} isAdmin={isAdmin}/>
              })
            }
          </div>
        </div>
        <Pagination count={10} variant="outlined" shape="rounded" className='m-3' />
      </div>
    </div>
  );
}

export default Orders
