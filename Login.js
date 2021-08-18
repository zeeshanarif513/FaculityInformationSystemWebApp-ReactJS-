import React from "react"
import {Link} from "react-router-dom";
import "./login.css" 

class Login extends React.Component
        {
        constructor(props)
        {
            super(props);
        }
        render()
        { 
            return(
            <div id="container">       
                    <h1 id="Wel">Faculty Information System</h1>
                    <form id="form">
                        <input type="text" placeholder="Username" className="Input" required/>
                        <input type="password" placeholder="Password" className="Input" required/><br/>
                        <Link to="/adminportal"><input type="submit" id="Login-button" name="login" className="button" value="Login" /></Link>
                    </form>
                    
            </div>
            );
         }
        }

export default Login;
        