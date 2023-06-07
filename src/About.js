import React  from 'react';
import gifImage from "./down.gif";

const About = () => {

    return (



        <section id={"about"} className="flex flex-col justify-center items-center h-[100vh] font-nunito font-avenir font-helvetica font-sans text-black text-opacity-70">
                <header>
                <h1 className="text-5xl font-bold"> About Me</h1>
                <hr/>
                </header>
            <content className={"mt-10 text-1.5xl w-[50vw]"}>
                <p className={"text-xl leading-[2.5rem] text-center"}> Hi, I'm Netanel Arbiv, a 21-year-old fullstack developer.
                    I have a strong passion for Python, but I also enjoy working with the MERN stack.
                    Constantly seeking new knowledge, I am always learning and exploring new topics.
                    During my free time, I immerse myself in studying and developing projects related to AI and ML. </p>
            </content>

        </section>

);
};

export default About;
