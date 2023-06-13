
const Navbar = () => {
    const navItems = <>
        <li  className="mx-4 hover:bg-white hover:font-medium rounded-md"><a>Home</a></li>
        <li  className="mx-4 hover:bg-white hover:font-medium rounded-md"><a>About</a></li>
        <li  className="mx-4 hover:bg-white hover:font-medium rounded-md"><a>Services</a></li>
        <li  className="mx-4 hover:bg-white hover:font-medium rounded-md"><a>Contact Me</a></li>
    </>
    return (
        <div className="navbar bg-slate-900 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><span className='text-[#7163A2]'>S</span><span>U</span><span>L</span><span>Y</span><span>M</span><span>A</span><span>N</span> </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 hover:text-white">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;