import React from 'react';
import Project1 from "./ProjectComponent/Project1.jsx";
import Project2 from "./ProjectComponent/Project2.jsx";
import Project3 from "./ProjectComponent/Project3.jsx";
import Footer from "../HomeComponent/Footer.jsx";

const ProjectComponent = () => {
    return (
        <div>
            <Project1/>
            <Project2/>
            <Project3/>
            <Footer/>
        </div>
    );
};

export default ProjectComponent;