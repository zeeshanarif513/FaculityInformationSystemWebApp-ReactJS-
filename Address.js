import React from "react";
import footContent from "./footContent"

class Address extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id={footContent.addressDivID}>
                        <p>{footContent.deptName}</p>
                        <p>{footContent.uniName}</p>
                        <p>{footContent.loc}</p>
                        <p>{"Tel : " + footContent.phone}</p>
                    </div>      
                );
            }
        }
		
export default Address;