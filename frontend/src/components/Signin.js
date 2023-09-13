import React from "react"
import {NavLink, useNavigate} from "react-router-dom"
 
export default function Singin(){

    const navigate = useNavigate();


    const [userData, setUserData] = React.useState({
        email:"",
        password:""
    });

    function onChange(e){
        //console.log(e)
        setUserData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))


        //console.log(userData)
    }


    const PostData =async (e)=>{
        e.preventDefault();

        const {email,password} = userData

        try {
        const res = await fetch("http://localhost:5000/signin",{
            method: "POST",
            headers: {
                'Content-Type': "application/json" // Indicates that the request body contains JSON data
            },
            body: JSON.stringify({email,password})
        })

        const data = res.json();
     

        if(res.status === 422 || !data){
            window.alert("Wrong credentials")
            
        }
        else{
            window.alert("welcome user , navigating to dashboard");
            navigate('/about')
        }
        }
        catch(err){
            console.log(err)
        }

        

        //console.log(e.target);

    }

return ( 
        <div >
             <section className="vh-100"  style={{backgroundColor: "#eee"}}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                    
                    <div className="col-lg-12 col-xl-10">
                        <div className="card text-black" style= {{borderRadius: "25px", boxShadow: "0 4px 6px rgba(5, 5, 5, 0.4)"}}>
                        <div className="card-body p-md-5 ">
                        
                            <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                className="img-fluid" alt="Signup"/>
                            

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                                <form method="POST" className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" className="form-control"  name="email" value = {userData.email}  onChange={(e)=>onChange(e)} autoComplete="off"/>
                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa fa-key fa-lg me-3 fa-fw" aria-hidden="true"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4c" className="form-control" onChange={(e)=>onChange(e)}value = {userData.password} name="password" autoComplete="off" />
                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                    </div>
                                </div>
                              

                                <div className="d-flex justify-content-around mx-4 mb-3 mb-lg-4">
                                    <input type="submit" onClick={PostData} name='signin' id = "signin" value = "Log in" className="btn btn-primary btn-lg"/>
                                    <NavLink className = "btn btn-primary btn-lg" to = '/signup'>Not Registered</NavLink>
                                </div>

                               

                                </form>
                            </div>
                           
                               
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    )
}