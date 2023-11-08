import React, {useRef} from 'react';
import "../BlogCSS/Blog2.css"
const Blog2 = () => {
    const demoRef = useRef(null);
    const change = () =>{
        demoRef.current.src = "https://placehold.co/600x400/000000/FFFFFF/png"
        demoRef.current.setAttribute("height","200px")
        demoRef.current.setAttribute("width","200px")
    }
    return (
        <div className= "blog2" >
            <div className= "container" >
                <div className= "blogImg" >
                    <img src= "https://placehold.co/400" ref={demoRef} />

                </div>
                <div className= "blogbutton" >
                    <button onClick={()=>{change()}} >Click</button>
                </div>
            </div>
        </div>
    );
};

export default Blog2;