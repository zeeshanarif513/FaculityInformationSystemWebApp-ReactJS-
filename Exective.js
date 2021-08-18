import React from "react"
import Faculty from "./Faculty"
import facultyContent from "./facultyContent" 
import {Link} from "react-router-dom"
 
 class Exective extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id="exec">
                        <h2>Executive Manager</h2>
                        <Link to={this.props.hod.Name}><Faculty fac={this.props.hod}/></Link>
					</div>
                );
            }
        }
		
export default Exective;