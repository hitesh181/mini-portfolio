import React from "react"

export default function Contact(){

return ( 
        <div>
            <div className="contact mt-5">
                <div className="container-fluid mt-5">
                <div className="col-lg-10 offset-1 d-flex justify-content-between">
                    <div class="card" style={{width:" 20rem"}}>
                        <div class="card-body d-flex justify-content-start align-items-center" >
                            <img src="https://www.w3schools.com/images/img_girl.jpg" alt="Phone"/>

                            <div className="card-content">
                                <h5 class="card-title">Phone</h5>
                                <p class="card-text">123456</p>
                            </div>
                            
                        </div>
                    </div>

                    <div class="card" style={{width:" 20rem"}}>
                        <div class="card-body d-flex justify-content-start align-items-center" >
                            <img src="https://www.w3schools.com/images/img_girl.jpg" alt="Phone"/>

                            <div className="card-content">
                                <h5 class="card-title">Email</h5>
                                <p class="card-text">#gmail</p>
                            </div>
                            
                        </div>
                    </div>

                    <div class="card" style={{width:" 20rem"}}>
                        <div class="card-body d-flex justify-content-start align-items-center" >
                            <img src="https://www.w3schools.com/images/img_girl.jpg" alt="Phone"/>

                            <div className="card-content">
                                <h5 class="card-title">Addres</h5>
                                <p class="card-text">Delhi</p>
                            </div>
                            
                        </div>
                    </div>

                </div>
                </div>
            </div>

            
<div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form id="contact_form">
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mt-2">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group  mt-2">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group mt-2">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group mt-2 d-flex justify-content-center">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mt-2" >
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: "100%", height: "150px"}}></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>



        </div>


    )
}