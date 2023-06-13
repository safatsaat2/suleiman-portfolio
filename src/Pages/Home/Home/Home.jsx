import Banner from "../Banner/Banner";
import Key from "../Key Streanth/Key";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div >
            <div className="bg-slate-900">
                <div className='max-w-7xl mx-auto  text-white'>
                    <Navbar></Navbar>
                    <Banner></Banner>
                    <Key></Key>
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