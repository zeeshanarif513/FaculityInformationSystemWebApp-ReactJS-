import React from "react"
import Nav from "./Nav.js"
import {Link} from "react-router-dom"

class Navbar extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id="nav">
                        <nav>
                            <button id="menu">Menu</button>
                            <div id="contents">
                                <Link to="/">{Nav.homeTitle}</Link><span> |</span>
                                <a href={Nav.acadLink}>{Nav.acadTitle}</a><span> |</span>
                                <a href={Nav.researchLink}>{Nav.researchTitle}</a><span> |</span>
                                <a href={Nav.projectLink}>{Nav.projectTitle}</a><span> |</span>
                                <a href={Nav.admissionLink}>{Nav.admissionTitle}</a><span> |</span>
                                <a href={Nav.facLink}>{Nav.facTitle}</a>
                            </div>    
                        </nav>
                    </div>
                );
            }
        }
		
	export default Navbar;