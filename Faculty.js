import React from "react"
import facultyContent from "./facultyContent.js"

class Faculty extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                        <div className="f"  id={this.props.fac.ID}>
                            <img src={"photos/"+this.props.fac.Image} alt="img"/>
                            <ul>
                                <li>{this.props.fac.Name}</li>
                                <li>{this.props.fac.Designation}</li>
                                <li>{this.props.fac.Email}</li>
                                <li>{this.props.fac.Phone}</li>
                            </ul>  
                        </div>    
                );
            }
        }

export default Faculty;