import React from "react";
import HeadContents from "./HeadContents.js";
import {Link} from "react-router-dom";


class MoreLinks extends React.Component{
    constructor(props){
        super(props);
        this.setRoute=this.setRoute.bind(this);
    }
    setRoute(){
        this.props.sendState(true);
    }
    render(){
        return(
            <div id="moreSidenav" className="sidenav">
        <ul>
            <li><a href={HeadContents.icetLink} target="_next">{HeadContents.icetTitle}</a></li>
            <li><a href={HeadContents.jobsLink} target="_next">{HeadContents.jobsTitle}</a></li>
            <li><a href={HeadContents.alumniLink} target="_next">{HeadContents.alumniTitle}</a></li>
            <li><a href={HeadContents.qauLink} target="_next">{HeadContents.qauTitle}</a></li>
            <li><a href={HeadContents.contactLink}>{HeadContents.contactTitle}</a></li>
            <li><Link to="/login">{HeadContents.loginTitle}</Link></li>
        </ul>
     </div>    
        );
    }
}

export default MoreLinks