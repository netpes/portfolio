import React, {useState} from "react";
import MediaControlCard from "./card";
import {Container} from "@mui/material";



const Projects = () => {
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
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
        <section
            id="projects"
            className="flex flex-col justify-center items-center h-[100vh] font-nunito font-avenir font-helvetica font-sans text-black text-opacity-70"
        >
            <header>
                <h1 className="text-5xl font-bold">Projects</h1>
                <hr />
            </header>
            <div className="flex mt-10 flex-col justify-center items-center text-1.5xl w-[80vw]">
                {projects.map((project, index) => (
                    <MediaControlCard key={index} {...project} setdescription={setDescription} setImage={setImage} />

                ))}


                {/*<div className="description">*/}
                {/*    <img src={image} className={"image"}/>*/}
                {/*    <p className={"descriptionText"}> {description} </p>*/}
                {/*</div>*/}

            </div>
        </section>
    );
};

export default Projects;
