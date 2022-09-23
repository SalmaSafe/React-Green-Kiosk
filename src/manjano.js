import React from "react";
import { useEffect, useState } from "react";
// 'https://dummyjson.com/users'
const Daone=()=>{
    const[user,setUser]= useState();
    const[loading,setLoading]= useState(false);
    useEffect(()=>{
        userData()
    },[])
 const userData= ()=>{
    fetch('http://localhost:5000/products')
    .then((res) => res.json())
    .then((data) =>{ setUser(data)
        setLoading(true)
      console.log("fetched data ---->")})
    .catch(e => {throw new Error(e.message)})
 }
 if(! loading){
    console.log("loading",loading)
    return <div>Loading.....</div>
};
return(
    <div style={{display:"flex",padding:"20px" } } >
       {user.map(item =>(
        <div key={item.id}>
            <h4 style={{color: "green"}} >Details of Products</h4>
            <p style={{margin:"30px"}} >Name: {item.name}</p>
            <p style={{margin:"30px"}}>Category: {item.category}</p>
        </div>
        ))}
    </div>
        )
}
export default Daone;