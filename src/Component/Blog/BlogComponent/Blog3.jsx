import {useState} from "react";
import "../BlogCSS/Blog3css.css"
const Blog3 = () => {
    const [fromObj,setFromObj] = useState({
        fName : "",
        lName : "",
        city : "",
        gender : ""
    })
    const {fName,lName,city,gender} = fromObj;
    const handleInpurt = (property,value) =>{
        setFromObj(prevObj=>({
            ...prevObj,
            [property]:value
        }))
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        if (fName===""||lName===""||city===""||gender===""){
            alert("Please enter the  value")
        }else {
            alert(JSON.stringify(fromObj))
        }
    }
    return (
        <div>
            <div className= "container" >
                <div className= "blog3" >
                    <form action= "" onSubmit={formSubmit } >
                        <input className= "fName" onChange={(e)=>{
                            handleInpurt("fName",e.target.value)}}
                               type = "text" placeholder= "First Name" value={fName} /> <br/>
                        <input className= "lName" onChange={(e)=>{
                            handleInpurt("lName",e.target.value)}}
                               type= "text" placeholder= "Last Name" value={lName} /> <br/>
                        <select className= "select" onChange={(e)=>{handleInpurt("city",e.target.value)}} value={city} >
                            <option value= "" >Chose the city</option>
                            <option value= "Dhaka" >Dhaka</option>
                            <option value= "Dinajpur" >Dinajpur</option>
                            <option value= "Rangpur" >Rangpur</option>
                        </select> <br/>
                        <input onChange={()=>{
                            handleInpurt("gender","Male")}}
                               checked={gender==="Male"} type= "radio" name= "gender"/> Male
                        <input onChange={()=>{
                            handleInpurt("gender","Female")
                        }}
                               checked={gender==="Female"} type= "radio" name= "gender" /> Female <br/>
                        <button className= "sBtn" type= "submit" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Blog3;