import {Items} from "./MainData.js";
import "../HomeComponentCSS/Main.css"

import React, {useState} from 'react';

const Main = () => {
    const [data, setData] = useState(Items)
    return (
        <main>
            <div className= "container" >
                <div className= "main1" >
                    <h2 className= "business" >Business Valuation Services</h2>
                    <p className= "yes" >"Yesterday" was the right time to have an independent business valuation for <br/>
                        your company by an independent business valuer. And tomorrow will be late.</p>
                </div>
                <div>
                    <p className= "need" >
                        The need for a business valuation arises for several reasons:
                        incoming investors, financial strategy, <br/>
                        business planning, business sale, founder exit, public offering, or net
                        worth certification.
                    </p>
                </div>
                <section>
                    {
                        data.map((item,i)=>{
                            const {id,title,body} = item
                            return(
                                <article key={i} >
                                    <h3>
                                        {title}
                                    </h3>
                                    <p>
                                        {
                                            body
                                        }
                                    </p>
                                </article>
                            )
                        })
                    }
                </section>
            </div>
        </main>
    );
};

export default Main;