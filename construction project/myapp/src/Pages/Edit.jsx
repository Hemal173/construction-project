import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

function Edit()
{
let refname=useRef();                       
let refemail=useRef();
let refpassword=useRef();
let refcity=useRef();
let refaddress=useRef();


let[Name,setName]=useState();
let[email,setEmail]=useState();
let[password,setPassword]=useState();
let[City,setCity]=useState();
let[Address,setAddress]=useState();


let[data,setData]=useState([]);
let params = useParams();

// const navigate = useNavigate();

useEffect(()=>{
    getData()
},[data]);
  
const getData = () =>{
    fetch("http://127.0.0.1/api/showdatabyidpro.php?id="+params.ids).then((response) => response.json()).then((result) => {
        setData(result)
        data.map((val)=>{
            setName(val.name)
            setEmail(val.email)
            setPassword(val.password)
            setCity(val.city)
            setAddress(val.address)
            
        })
    })
}
function handeleEvent(e)
{
    e.preventDefault();
    const Data={
        id:params.ids,
        name:refname.current.value,
        email:refemail.current.value,
        password:refpassword.current.value,
        city:refcity.current.value,
        address:refaddress.current.value
    }

    axios({
        method: "post",
        url: "http://127.0.0.1/api/editpro.php",
        data: Data,
        headers: { "Content-Type": "multipart/form-data" },
    }).then(res =>{
        console.log(res);
        alert("Record update Sucessfully");
        Navigate(`/Showdata`);

    })
}

return(
       <center> <div>
            <form onSubmit={handeleEvent}>
                <h2 className="ed">HERE YOU CAN EDIT YOUR DATA:-</h2><br></br>

            <label>USERNAME:-</label><br></br>
                <input type="text" ref={refname} defaultValue={Name} placeholder="ENTER YOUR NAME" onChange={(e)=>setName(e.target.value)} style={{width:"50%",textAlign:"center",color:"blue" , padding:"5px"}}></input><br></br><br></br>
                
                <label>EMAIL:-</label><br></br>
                <input type="text"  ref={refemail} defaultValue={email} placeholder="ENTER YOUR EMAIL" onChange={(e)=>setEmail(e.target.value)} style={{width:"50%",textAlign:"center" ,color:"blue", padding:"5px"}}></input><br></br><br></br>

                <label>password:-</label><br></br>
                <input type="text"  ref={refpassword} defaultValue={password} placeholder="ENTER YOUR PASSWORD" onChange={(e)=>setPassword(e.target.value)} style={{width:"50%",textAlign:"center" ,color:"blue",padding:"5px"}}></input><br></br><br></br>

                <label>city:-</label><br></br>
                <input type="text"  ref={refcity} defaultValue={City} placeholder="ENTER YOUR city" onChange={(e)=>setCity(e.target.value)} style={{width:"50%",textAlign:"center" ,color:"blue",padding:"5px"}}></input><br></br><br></br>

                <label>address:-</label><br></br>
                <input type="text"  ref={refaddress} defaultValue={Address} placeholder="ENTER YOUR address" onChange={(e)=>setAddress(e.target.value)} style={{width:"50%",textAlign:"center" ,color:"blue",padding:"5px"}}></input><br></br><br></br>

                <input type="submit" className="BN" /><br></br><br></br>

                <Link to='/Showdata'>
                        <button className="pt" style={{width:"30%",textAlign:"center"}}> Back To Show Your Edit Data</button>
                </Link>
            </form>

        </div></center>
    )
}
export default Edit;