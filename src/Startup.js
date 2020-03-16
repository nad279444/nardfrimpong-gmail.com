import React from "react"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"
import { StartupPage } from "./StartupPage"
import Footer from "./Footer"






class Startup extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <SearchBar/>
                <StartupPage/>
                <Footer/>

            </div>
        )
    }
}

export default Startup;