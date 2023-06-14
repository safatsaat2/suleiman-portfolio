import {  Zoom } from "react-awesome-reveal";
import { FaBrain, FaBriefcase, FaCommentDollar, FaStream } from "react-icons/fa";


const Key = () => {
    return (
        <Zoom >
            <div className='grid lg:grid-cols-4 gap-4 mx-2 my-7'>
            
            <div  className='bg-slate-800 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500'>
                <h3 className='text-lg font-bold text-[#b5a7e7] pt-2 flex items-center justify-center'> <FaStream className="inline  mr-2"/> Strategic Thinking</h3>
                <p className="py-3 px-3">Analytical mindset for visionary planning, problem-solving, and long-term success.</p>
            </div>
            <div className='bg-slate-800 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500'>
                <h3 className='text-lg font-bold text-[#b5a7e7] pt-2 flex items-center justify-center'> <FaBriefcase className="inline  mr-2"/> Multichannel Expertise</h3>
                <p className="py-3 px-3">Proficiency in diverse digital channels for comprehensive brand reach and engagement.</p>
            </div>
            <div className='bg-slate-800 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500'>
                <h3 className='text-lg font-bold text-[#b5a7e7] pt-2 flex items-center justify-center'> <FaBrain className="inline  mr-2"/> Analytical Mindset</h3>
                <p className="py-3 px-3">
                    Data-driven approach for insightful interpretation, decision-making, and continuous improvement.</p>
            </div>
            <div className='bg-slate-800 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500'>
                <h3 className='text-lg font-bold text-[#b5a7e7] pt-2 flex items-center justify-center'> <FaCommentDollar className="inline  mr-2"/> Effective Communication</h3>
                <p className="py-3 px-3">
                    Clear, persuasive expression of ideas to engage and inform audiences.</p>
            </div>
        </div>
        </Zoom>
        
    );
};

export default Key;