import React from "react";
import MediaControlCard from "./card";
import {Container} from "@mui/material";



const Projects = () => {
    const projects = [
        {
            title: "Intellichat",
            type:"",
            description: "The Bot knows how to look at the history of the chats, looking for the most suitable answer, by looking for the highest match rate. The more users use the chat Platform, the bot get smarter.",
            imageUrl: "https://netpes.net/ADMIN/chatbot.png",
            link:"chat-bot-6ai.pages.dev"

        },
        {
            title: "CoverageCruiser",
            type:"",
            description: "Look up the specific license plate on the websites of popular insurance companies.",
            imageUrl: "https://netpes.net/ADMIN/car.png",
            link:""
        },
        {
            title: "class",
            type:"",
            description: "Class ",
            imageUrl: "https://netpes.net/ADMIN/class.png",
            link:""
        },
    ];

    return (
        <section id={"projects"} className="flex flex-col justify-center items-center h-[100vh] font-nunito font-avenir font-helvetica font-sans text-black text-opacity-70">
            <header>
            <h1 className="text-5xl font-bold"> Projects</h1>
            <hr/>
            </header>
                <div className=" flex mt-10 flex-col justify-center items-center text-1.5xl w-[55vw]">

                    {projects.map((project, index) => (
                        <MediaControlCard key={index} {...project} />
                    ))}

                </div>
        </section>
    );
};

export default Projects;
