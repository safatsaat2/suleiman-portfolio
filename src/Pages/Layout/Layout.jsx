
import { Outlet } from 'react-router-dom';
import Navbar from './../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
const Layout = () => {
    return (
        <div className='text-slate-300'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;