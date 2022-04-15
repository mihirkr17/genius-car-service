import React from 'react';

const Footer = () => {
   const today = new Date();
   const year = today.getFullYear();
   return (
      <footer className='py-5 text-center'>
         <p><small>copyright &copy; {year} </small></p>
      </footer>
   );
};

export default Footer;