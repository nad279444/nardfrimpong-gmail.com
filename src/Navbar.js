import React from "react"
import Airy from "./airy.jpg"
import { Link } from "react-router-dom"

 const Navbar =() =>{
    return(
        <div>
            <nav className="navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="/Homepage"><img src={Airy} alt="logo" className="img-responsive"/></a>
				    </div>

				      <ul className="nav navbar-nav navbar-right link">
				       <li><Link to="/"> Home </Link></li>
				       <li>< Link to="/login">Login </Link></li>
				       <li><Link to="/startup"> Startup </Link></li>
				       <li><Link to="/register"> Register </Link></li>
				      </ul>
				     
				    </div>
				  
		 </nav><br/>
        </div>
    )
}

export default Navbar