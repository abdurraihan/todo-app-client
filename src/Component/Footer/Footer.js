import React from 'react';
import './Footer.css'
const Footer = () => {
    
    const today = new Date();
         const year = today.getFullYear();
    return (


        <footer className='futter' >

            <p> copy writing @{year} </p>
            
        </footer>
        
    );
};

export default Footer;