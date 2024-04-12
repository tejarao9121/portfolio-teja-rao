import React from 'react'
import { Link } from 'react-router-dom'
import './styles/styles.css'
import home from './assets/home.png'
import user from './assets/user.jpg'
import inter from './assets/inter.png'
function Projects() {
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
            {/* <!-- Projects Section--> */}
            <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {/* <!-- Project Card 1--> */}
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-centre">
                                        <div className="p-5 ">
                                            <h2 className="fw-bolder  text-gradient">CRUD</h2>

                                            <p className=" mb-0"><span className=" d-inline"><b>Code  :</b> <Link  className="" to="https://github.com/tejarao9121/CREDapp"> link</Link></span></p>



                                            <p className='abc pt-2'>CRUD is a robust web application developed using the MERN stack that empowers
                                                    you to perform Create, Read, Update, and Delete operations with ease. This
                                                    application provides a efficient solution for managing and manipulating data, making
                                                    it an ideal choice for various projects and industries</p>
                                                    <p className='abc'><b>Features</b> : Create Account,Login Authentication,View added users data,
                                                    Add users data to cart, Remove from cart and Update user data</p>
                                                    <p className='abc'><b>FrontEnd</b>: Html, CSS, Bootstrap, React-Bootstrap,React-Redux</p>
                                                    <p className='abc'><b>BackEnd </b>: ExpressJS, NodeJS, MongoDB</p>
                                        </div>
                                        <img className="profile-img pqr" src={user} alt="user" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Project Card 2--> */}
                            <div className="card overflow-hidden shadow rounded-4 border-0">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-centre">
                                        <div className="p-5  ">
                                            <h2 className="fw-bolder text-gradient">HOME NEST</h2>

                                            <p className=" mb-0"><span className=" d-inline"><b>Code :</b> <Link  className="" to="https://github.com/tejarao9121/HOMENEST"> link</Link></span></p>
                                            <p className='abc pt-2'>
                                            HomeNest is a cutting-edge web application built using the MERN stack ,designed to
                                                revolutionize the way people find their dream homes orlucrative plots for sale. With
                                                its user-friendly interface and powerful features, HomeNest makes the process of
                                                renting a home or buying a plot seamless, efficient, and enjoyable</p>
                                                <p className='abc'><b>Features</b>: Create Account,Login Authentication,View available plots for
                                                sale and houses forrent by searching location.The user can add the plots and houses
                                                forrents and can also remove it afterit sale</p>
                                                <p className='abc'><b>FrontEnd</b>: Html, CSS, Bootstrap, React-Bootstrap,React-Redux, EmailJS</p>
                                                <p className='abc'><b>BackEnd</b>: ExpressJS, NodeJS, MongoDB</p>

                                            
                                        </div>
                                        <img className="profile-img pqr" src={home} alt="home" />
                                    </div>
                                </div>
                            </div>
                        {/* <!-- Project Card 3--> */}
                        <div className="card overflow-hidden shadow rounded-4 border-0 mt-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-centre">
                                        <div className="p-5  ">
                                            <h2 className="fw-bolder text-gradient">INTERVIEW CONNECT</h2>

                                            <p className=" mb-0"><span className=" d-inline"><b>Code :</b> <Link  className="" to="https://github.com/tejarao9121/InterviewConnect"> link</Link></span></p>
                                            <p className='abc pt-2'>
                                            Interview Connect is web platform designed to revolutionize the way individuals prepare for professional interviews. It serves as a dynamic hub where aspiring professionals can seamlessly connect with industry experts to engage in mock interview sessions.Interview Connect empowers users to enhance their interview skills, gain valuable feedback, and ultimately boost their confidence and success in securing employment opportunities.</p>
                                                <p className='abc'><b>Features</b>: Create Account,Login Authentication,View available experts profile by serching the company name.Request the Expert.</p>
                                                <p className='abc'><b>FrontEnd</b>: Html, CSS, Bootstrap, React-Bootstrap,React-Redux,EmailJS</p>
                                                <p className='abc'><b>BackEnd</b>: ExpressJS, NodeJS, MongoDB</p>

                                            
                                        </div>
                                        <img className="profile-img pqr" src={inter} alt="inter" />
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Call to action section--> */}
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/Contact">Contact me</Link>
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

export default Projects
