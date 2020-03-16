import React from 'react'
import Nad from "./nad.jpg"
import Benny from "./benny.jpg"
import Wolf from "./wolf.jpg"

 export const StartupPage = () =>{
    return(
            <div>
                <br/>
                <br/>
                <br/>
            <div className="row">
                        <div className="col-md-4 image">
                            <img src={Nad}alt="logo" className="img-responsive"/> 
		 		        </div>
                            <div className="col-md-8">
                                <h3> Think and Zoom</h3><br />
                                <p>Providing Solutions for visually impaired,such as mind controlling zooming,and wearable controlled zooming</p><br />
                                <button className="btn btn-primary" type="submit">See full details</button>
                            </div>
            </div>
                        <div className="row">
                            <div className="col-md-4 image">
                                <img src={Benny}alt="logo" className="img-responsive" />
                            </div>
                            <div className="col-md-8">
                                <h3> Slatecube</h3><br />
                                <p>Providing Solutions for visually impaired,such as mind controlling zooming,and wearable controlled zooming</p><br />
                                <button className="btn btn-danger" type="submit">See full details</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 image">
                                <img src={Wolf} alt="logo" className="img-responsive"/> 
		 		           </div>
                                <div className="col-md-8">
                                    <h3> Sleekjob Academy</h3><br />
                                    <p>Providing Solutions for visually impaired,such as mind controlling zooming,and wearable controlled zooming</p><br />
                                    <button className="btn btn-success" type="submit">See full details</button>
                                </div>
                            </div>
                         <br />
                        <br />
                        </div>


    )
}