import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact.jsx";
import ReactRoute from "./Pages/ReactRoute.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ReactRoute/>
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/servic" element = {<Service/>}/>
                    <Route path="/about" element = {<About/>} />
                    <Route path="/project" element = {<Project/>} />
                    <Route path="/blog" element = {<Blog/>} />
                    <Route path= "/contact" element={<Contact/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;