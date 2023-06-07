import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
    const projects = [
        {
            title: "Assistor",
            type:"",
            description: "The Bot knows how to look at the history of the chats, looking for the most suitable answer, by looking for the highest match rate. The more users use the chat Platform, the bot get smarter.",
            imageSrc: "https://netpes.net/ADMIN/chatbot.png",
            liveLink:"https://chat-bot-6ai.pages.dev"

        },
        {
            title: "CoverageCruiser",
            type:"",
            description: "Look up the specific license plate on the websites of popular insurance companies.",
            imageSrc: "https://netpes.net/ADMIN/car.png",
            liveLink:"https://carproject.pages.dev"
        },
        {
            title: "CyberProCalendar",
            type:"",
            description: "schedule meeting in different rooms of cyberpro  ",
            imageSrc: "https://netpes.net/ADMIN/class.png",
            liveLink:"https://cybercalendarpro-frontend.pages.dev"
        },
        {
            title: "Tripoly Recipes",
            type:"",
            description: "A web-scrapper scrape a bad designed website so we could enjoy a nice clean design with search option ",
            imageSrc: "https://netpes.net/images/recipes-1.png",
            liveLink:"https://tripolyrecipes.vercel.app/"
        },{
            title: "Math Garden",
            type:"",
            description: "A math game, that detect handwriting using trained AI and convert it to numbers.",
            imageSrc: "https://netpes.net/ADMIN/math.png",
            liveLink:"https://netpes.net/math_garden/"
        },
    ];
    return (
        <div className="py-8 flex flex-col justify-center items-center h-[100vh] font-nunito font-avenir font-helvetica font-sans text-black text-opacity-70">
            <h2 className="text-5xl font-bold">Projects</h2>
            <hr/>
            <div className="grid gap-6 grid-cols-2" >
                {projects.map((project, index) => (
                    <div key={index} className="w-[40vw]">
                        <ProjectCard {...project} />
                    </div>
                ))}
        </div>
        </div>
    );
};

export default ProjectList;
