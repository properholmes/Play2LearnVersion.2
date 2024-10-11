import TextInput from './TextInput';
import React from 'react';

function Contact() {
   
    return (
        <>
          
            <div className="card" style={{ 'width': '30rem' }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col-lg-12"><b>Contact Us at Play2Learn</b></div>
                        <div className="col-lg-6">
                        
                        </div>
                    </div>
                </div>
                <div className="card-body" >
                    <div className="row">
                        <div className="col-lg-2">&nbsp;</div>
                        <div className="col-lg-8">
                            <form method="POST"  >
                                <div className="mb-3">
                                    <TextInput name="first_name" type="text" placeholder="First Name"/>
                                </div>
                                <div className="mb-3">
                                    <TextInput name="last_name" type="text" placeholder="Last Name"/>
                                </div>
                                <div className="mb-3">
                                    <TextInput name="email" type="email" placeholder="Email Address"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Your Message:</label>
                                    <br/>
                                    <textarea id="message" name='message' className="form-control" rows="4" cols="30">
                    
                                    </textarea>
                                </div>

                                <div className="mb-3">
                                    <input name="contact" type="submit" className="btn btn-primary" value="Send Message" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    )

}

export default Contact