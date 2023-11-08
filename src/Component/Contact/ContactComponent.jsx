import React from 'react';
import Contact1 from "./ContactComponent/Contact1.jsx";
import Contact2 from "./ContactComponent/Contact2.jsx";
import Contact3 from "./ContactComponent/Contact3.jsx";
import Footer from "../HomeComponent/Footer.jsx";

const ContactComponent = () => {
    return (
        <div>
            <Contact1/>
            <Contact2/>
            <Contact3/>
            <Contact1/>
            <Footer/>
        </div>
    );
};

export default ContactComponent;