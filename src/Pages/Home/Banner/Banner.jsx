import { useState } from "react";

const Banner = () => {

    const [value, setValue] = useState(0);

    const array = ['Graphic Designer','Marketing Specialist', 'Graphic Designer', 'Marketing Specialist',];

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
            <div className="hero-content flex-col gap-10 lg:flex-row">
                <img src="https://i.ibb.co/XDBbSCX/1699725219780-1.jpg" className="max-w-sm w-full rounded-full border-[10px] border-[#162929]" />
                <div className='lg:w-1/2'>
                    <p className="text-[#b5a7e7] mb-4 text-lg">{array[value]}</p>
                    <h1 className="text-2xl lg:text-4xl font-bold">Hi, I am <span className="text-[#b5a7e7]">MD SULYMAN</span> From Bangladesh <br />  </h1>
                    <p className="py-6 font-medium"><span className='text-[#b5a7e7]'>Empowering brands </span>through innovative strategies and tailored solutions, we propel your business to new heights in the digital landscape.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;