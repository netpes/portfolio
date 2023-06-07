import React from "react";

const ProjectCard = ({ imageSrc, title, description, liveLink }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden  h-[40vh]">
            <img
                className="h-48 w-full object-cover"
                src={imageSrc}
                alt={title}
            />
            <div className="p-6">
                <div className="text-xl font-semibold mb-2">{title}</div>
                <p className="text-gray-600 mb-4">{description}</p>
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Live Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
