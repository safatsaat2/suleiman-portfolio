import { JackInTheBox, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <div id="about" className="hero py-20 lg:py-32 bg-slate-900">
            <div className="hero-content flex-col lg:flex-row">
                <Slide duration={1000} direction="left">
                    <img src="https://i.ibb.co/fYH4vHp/compu.jpg" className="max-w-lg w-full rounded-lg shadow-2xl" />
                </Slide>
                <div className='lg:w-1/2 lg:ml-10'>
                    <JackInTheBox duration={1000} direction="right">
                        <h1 className="text-3xl lg:text-7xl font-bold text-[#b5a7e7]">About Me</h1>
                        <p className="py-6 font-medium">As a dedicated digital marketer, I bring passion and expertise to drive impactful results for businesses in the online realm. With a deep understanding of the digital landscape and strategic marketing principles, I excel in crafting innovative campaigns that resonate with target audiences and deliver measurable outcomes. From optimizing user experiences to leveraging SEO, social media, and PPC advertising, I have successfully executed multi-channel marketing strategies that boost brand visibility and drive conversions. Collaborating with cross-functional teams, I prioritize tasks, meet deadlines, and maintain meticulous attention to detail. Continuously learning and adapting to industry advancements, I thrive on making a meaningful impact in helping businesses grow and thrive in the digital age. With my strategic mindset, creative approach, and results-driven focus, I am a valuable asset in achieving digital marketing objectives.</p>
                    </JackInTheBox>
                </div>
            </div>
        </div>
    );
};

export default About;