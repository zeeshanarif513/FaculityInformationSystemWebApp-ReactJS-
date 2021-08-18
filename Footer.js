import React from "react"
import UsefulLinks from "./UsefulLinks";
import Programs from "./Programs";
import Address from "./Address";

class Footer extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id="footer">
                        <UsefulLinks/>
                        <Programs/>
                        <Address/>
                    </div>
                );
            }
        }
		
export default Footer