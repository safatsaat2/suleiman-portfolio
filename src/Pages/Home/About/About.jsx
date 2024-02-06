import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <div id="about" className="hero py-20 lg:py-32 bg-slate-900">
            <div className="hero-content flex-col lg:flex-row">
                <Slide duration={1000} direction="left">
                    <img src="https://i.ibb.co/DDK9JjJ/FB-IMG-1706710193863-2-2.jpg" className="max-w-lg w-full rounded-lg shadow-2xl" />
                </Slide>
                <div className='lg:w-1/2 lg:ml-10'>
                    <Fade duration={3000}>
                        <h1 className="text-3xl lg:text-7xl font-bold text-[#b5a7e7]">About</h1>
                        <p className="py-6 font-medium">In my role as a digital marketing enthusiast, I am passionate about leveraging online channels to drive brand visibility and engagement. With a focus on strategies such as SEO, social media, email marketing, and content creation, I strive to create impactful online campaigns.
                        <br />
                        <br />
                        I am adept at harnessing the power of data analytics to target specific demographics and refine marketing approaches for optimal results. Embracing the ever-evolving landscape of digital marketing, I am committed to staying abreast of industry trends and adopting innovative techniques to enhance brand presence. Through my dedication to mastering the intricacies of digital marketing, I aim to contribute to the success and growth of businesses in the digital realm.</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;