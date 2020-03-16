import React from "react"
import Airy from "./airy.jpg"
import { Link } from "react-router-dom"


 const Jumbotron = () => {
    return (
        
            <div className="overlay">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={Airy} className="img-responsive " />
                            </div>
                            <div className="col-md-6"></div>
                            <div className="col-md-3">
                                <ul className="links">
                                    <li><Link to="/">Homepage</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/startup">Startup</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row kl" >
                            <h1 className="display-4 text-center">KAWOLEGAL</h1><br />
                            <p className="text-center"> A collaborative ecosystem for problem<br />
              solvers and support for startups</p>
                            <p className="lead">
                                <Link className="btn btn-danger btn-lg text-center" to="/register" role="button">Register Now</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Jumbotron