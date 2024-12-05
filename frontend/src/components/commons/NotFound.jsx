import { Typography } from '@mui/joy'
import React from 'react';
import Box from '@mui/joy/Box';

function NotFound() {
  return (
    <div className='notfound-ctn'>
      <Box className="notFound">
        <h1>404!</h1>
        <h2>Not found</h2>
        <a href='/'>
        <button class="btn btn-primary">Navigate to Home</button>
        </a>
      </Box>
    </div>
  )
}

export default NotFound
