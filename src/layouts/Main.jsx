import React from 'react';
import Navbar from '../conponents/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../conponents/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className='pt-28 pb-20'>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;