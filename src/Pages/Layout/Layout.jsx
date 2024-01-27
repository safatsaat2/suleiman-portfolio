
import { Outlet } from 'react-router-dom';
import Navbar from './../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
const Layout = () => {
    return (
        <div className='text-slate-300 bg-slate-900'>
            <link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;