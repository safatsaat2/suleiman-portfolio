import { FaFacebook, FaInstagram, FaLinkedinIn,  FaPinterest,  FaGofore, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    
    return (
        <div className="bg-slate-800">
            <footer className="footer p-10 bg-slate-800 text-neutral-content">
                <div>
                    <Link to='/'><a className="btn btn-ghost normal-case text-xl"><span className='text-[#7163A2]'>S</span><span>U</span><span>L</span><span>Y</span><span>M</span><span>A</span><span>N</span> </a></Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="flex flex-col lg:flex-row  gap-4">
                        <a className="hover:text-[#7163A2] text-xl" href="https://www.linkedin.com/in/mdsulyman"><FaLinkedinIn></FaLinkedinIn></a>
                        <a className="hover:text-[#7163A2] text-xl" href="https://www.facebook.com/md.sulyman.bd"><FaFacebook></FaFacebook></a>
                        <a className="hover:text-[#7163A2] text-xl" href="https://www.instagram.com/mdsulymanbd/"><FaInstagram></FaInstagram></a>
                        <a className="hover:text-[#7163A2] text-xl" href="https://www.pinterest.co.uk/MD_SULYMAN/"><FaPinterest></FaPinterest></a>
                        <div className="flex items-center"><a className="hover:text-[#7163A2] text-[14px] flex items-center" href="https://wa.me/message/34OO4MRL7FQTL1"><FaPhoneAlt/>
                        <p className="px-2 text-[14px]">+880 1329-648992</p></a></div>
                        <div className="flex items-center"><FaGofore></FaGofore>
                        <p className="px-2">sulymanahmedbd@gmail.com</p></div>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;