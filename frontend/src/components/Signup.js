import React from "react"
import {NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

export default function Singup(){
    const navigate = useNavigate();

    const [userData, setUserData ]= React.useState({
        name:"",
        email:"",
        phone:"",
        work:"", 
        password:"",
        cpassword:""
    });

    function changeData(e){

        setUserData(prev => ({...prev, [e.target.name]: e.target.value}))
        //console.log(userData);
    }

    //main function that handles connections of backend and frontend
    /*Here everythin is same as we did over at Postman yahan se simply hum fetch kar rahe h /register wala route
    aur fir fetch karke data bhejdege backend pe
    jese postman mein headers, body wagera tha yahan bhi same chize h koi bhi diference nahi h

    */
    const PostData = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)
    
        /*Basically hum data post/send kar rahe h backend wale port ke route pe USING CORS joki zarori h 
        jese postman mein body aur header daalte they same 2 same yahan kar rahe h 
        badle mein hum route wale backedn function mein res mein status aur msg wagera likhte they yaad h?
        haan bas wohi neeche res and data mein kar rahe h
         */
        const { name, email, phone, work, password, cpassword } = userData;
    

        /*
        There are two methods to fetch we can write the complete path like we have done below aur just the last part ie/register
        Using the latter application will first try to look for /register route but it does not exists on our localhost:3000 so we get 404 error
        we can simply put up proxy for localhost:5000 path in package.json file. This will enable to look for proxy routes if some route is not found in the current
        URL
        */
        const res = await fetch('http://localhost:5000/register', {
            method: "POST", // HTTP method used for the request
            headers: {
                'Content-Type': "application/json" // Indicates that the request body contains JSON data
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword // Data to be sent in the request body
            })
        });
        
        const data = await res.json(); // Parse the response body as JSON
    
        if (res.status === 422 || !data) {
            window.alert("Registration Failed");
            console.log(data);
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
            navigate('/signin'); // Assuming navigate is a function that handles navigation to another page
        }
    }
    

return ( 
        <div>
            <section className="vh-100" style={{backgroundColor: "#eee"}}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style= {{borderRadius: "25px"}}>
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                {/*Be careful DO NOT PUT ACTION IN FORM FIR WOH php SERVER KO CHALE JAATA H BUT YES DO PUT METHOD*/ }
                                <form method = "POST" className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                                    
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example1c" className="form-control" autoComplete="off" value={userData.name} name="name" onChange={(e)=>changeData(e)}/>
                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" className="form-control" value={userData.email} name="email" onChange={(e)=>changeData(e)} autoComplete="off"/>
                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3f" className="form-control" value={userData.phone} name="phone" onChange={(e)=>changeData(e)} autoComplete="off"/>
                                    <label className="form-label" htmlFor="form3Example3f">Your Phone</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa fa-key fa-lg me-3 fa-fw" aria-hidden="true"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4c" className="form-control" value={userData.password} name="password" onChange={(e)=>changeData(e)} autoComplete="off" />
                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4cd" className="form-control" value={userData.cpassword} name="cpassword" onChange={(e)=>changeData(e)}autoComplete="off" />
                                    <label className="form-label" htmlFor="form3Example4cd">Confirm your password</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa fa-briefcase fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4ce" className="form-control" value={userData.word} name="work" onChange={(e)=>changeData(e)} autoComplete="off" />
                                    <label className="form-label" htmlFor="form3Example4cd">Work</label>
                                    </div>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-5">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3d" />
                                    <label className="form-check-label" for="form2Example3">
                                    I agree all statements in <a href="#!">Terms of service</a>
                                    </label>
                                </div>

                                <div className="d-flex justify-content-around mx-4 mb-3 mb-lg-4">
                                    <input type="submit" name='signup' id = "signup" value = "Register" className="btn btn-primary btn-lg"
                                    onClick = {PostData}
                                    />


                                    <NavLink className = "btn btn-primary btn-lg" to = '/signin'>Already Registered</NavLink>
                                </div>

                               

                                </form>
                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                className="img-fluid" alt="Signup"/>
                            
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