import React from "react";
import footContent from "./footContent.js"

class Programs extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id={footContent.programsDivID}>
                        <h3>{footContent.programsTitle}</h3>
                        <ul>
                            <li><a href={footContent.phdLink}>{footContent.phdTitle}</a></li>
                            <li><a href={footContent.msLink}>{footContent.msTitle}</a></li>
                            <li><a href={footContent.mphilLink}>{footContent.mphilTitle}</a></li>
                            <li><a href={footContent.mscLink}>{footContent.mscTitle}</a></li>
                            <li><a href={footContent.bsLink}>{footContent.bstitle}</a></li>
                        </ul>
                    </div>
                );
            }
        }
		
export default Programs;