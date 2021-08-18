import React from "react"
import Faculty from "./Faculty"
import facultyContent from "./facultyContent" 
import {Link} from "react-router-dom";

class FacultyList extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id="faculty">
                        <h2 id="facultyHead">Faculty</h2>
                        <Link to={facultyContent[1].Name}><Faculty fac={facultyContent[1]}/></Link>
                        <Link to={facultyContent[2].Name}><Faculty fac={facultyContent[2]}/></Link>
                        <Link to={facultyContent[3].Name}><Faculty fac={facultyContent[3]}/></Link>
                        <Link to={facultyContent[4].Name}><Faculty fac={facultyContent[4]}/></Link>
                        <Link to={facultyContent[5].Name}><Faculty fac={facultyContent[5]}/></Link>
                        <Link to={facultyContent[6].Name}><Faculty fac={facultyContent[6]}/></Link>
                        <Link to={facultyContent[7].Name}><Faculty fac={facultyContent[7]}/></Link>
                        <Link to={facultyContent[8].Name}><Faculty fac={facultyContent[8]}/></Link>
                        <Link to={facultyContent[9].Name}><Faculty fac={facultyContent[9]}/></Link>
                        <Link to={facultyContent[10].Name}><Faculty fac={facultyContent[10]}/></Link>
                    </div>
                );
            }
        }
        
export default FacultyList;