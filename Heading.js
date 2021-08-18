import React from "react"
import HeadContents from "./HeadContents.js"

class Heading extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <div id="heading">
                <img src={"photos/"+HeadContents.image} alt={HeadContents.imgText} />
                <h1>{HeadContents.heading}</h1>
            </div> 
        );
    }
}

export default Heading