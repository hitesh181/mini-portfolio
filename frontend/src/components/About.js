import React from "react"
import "./about.css"
import {useNavigate} from "react-router-dom"
export default function About(){

    const navigate = useNavigate();
    const callAboutPage = async()=>{
            
        console.log("INside about paeg ")
        try{
           const res =  await fetch('/about', {
            method: "GET",
            headers: {
                Accept:"application/json",
                'Content-Type': 'application/json'
            },
            credentials: "include"
        })
            const data = await res.json()
            console.log("Data recveiced from backedn is ", data)

            if (!res.ok) {
                // Handle error based on the response status code
                console.log('ERROR THROWN');
                throw new Error(`Request failed with status: ${res.status}`);
              }
            
              console.log('Data received from backend is', data);
            } catch (err) {
              console.log('Rerouting to');
              console.log('ERROR IS', err);
              navigate('/');
            }
    }
    callAboutPage();

    // //now time to make call to the backend to receive data from there to authenticate
    // React.useEffect = () =>{
    // }
   
   return (
        <>
       
                <div className ="flex-container">
                <div className ="col1">

                    <img src={require("../images/me.webp")} alt="Image"/>
                    <p>Youtube</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Linkedin</p>
                </div>
                
                <div className ="col2">
                    <div className="col2-row1">
                        <div className ="details">
                            <h4>John Doe</h4>
                            <p>Web Develeoper</p>
                            <p>Rankings 1/10</p>
                        </div>
                    <button className="edit-btn">Edit Profile</button>
                    </div>

                    <div className="col2-row2">
                        <h3>ABout</h3>
                    </div>
                    <div className ="col2-row3">
                        
                        <div className ="subcol1">
                            <p>User Id</p>
                            <p>Name</p>
                            <p>Email</p>
                            <p>Phone</p>
                            <p>Profession</p>
                        </div>
                        
                        <div className ="subcol2">
                        <p>value</p>
                        <p>value</p>
                        <p>value</p>
                        <p>value</p>
                        </div>
                    </div>           
                </div>
                    
                </div>

        </>
   )
}
