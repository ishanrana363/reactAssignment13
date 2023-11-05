import {NavLink} from "react-router-dom";
import "../css/ReactRoute.css"
const ReactRoute = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink className= "nav-link" to= "/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-link"  to= "/service" >Service</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-link"  to= "/about" >About</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-link"  to= "/project" >Project</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-link"  to= "/blog" >Blog</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-link"  to= "/contact" >Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ReactRoute;