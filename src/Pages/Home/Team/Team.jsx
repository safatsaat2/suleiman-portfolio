import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const Team = () => {
    return (
        <Zoom>
            <div className="py-20 lg:py-12 bg-slate-900">
            <h1 className="text-3xl lg:text-7xl text-[#b5a7e7] text-center font-bold">Team</h1>
            <div className="grid lg:grid-cols-5 justify-center items-center gap-10 mt-16 mx-2">
                <div>
                    <img className='rounded-lg' src="https://i.ibb.co/nctYghB/Photo-1-1.png" alt="" />
                    <p className='lg:text-xl text-[#b5a7e7] text-center mt-2'>Sakibur Rahman Safat</p>
                    <p className='text-[10px] text-[#b5a7e7] text-center'>MERN Stack Developer</p>
                </div>
                <div>
                    <img className='rounded-lg lg:max-h-[222px] w-full' src="https://i.ibb.co/s9k7kqD/Whats-App-Image-2024-02-06-at-00-30-59-87cf9106-1.jpg" alt="" />
                    <p className='lg:text-xl text-[#b5a7e7] text-center mt-2'>Md Kawsar Ahmed</p>
                    <p className='text-[10px] text-[#b5a7e7] text-center'>SEO Specialist</p>
                </div>
                <div>
                    <img className='rounded-lg lg:max-h-[222px] w-full' src="https://i.ibb.co/7QVX6RZ/Whats-App-Image-2024-02-06-at-00-31-47-2ffc2ae2-1.jpg" alt="" />
                    <p className='lg:text-xl text-[#b5a7e7] text-center mt-2'>RT Ibrahim Ahmed</p>
                    <p className='text-[10px] text-[#b5a7e7] text-center'>Digital Marketer</p>
                </div>
                <div>
                    <img className='rounded-lg lg:max-h-[222px] w-full' src="https://i.ibb.co/3CGgkWn/Whats-App-Image-2024-02-06-at-00-32-29-b40ecd82-1.jpg" alt="" />
                    <p className='lg:text-xl text-[#b5a7e7] text-center mt-2'>Abu Sayed Masum</p>
                    <p className='text-[10px] text-[#b5a7e7] text-center'>Graphic Designer</p>
                </div>
                <div>
                    <img className='rounded-lg lg:max-h-[222px] w-full' src="https://i.ibb.co/gDcGnGs/Whats-App-Image-2024-02-06-at-00-33-40-b1629089-1.jpg" alt="" />
                    <p className='lg:text-xl text-[#b5a7e7] text-center mt-2'>Md Maruf Ahmed</p>
                    <p className='text-[10px] text-[#b5a7e7] text-center'>Marketer</p>
                </div>
            </div>
        </div>
        </Zoom>
    );
};

export default Team;