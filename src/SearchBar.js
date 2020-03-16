import React from "react"

class SearchBar extends React.Component{
    render(){
        return(
    
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span>Search</button>
                                </span>
                            </div>
                       </div>
                    </div>
                </div>
        )
    }
}

export default SearchBar