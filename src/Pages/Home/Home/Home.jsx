import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Key from "../Key Streanth/Key";
import MyService from "../MyService/MyService";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div >
            <div className="bg-slate-900">
                <div className='max-w-7xl mx-auto  text-slate-400'>
                    <Navbar></Navbar>
                    <Banner></Banner>
                    <Key></Key>
                    <About></About>
                    <Education></Education>
                    <MyService></MyService>
                </div>
            </div>
            <div>
            <div className='max-w-7xl mx-auto '>
                
            </div>
            </div>

        </div>
    );
};

export default Home;