import React from "react";
import footContent from "./footContent.js"

class UsefulLinks extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id={footContent.linksDivID}>
                        <h3>{footContent.linksTitle}</h3>
                            <ul>
                                <li><a href={footContent.qauLink} target="_next">{footContent.qauTitle}</a></li>
                                <li><a href={footContent.admissionLink}>{footContent.admissionTitle}</a></li>
                                <li><a href={footContent.contactLink}>{footContent.contactTitle}</a></li>
                            </ul>
                    </div>
                );
            }
        }
		
export default UsefulLinks;