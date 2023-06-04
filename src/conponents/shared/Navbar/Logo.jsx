import React from 'react';
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return <Link className='hidden md:block' to='/'><img src={logo} alt="logo" width={100} height={100} /></Link>
};

export default Logo;