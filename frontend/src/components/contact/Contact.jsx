import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Contact() {
  return (
    <div className='contact-ctn m-3'>
      <main className='form-signin m-auto text-white contact p-3 m-3'>
        <form className='w-100 m-3 contact-form'>
          <SportsEsportsIcon className='contact-icon' />
          <h1 className='h3 mb-3 fw-normal'>Please Fill the given form</h1>

          <div className='form-floating mb-3 w-100'>
            <input
              type='email'
              className='form-control text-black'
              id='floatingInput'
              placeholder='name@example.com'
            />
            <label for='floatingInput text-black'>Email address</label>
          </div>
          <div className='form-floating  mb-3 w-100'>
            <input
              type='mobile'
              className='form-control'
              id='floatingInput'
              placeholder='Mobile'
            />
            <label for='floatingInput'>Mobile</label>
          </div>
          <div className='form-floating  mb-3 w-100'>
            <textarea
              class='form-control'
              aria-label='With textarea'
            ></textarea>
            <label for='floatingInput'>Message</label>
          </div>
          <button className='btn btn-primary w-50 py-2' type='submit'>
            Contact us
          </button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
