/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Rating from '@mui/material/Rating';

function ProductCard(props) {
  const {name, price, image, rating, stock, description } = props;
  return (
      <div className='card m-3' style={{width: "18rem"}}>
        <img src={image} alt='Card image cap' className=" card-img-top img-thumbnail" style={{ height:"8rem"}}/>
        <div className='card-body'>
          <div className='product-card-title-grp'>

          <h5 className='card-title'>{name}</h5>
          <h5 className='card-title'>Rs {price}</h5>
          </div>
          <p className='card-text'>
            {description}
          </p>
        </div>
        <Rating name='no-value' value={rating} precision={0.5} className='p-2' readOnly />
        <div className='card-body'>
          <div className="product-card-btn-grp">

        <button type="button" class="btn btn-secondary">Add Review</button>
        {
          stock > 0 ?
          <button type="button" class="btn btn-primary">Add To card</button> :
          <button type="button" class="btn btn-danger" disabled>Out of stock</button>
        }
          </div>
        </div>
      </div>
  );
}

export default ProductCard;
