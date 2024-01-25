import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Education = () => {
    const [skills, setSkills] = useState(true)

    const onSkills = () => {
        setSkills(true)
    }
    const onEducation = () => {
        setSkills(false)
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex gap-x-5">
                <button onClick={onSkills} className="btn bg-[#7163A2] border-none font-bold uppercase text-white hover:text-slate-600 focus:bg-white focus:text-slate-600 ">Skills</button>
                <button onClick={onEducation} className="btn bg-[#7163A2] border-none font-bold uppercase text-white hover:text-slate-600 focus:bg-white focus:text-slate-600 ">Education</button>
            </div>
            {
                skills ?
                    <div className="my-5">
                        <h2 className="text-center my-3 text-[#b5a7e7] border-b-2 border-[#7163A2] pb-2">Skills</h2>
                        <ul className="ml-5 grid lg:grid-cols-3 gap-x-5">
                            <li className="flex items-center text-2xl my-4"><FaCheck className="mr-2 pr-1" /> Organized </li>
                            <li className="flex items-center text-2xl my-4"><FaCheck className="mr-2 pr-1" /> Flexible</li>
                            <li className="flex items-center text-2xl my-4"><FaCheck className="mr-2 pr-1" /> Creative</li>
                            <li className="flex items-center text-2xl my-4"><FaCheck className="mr-2 pr-1" /> Dedicated</li>
                            <li className="flex items-center text-2xl my-4"><FaCheck className="mr-2 pr-1" /> Detail-oriented</li>
                        </ul>
                    </div>
                    :
                    <div className="my-5">
                        <div className="mx-5">
                            <h2 className="text-center my-3 text-[#b5a7e7] border-b-2 border-[#7163A2] pb-2">Education</h2>
                            <h1 className="font-medium my-2 text-[#b5a7e7]">2021</h1>
                            <h3>Digital Marketing Certificate (D.M.C) - The Open University | United Kingdom</h3>
                            <h1 className="font-medium my-2 text-[#b5a7e7]">2024</h1>
                            <h3>YouTube Music Certificate (Y.M.C) - YouTube Music | United State</h3>
                            <h1 className="font-medium my-2 text-[#b5a7e7]">2022</h1>
                            <h3>Higher Secondary Certificate (H.S.C) - Humanities at Universal College | Sylhet, Bangladesh</h3>
                            <h1 className="font-medium my-2 text-[#b5a7e7]">2020</h1>
                            <h3>Senior Dakhil Certificate (S.D.C) - General at Shahporan Jamiya Islamia Madrasha | Sylhet, Bangladesh</h3>
                        </div>
                    </div>

            }
        </div>
    );
};

export default Education;