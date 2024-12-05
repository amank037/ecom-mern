import React from 'react';
import Filter from './Filter';
import ProductCard from '../commons/ProductCard';
import Pagination from '@mui/material/Pagination';

function Products() {
  const products=[
    {
      name:'product1',
      price: 200,
      description: 'tnrvecrythtg',
      stock:100,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHKl4bjdGbN6pvO4_O5A08XRMblLj8mEBVg&usqp=CAU',
      rating: 3.5
    },
    {
      name:'product1',
      price: 200,
      description: 'tnrvecrythtg',
      stock:100,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHKl4bjdGbN6pvO4_O5A08XRMblLj8mEBVg&usqp=CAU',
      rating: 3.5
    },
    {
      name:'product1',
      price: 200,
      description: 'tnrvecrythtg',
      stock:100,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHKl4bjdGbN6pvO4_O5A08XRMblLj8mEBVg&usqp=CAU',
      rating: 3.5
    }
  ]
  return (
    <div className='products'>
      <div className='product-ctn'>
        <h1 className='product-heading'>Our products</h1>
        <div className='products-ctn'>
          <Filter />
          <div className='product-cards d-flex flex-wrap justify-content-around'>
            {
              products.map(product=>{
                const { name, price, rating, stock, image, description} = product;
                return <ProductCard name={name} price={price} rating={rating} stock={stock} image={image} description={description}/>
              })
            }
          </div>
        </div>
        <Pagination count={10} variant="outlined" shape="rounded" className='m-3' />
      </div>
    </div>
  );
}

export default Products;
