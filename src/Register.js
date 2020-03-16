import React from "react"
import Navbar from "./Navbar"
import RegisterForm from "./RegisterForm"
import Footer from "./Footer"


class Register extends React.Component{
    render(){
        return(
            <div>
				<Navbar/>
				<RegisterForm/>
				<Footer/>
			</div>
               
        )
    }
}

export default Register