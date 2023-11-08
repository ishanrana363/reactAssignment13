import React, {useState} from 'react';
import {aboutdata} from "./aboutData.js";
import "../CSS/about1.css"
const About1 = () => {
    const [data,setData] = useState(aboutdata);
    console.log(data)
    return (
        <div className= "about1" >
            <div className= "container" >
                <div className= "websels" >
                    <h1>Get a plug-n-play website that sells</h1>
                    <h3>
                        Having a website it’s not enough to gain sales.
                    </h3>
                    <span>
                    There is a ton of details that you have to consider inside your website to get sales. <br/>
                    Don’t waste money and time on websites that don’t sell.
                </span>
                </div>
                <div className= "webselsData" >
                    <section className= "section" >
                        {
                            data.map((item,i)=>{
                                const {id,title,body} = item
                                return(
                                    <div className= "titleData" key={i} >
                                        <h2 className= "aboutTitle" >
                                            {
                                                title
                                            }
                                        </h2>
                                        <p className= "titleBody" >
                                            {
                                                body
                                            }
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About1;