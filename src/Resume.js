import React from 'react'
import { Link } from 'react-router-dom'
import './styles/styles.css'
import leetcode from './assets/leetcode.png'
import codechef from './assets/codechef.jpeg'

function Resume() {
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
            {/* <!-- Page Content--> */}
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        {/* <!-- Experience Section--> */}
                        <section>
                            {/* <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                       
                                <a className="btn btn-primary px-4 py-3" href="#!">
                                    <div className="d-inline-block bi bi-download me-2"></div>
                                    Download Resume
                                </a>
                            </div> */}
                            {/* <!-- Experience Card 1--> */}
                            {/* <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">2019 - Present</div>
                                                <div className="small fw-bolder">Web Developer</div>
                                                <div className="small text-muted">Stark Industries</div>
                                                <div className="small text-muted">Los Angeles, CA</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- Experience Card 2--> */}
                            {/* <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">2017 - 2019</div>
                                                <div className="small fw-bolder">SEM Specialist</div>
                                                <div className="small text-muted">Wayne Enterprises</div>
                                                <div className="small text-muted">Gotham City, NY</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                    </div>
                                </div>
                            </div> */}
                        </section>
                        {/* <!-- Education Section--> */}
                        <section>
                            <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                            {/* <!-- Education Card 1--> */}
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">2018 - 2020</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">Narayana Junior College</div>
                                                    <div className="small text-muted">Ghatkesar, Hyderabad</div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-8 pt-4"><div><p>Holder of an intermediate degree with a solid academic background in maths,physics and chemistry. Having successfully completed this stage of my education, I am now enthusiastic about applying my acquired knowledge and skills in my future plans.</p></div></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Education Card 2--> */}
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">2021 - 2025</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">VNR VIIET</div>
                                                    <div className="small text-muted">Bachupally, Hyderabad</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-muted">Undergraduate</div>
                                                    <div className="small text-muted">Computer Science(AIML)</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 pt-4 "><div><p className='text-left'>Holder of a B.Tech in Computer Science and Engineering, with expertise in algorithms, programming languages, and systems design. Demonstrated practical skills in artificial intelligence, database management, and software engineering. Enthusiastic about contributing to innovative projects and staying updated on the latest advancements in computer science</p></div></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>

<h2 className="text-secondary fw-bolder mb-4">LINKS</h2>
<div className="card shadow border-0 rounded-4 mb-5 d-flex align-items-center">
        <div className="card-body p-5 ">


        


        <div className="d-flex align-items-center mb-4 ">
                        <Link className="feature bg-gradient-primary-to-secondary text-white  rounded-3 m-4 " to="https://github.com/tejarao9121"><i className="bi bi-github "></i></Link>
                        <Link className="feature bg-gradient-primary-to-secondary text-white  rounded-3 m-4 " to="https://www.linkedin.com/in/sai-teja-pippera-65a064264"><i className="bi bi-linkedin"></i></Link>
                        <Link  className="feature bg-gradient-primary-to-secondary text-white  rounded-3 m-4" to="https://www.leetcode.com/tejarao_99/" >  <img className="is m-3 rounded-3" src={leetcode} alt="leetcode"  /></Link>
                        <Link  className="feature bg-gradient-primary-to-secondary text-white  rounded-3 m-4" to="https://www.codechef.com/users/tejarao_99" >  <img className="is m-3 rounded-3" src={codechef} alt="codechef" ></img></Link>
                       
                       
                </div>

             
                
                
               



            </div>
        </div>


</section>


                        {/* <!-- Divider--> */}
                        <div className="pb-2"></div>
                        {/* <!-- Skills Section--> */}
                        <section>
                            {/* <!-- Skillset Card--> */}
                            <h2 className="text-secondary fw-bolder mb-4">SKILLS</h2>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    {/* <!-- Professional skills list--> */}
                                    <div className="mb-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Programming Skills</span></h3>
                                        </div>
                                        <div className="">
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Problem Solving</div></div>
                            
                                        </div>
                                        <div className="">
                                        <div className="col"><div className="text-start bg-light rounded-4 p-3 h-100 w-100">Data Structure and Algorithm</div></div>
                                        </div>
                                        <div className="">
                                        <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                                        </div>

                                    </div>
                                    {/* <!-- Languages list--> */}
                                    <div className="mb-0">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">C</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">C++</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Java</div></div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Perl</div></div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-database"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Database</span></h3>
                                        </div>
                                        <div className="">
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">SQL</div></div>
                            
                                        </div>
                                        <div className="">
                                        <div className="col"><div className="text-start bg-light rounded-4 p-3 h-100 w-100">MongoDB</div></div>
                                        </div>
                                        

                                    </div>


                                    {/*web tech */}
                                    <div className="mb-0 mt-4">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Web Technologies</span></h3>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React-Bootstrap</div></div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">ReactJs</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">ExpressJs</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">NodeJs</div></div>
                                        </div>
                                    </div>


                                   








                                </div>
                            </div>
                        </section>
                        <div className="pb-2"></div>
                        {/* <!-- coding ratings Section--> */}
                        <section>

                        <h2 className="text-secondary fw-bolder mb-4">CODING RATINGS</h2>
                        <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">


                                <div className="">


                                <div className="d-flex align-items-center mb-4">
                                            <div className="feature  rounded-3 me-3"><i className="bi bi-arrow-right-short"></i></div>
                                            <p className=" mb-0"><span className=" d-inline"><b>Leetcode :</b> 1713</span></p>
                                        </div>

                                        <div className="d-flex align-items-center mb-2">
                                            <div className="feature  rounded-3 me-3"><i className="bi bi-arrow-right-short"></i></div>
                                            <p className=" mb-0"><span className=" d-inline"><b>Codechef :</b> 1629</span></p>
                                        </div>
                                        
                                    
                                       

                                    </div>


                                    </div>
                                </div>


                        </section>


                        <div className="pb-2"></div>
                        {/* <!-- certi Section--> */}
                        <section>

                        <h2 className="text-secondary fw-bolder mb-4">CERTIFICATIONS</h2>
                        <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">


                                <div className="">
                                        
                            
                                            <div className="col"><div className=" align-items-center bg-light rounded-4 p-3 h-100">
                                                <p>
                                                <b>MERN STACK | Master Coding</b>
                                                </p>
                                                <p>Oct 2022-Feb 2023 |Hyderabad</p>
                                
                                                </div>
                        
                            
                                        </div>

                                    </div>


                                    </div>
                                </div>


                        </section>

                        <div className="pb-2"></div>


                                                {/* <!-- interest Section--> */}
                                                <section>

<h2 className="text-secondary fw-bolder mb-4">INTERESTS</h2>
<div className="card shadow border-0 rounded-4 mb-5">
        <div className="card-body p-5">


        <div className="">


        <div className="d-flex align-items-center mb-4">
                    <div className="feature  rounded-3 me-3"><i className="bi bi-arrow-right-short"></i></div>
                    <p className=" mb-0"><span className=" d-inline"><b>VOLLEY BALL</b> </span></p>
                </div>

                <div className="d-flex align-items-center mb-4">
                    <div className="feature  rounded-3 me-3"><i className="bi bi-arrow-right-short"></i></div>
                    <p className=" mb-0"><span className=" d-inline"><b>CHESS</b></span></p>
                </div>

                <div className="d-flex align-items-center mb-2">
                    <div className="feature  rounded-3 me-3"><i className="bi bi-arrow-right-short"></i></div>
                    <p className=" mb-0"><span className=" d-inline"><b>CRICKET</b></span></p>
                </div>
                

               

            </div>


            </div>
        </div>


                                           </section>



                    
                    </div>
                </div>
            </div>
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

export default Resume
