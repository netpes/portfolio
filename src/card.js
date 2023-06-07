
import "./projects.css"
import {useState} from "react";
export default function MediaControlCard({title, description, imageUrl, link, setdescription, setImage}) {

    const [showDescription, setShowDescription] = useState(false);

    const handleMouseEnter = () => {
        // setdescription(description);
        // setImage(imageUrl)
    };

    const handleMouseLeave = () => {
            // setdescription(null);
            // setImage(null);
    };

    return (
        <>
            <div
                className="project"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a href={link}>{title}</a>
            </div>

        </>
    );
};
// <div className={"flex bg-[#f7f7f7] w-[80%] mt-4 rounded-md border border-solid border-gray-200 p-[10px] max-h-48"} onClick={()=>Redir(link)}>
//     <img className={"rounded-md w-[30%]"}   src={imageUrl} />
//     <div className={"ml-4 h-[80%]"}>
//                     <span className={"text-left p-[15px] "}>
//                     <h1 className={"text-[#77d5e1]  text-xl"}>{title}</h1>
//                     </span>
//
//         <p className={'text-left'}>{description}</p>
//     </div>
// </div>