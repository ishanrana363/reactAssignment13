import {useState} from "react";
import {valueData} from "./ValuationData.js";
import "../HomeComponentCSS/Valuation.css"
const Valution = () => {
    const [data,setData] =useState(valueData)

    return (
        <div>
            <div className= "container" >
                <div className= "valuation" >
                    <h1>Valuation Methods</h1>
                    <p>Yesterday was the right time to have an independent business valuation for <br/>
                        your company by an independent business valuer.
                    </p>
                </div>
                <div className= "data-set" >
                    {
                        data.map((item,i)=>{
                            const {id,title,body}= item
                            return (
                                <article className= "valuedatalist" key={i} >
                                    <h3 className= "valuationTitle" >
                                        { title}
                                    </h3>
                                    <p className= "valuationBody" >
                                        {body}
                                    </p>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Valution;