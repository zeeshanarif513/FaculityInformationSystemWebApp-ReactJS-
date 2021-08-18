import React from "react";
import FacQoute from "./FacQoute.js"

class FacultyDescription extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id={FacQoute.divID}><p id={FacQoute.pID}>{FacQoute.contents}</p></div>
                );
            }
        }
		
export default FacultyDescription;