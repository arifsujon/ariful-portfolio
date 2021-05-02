import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import Footer from '../Shared/Footer/Footer';
import emailjs from 'emailjs-com';

const Contact = () => {
    // const { register, handleSubmit } = useForm();
    // const sendEmail = e => {
        
    
    //     emailjs.sendForm('gmail', 'template_olndscm', e.target, 'user_gDUzSHWobtjdhgqn6H7up')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //           console.log(error.text);
    //     });
    //     e.target.reset();
    // }
    
    // function sendEmail(e) {
    //     e.preventDefault();
    // console.log(e.target);
    //     emailjs.sendForm('service_hujb0zb', 'template_olndscm', e.target, 'user_gDUzSHWobtjdhgqn6H7up')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //       e.target.reset();
    // }

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_hujb0zb', 'template_olndscm', e.target, 'user_gDUzSHWobtjdhgqn6H7up')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
    
          e.target.reset()
      }

    return (
        <div className="contact">
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <div className="contact-heading">
                            <h5>Contact</h5>  
                            <h2>Get In Touch</h2>
                        </div>
                        <div className="">
                            {/* <form onSubmit={handleSubmit(sendEmail)} action="mailto:arifsujon.bd@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">
                                <input className="w-50" placeholder="Name" {...register("name")} />
                                <input className="w-50" placeholder="Email" {...register("email")} />
                                <input className="w-100" placeholder="How can i help you?" {...register("message")} />
                                <input type="submit" />
                            </form> */}

                            <form className="contact-form" onSubmit={sendEmail}>
                            {/* <input type="hidden" name="contact_number" /> */}
                            <label>Name</label>
                            <input type="text" name="name" />
                            <label>Email</label>
                            <input type="email" name="email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="contact-info">
                            <h5>Ariful</h5>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contact-info">
                            <h5>Phone No</h5>
                            <p>(+880) 1918 709148</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contact-info">
                            <h5>Email</h5>
                            <p>arifsujon.bd@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contact-info">
                            <h5>Address</h5>
                            <p>123, Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;