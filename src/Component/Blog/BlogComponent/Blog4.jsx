import React, {useState} from 'react';
import "../BlogCSS/Blog4.css"
const Blog4 = () => {
    let [count,setCount] = useState(0)
    return (
        <div >
            <div className= "container" >
                <div>
                    <h1>
                        {count}
                    </h1>
                </div>
                <button  className= "Increment" onClick={()=>setCount(count++)} >
                    Increment
                </button>
                <button disabled={count===0 ? true : false } className= "Decrement" onClick={()=>setCount(count--)} >
                    Decrement
                </button>
                <button className= "reset" onClick={()=>setCount(0)} >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Blog4;