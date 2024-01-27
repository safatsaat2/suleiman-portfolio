import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Key from "../Key Streanth/Key";
import MyService from "../MyService/MyService";
import MyWork from "../MyWork/MyWork";
import Response from "../Response/Response";
import Video from "../../Video/Video";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div >
            <div className="bg-slate-900">
                <div className='max-w-7xl mx-auto  '>
                    <Banner></Banner>
                    <Key></Key>
                    <About></About>
                    <Education></Education>
                    <MyService></MyService>
                    <MyWork></MyWork>
                    <Video/>
                    <Review/>
                    <Response/>
                    
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