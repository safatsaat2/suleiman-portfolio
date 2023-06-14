import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/S3DkTdS/Frame-1-4.png" className="max-w-sm w-full rounded-lg" />
                <div className='lg:w-1/2'>
                    <p className="text-[#b5a7e7] mb-4 text-lg"><TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Marketing Specialist',
                            2000,
                            'Graphic Designer',
                            2000,
                            'Web Developer',
                            2000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    /></p>
                    <h1 className="text-2xl lg:text-4xl font-bold">Hi, I am <span className="text-[#b5a7e7]">MD SULYMAN</span> From Bangladesh <br />  </h1>
                    <p className="py-6 font-medium"><span className='text-[#b5a7e7]'>Join me</span> on this journey through my portfolio, and witness the transformative impact of digital marketing in action.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;