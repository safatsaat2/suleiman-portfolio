import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <div id="about" className="hero py-20 lg:py-32 bg-slate-900">
            <div className="hero-content flex-col lg:flex-row">
                <Slide duration={1000} direction="left">
                    <img src="https://i.ibb.co/dKVwLby/replicate-prediction-hjpwparb5757d6vunx3foztvkq.jpg" className="max-w-lg w-full rounded-lg shadow-2xl" />
                </Slide>
                <div className='lg:w-1/2 lg:ml-10'>
                    <Fade duration={3000}>
                        <h1 className="text-3xl lg:text-7xl font-bold text-[#b5a7e7]">About</h1>
                        <p className="py-6 font-medium">As a business consultant, my role is to provide expert guidance and support to help businesses thrive in today's competitive landscape. With a diverse skill set and industry knowledge, I assist organizations in identifying and addressing their specific challenges and opportunities. I work closely with clients to develop and refine strategic plans that align with their goals, conducting thorough market research to ensure informed decision-making.
<br  />
<br  />
One of my key responsibilities is to optimize business processes, enhancing efficiency and cost-effectiveness. Financial analysis is another area where I provide valuable insights, helping clients manage their finances, make informed investment decisions, and achieve financial stability. Additionally, I guide organizations through change management, helping them implement new strategies and technologies. Whether it's marketing and branding, risk management, or human resources, my expertise is tailored to meet the unique needs of each business, ultimately contributing to their long-term success.</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;