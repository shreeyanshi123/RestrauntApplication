import React from 'react'
import './Contact.css'
import CustomNavbar from './CustomNavbar'
import lightImage from './Images/light.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleMapsComponent from './GoogleMapsComponent';
import Footer from './Footer';


const Contact = () => {
    return (
        <>
            <CustomNavbar />
            <div
                className="background"
                style={{
                    backgroundImage: `url(${lightImage})`,
                    marginTop: '5px',
                    height: '40vh',
                    width: '100%',
                    backgroundSize: 'cover'
                }}
            ></div>

            <div className="contact-area">
                <div className="area">
                    <div
                        className="image"
                    ></div>
                    <div className="form">
                        <h2>Get In Touch</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                            iusto cumque doloribus nulla! Asperiores sapiente quam officia
                            distinctio rem. Amet eius non eos mollitia soluta voluptates atque
                            eaque deleniti nemo.
                        </p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">

                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">

                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">

                                <Form.Control placeholder='Comment' as="textarea" rows={6} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check className='mb-3'
                                    id={`default-checkbox}`}
                                    label={`Save my name,email in this browser`}
                                />
                                <Button variant="success">Send</Button></Form.Group>

                        </Form>
                    </div>
                </div>
            </div>
            
            <a
                href="https://www.google.com/maps/place/Indian+Institute+of+Information+Technology,+Allahabad/@25.4294481,81.7701526,17z/data=!3m1!4b1!4m6!3m5!1s0x399acda4892cc187:0xb07e2e87ab51e82a!8m2!3d25.4294481!4d81.7701526!16zL20vMDYyeXQ0?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GoogleMapsComponent />
            </a>
  {/* Add Footer Here */}
  <div className="footer-container">
                <Footer />
            </div>

        </>
    )
}

export default Contact;
