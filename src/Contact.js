import React from 'react'
import { Link } from 'react-router-dom'
import './styles/styles.css'


function Contact() {
  return (
    <div>

      <main className="flex-shrink-0">
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link  className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Resume">Resume</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Projects">Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Page content--> */}
            <section className="py-5">
                <div className="container px-5">
                    {/* <!-- Contact form--> */}
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Get in touch</h1>
                        
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                
                                {/* <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label htmlFor="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                  
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                   
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label htmlFor="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                   
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                  
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                 
                                    <div className="d-grid"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                                </form> */}


<div className="card shadow border-0 rounded-4 mb-5">
        <div className="card-body p-5">
    <h2 className="card-title p-3 fw-bolder text-gradient">CONTACT</h2>
    <div className='abc m-3'>
    <h5 className="card-text p-3 fw-bolder ">Name  : PIPPERA SAI TEJA</h5>
    <h5 className="card-text p-3 fw-bolder">Email :  <a className="" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to={{tejarao9121@gmail.com}}&su=Subject&body=Body%20Text">tejarao9121@gmail.com</a></h5>
    <h5 className="card-text p-3 fw-bolder">Phone No  : 9121974618</h5>
    </div>
    
  </div>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        {/* <!-- Footer--> */}
        {/* <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
                    <div className="col-auto">
                        <a className="small" href="#!">Privacy</a>
                        <span className="mx-1">&middot;</span>
                        <a className="small" href="#!">Terms</a>
                        <span className="mx-1">&middot;</span>
                        <a className="small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer> */}
    </div>
  )
}

export default Contact;
