import React from "react"
import Heading from "./Heading"
import MoreLinks from "./MoreLinks"

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id={this.props.id}>
                <Heading/>
                <MoreLinks sendState={this.props.pass}/>
            </div>
        );
    }
}

export default Header