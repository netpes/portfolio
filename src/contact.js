import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AppleIcon from '@mui/icons-material/Apple';
const ContactMe = () => {
    const aStyle = "p-4 m-4 mt-8";

    return (
        <section id={"#contact"} className="flex flex-col justify-center items-center h-[100vh]">
            <header className="text-6xl font-nunito font-avenir font-helvetica font-sans text-black text-opacity-70">
            <h1 >Contact Me</h1>
            <hr/>
            </header>
            <footer>
                <div className="flex justify-center items-center">
                <a className={aStyle} href={"https://github.com/netpes"}> <GitHubIcon fontSize="large"/></a>
                <a className={aStyle} href={"https://www.linkedin.com/in/netanel-arbiv/"}> <LinkedInIcon fontSize="large"/></a>
                <a className={aStyle} href={"mailto:netpescode@gmail.com"}> <EmailIcon fontSize="large"/></a>
                <a className={aStyle} href={"mailto:narbiv@icloud.com"}> <AppleIcon fontSize="large"/></a>
                </div>
            </footer>
        </section>
    );
};

export default ContactMe;
