import React from 'react'
import {useRoutes} from "hookrouter"
import Top from "./Top";
import Header from "./Header";
import Navbar from "./Navbar";
import FacultyDescription from "./FacultyDescription";
import Exective from "./Exective";
import FacultyList from "./FacultyList";
import Footer from "./Footer";
import facultyContent from "./facultyContent"
import FacQoute from "./FacQoute";
import FormApp from "./FormApp"

import UpdateFaculty from "./UpdateFaculty"
import ViewFaculty from "./ViewFaculty"
import facultyDetail from "./facultyDetail.js"

import Login from "./Login.js"
import './index.css';
/*import FormApp from "./FormApp"*/

import AdminPortal from "./AdminPortal.js"
import {Link,BrowserRouter as Router, Route,Switch} from "react-router-dom";


class App extends React.Component{
            constructor(props){
                super(props);
                this.state={login:false}
                this.recieveState=this.recieveState.bind(this)
            }

            recieveState(flag){
                this.setState({login:flag});
                console.log(this.state.login)
            }

            render(){
                return(
                    <div>
                        <Router>
                            <Top/>
                            <Header id="head" pass={this.recieveState}/>  
                            <Switch>  
                                <Route exact path="/">
                                    <Navbar/>                    
                                    <FacultyDescription/>
                                    <Exective hod={facultyContent[0]}/>
                                    <FacultyList facList={facultyContent}/>
                                </Route>
                                <Route path="/login">
                                    <Login/>
                                </Route>
                                <Route path="/adminportal">
		    <Navbar/> 
                                    <AdminPortal q={FacQoute} faculty={facultyContent}/>
                                </Route>
                                <Route path="/form">
                                    <FormApp/>
                                </Route>
                                <Route path={"/"+facultyContent[0].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[0].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[1].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[1].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[2].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[2].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[3].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[3].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[4].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[4].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[5].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[5].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[6].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[6].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[7].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[7].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[8].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[8].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[9].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[9].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[10].Name+"/update"}>
                                    <UpdateFaculty  nam ={facultyContent[10].Name} fac={facultyDetail}/>
                                </Route>

                                <Route path={"/"+facultyContent[0].Name}>
                                    <ViewFaculty  nam ={facultyContent[0].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[1].Name}>
                                    <ViewFaculty  nam ={facultyContent[1].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[2].Name}>
                                    <ViewFaculty  nam ={facultyContent[2].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[3].Name}>
                                    <ViewFaculty  nam ={facultyContent[3].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[4].Name}>
                                    <ViewFaculty  nam ={facultyContent[4].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[5].Name}>
                                    <ViewFaculty  nam ={facultyContent[5].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[6].Name}>
                                    <ViewFaculty  nam ={facultyContent[6].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[7].Name}>
                                    <ViewFaculty  nam ={facultyContent[7].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[8].Name}>
                                    <ViewFaculty  nam ={facultyContent[8].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[9].Name}>
                                    <ViewFaculty  nam ={facultyContent[9].Name} fac={facultyDetail}/>
                                </Route>
                                <Route path={"/"+facultyContent[10].Name}>
                                    <ViewFaculty  nam ={facultyContent[10].Name} fac={facultyDetail}/>
                                </Route>
                            </Switch>                      
                            <Footer/>
                        </Router>   
                        
                    </div>
                );
            }
        }

export default App;