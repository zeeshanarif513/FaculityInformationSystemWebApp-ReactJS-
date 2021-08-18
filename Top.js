import React from "react";
import {Link} from "react-router-dom"


class Top extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div className="topLinks"  id="top">
                        <ul>
                            <li><Link to="login" id="login2">Login</Link></li>
                            <li> 
                                <form action="" className="search-box">
                                Search
                                <input type="text" className="text search-input" placeholder="Type here to search..." />
                                </form>    
                            </li>
                        </ul>
                     </div>
                );
            }
}

export default Top;