import { useState } from "react";

const Banner = () => {

    const [value, setValue] = useState(0);

    const array = ['Marketing Specialist', 'Graphic Designer', 'Web Developer',];

    // array.map(arr => setInterval(() => {
    //     setValue(arr)
    // }, 10000))
    setTimeout(() => {
        if (value > 1) {
            setValue(0)
        }
        else {
            setValue(value + 1)
        }
    }, 2000);



    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/fSV0ynH/Frame-1-6.png" className="max-w-sm w-full rounded-lg" />
                <div className='lg:w-1/2'>
                    <p className="text-[#b5a7e7] mb-4 text-lg">{array[value]}</p>
                    <h1 className="text-2xl lg:text-4xl font-bold">Hi, I am <span className="text-[#b5a7e7]">MD SULYMAN</span> From Bangladesh <br />  </h1>
                    <p className="py-6 font-medium"><span className='text-[#b5a7e7]'>Join me</span> on this journey through my portfolio, and witness the transformative impact of digital marketing in action.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;