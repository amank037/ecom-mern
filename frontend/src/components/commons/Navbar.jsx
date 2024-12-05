/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Navbar(props) {
  const { isAuth = true, isAdmin = true } = props;
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary p-0 text-white'>
      <div className='container-fluid nav text-white'>
        <a className='navbar-brand text-white' href='#'>
          Regex <SportsEsportsIcon />
        </a>
        <button
          className='navbar-toggler text-white'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarScroll'
          aria-controls='navbarScroll'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon text-bg-light'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarScroll'>
          <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-white'>
            <li className='nav-item'>
              <a
                className='nav-link active text-white'
                aria-current='page'
                href='#'
              >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link  text-white' href='/products'>
                Products
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link  text-white' href='/contact'>
                contact us
              </a>
            </li>
            {
              isAuth?
            <li className='nav-item'>
              <a className='nav-link  text-white' href='/orders'>
               Orders
              </a>
            </li>:''
            }
            {
              isAdmin ?
              <><li className='nav-item'>
                  <a className='nav-link  text-white' href='/'>
                    Users
                  </a>
                </li><li className='nav-item'>
                    <a className='nav-link  text-white' href='/admin/orders'>
                      Orders(update)
                    </a>
                  </li><li className='nav-item'>
                    <a className='nav-link  text-white' href='/'>
                      Products
                    </a>
                  </li></>
             :''
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
