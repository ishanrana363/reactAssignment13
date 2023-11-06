import Service1 from "./ServiceComponent/Service1.jsx";
import Service2 from "./ServiceComponent/Service2.jsx";
import Service3 from "./ServiceComponent/Service3.jsx";
import Service4 from "./ServiceComponent/Service4.jsx";
import Footer from "../HomeComponent/Footer.jsx";

const ServiceComponent = () => {
    return (
        <div>
            <Service1/>
            <Service2/>
            <Service3/>
            <Service4/>
            <Footer/>
        </div>
    );
};

export default ServiceComponent;