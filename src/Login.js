import React from "react"
import Navbar from "./Navbar"
import LoginForm from "./LoginForm"
import Footer from "./Footer"


class Login extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <LoginForm/>
                <Footer/>
            </div>
                
    
      )
    }
  }
  
  export default Login;