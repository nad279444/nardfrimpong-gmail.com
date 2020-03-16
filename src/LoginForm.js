import React from "react"

class LoginForm extends React.Component{
    render(){
        return(
            <div>
                 <h3 className="text-center heading">Already a Member? Login to add Startup.</h3>
                <br />
                <br />
                <form className="form-horizontal forma">

                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Email Address</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Email Address"/>
			            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-8">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Password" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /> Remember me
			                       </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default btn-primary">Sign up</button>
                            </div>
                        </div>
	          </form>
               </div>
        )
    }
}

export default LoginForm