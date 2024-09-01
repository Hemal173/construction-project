import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



function Showdata()
{
    let[data,setData]=useState([]);
    useEffect(()=>{
        getData()
    },[data]);

    const getData = () =>{
        fetch("http://127.0.0.1/Api/showpro.php").then((response) => response.json()).then((result) => {
            setData(result)
        })
    }

    const DeleteRecord = (id) =>{
        fetch("https://hemupatelapp.000webhostapp.com/project/deletepro.php?id="+id).then((response) => response.json()).then((result) => {
            setData(result)
        })
    }

    return(
        <div>
           
            <table class="table" border="4">
                <thead className="id">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>CITY</th>
                        <th>ADDRESS</th>
                        <th colSpan={2}>Manage data</th>
                    </tr>
                </thead>
            <tbody>
                {
                    data.map((val)=>{
                        return<tr >
                            <td >{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.city}</td>
                            <td>{val.address}</td>
                            
                            <Link to={`/Edit/${val.id}`}>
                            <button>EDIT DATA</button>
                            </Link>
                            
                            <td><button onClick={() => {DeleteRecord(val.id)}}>DELETE RECORD</button></td>
                            
                        </tr>
                        
                    }) 
                    
                }
            </tbody>
            </table>
            <div>
            <Link to='/Contact' >
                <button className="pt">Create New Data</button>
            </Link>
            </div>

        </div>
    )
}
export default Showdata;