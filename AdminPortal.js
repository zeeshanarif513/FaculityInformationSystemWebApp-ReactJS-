import React from "react"
import "./adminportal.css"
import {Link} from "react-router-dom"

        class AdminPortal extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div>
                        <FacDescription description={this.props.q}/>
                        <Exec hod={this.props.faculty[0]}/>
                        <FacList facList={this.props.faculty}/>
                    </div>
                );
            }
        }

        
            const FacQoute={
            divID: "facultyDescription",
            pID: "q",
            contents: "Our faculty members challenge their students, share insights gained through professional experience and communicate the knowledge they've spent a lifetime acquiring.",
            }
        class FacDescription extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id={this.props.description.divID}><p id={this.props.description.pID}>{this.props.description.contents}</p>
	                <button id="inertfacultybutton"><Link to="form">Insert New Faculty</Link></button>        

	</div>
                );
            }
        }




        const faculty = [
            {
                Name: "Dr. Onaiza Maqbool",
                Designation: "Associate Professor, Chairperson",
                Email: "onaiza@qau.edu.pk",
                Phone: "+92-51-9064 2060",
                Image : "DrOnaiza.png",
                ID : "hod"
            },
            {
                Name: "Dr. Khalid Saleem",
                Designation: "Assistant Professor",
                Email: "ksaleem@qau.edu.pk",
                Phone: "+92-51-9064 2061",
                Image : "DrKhalid.png",
                ID : "f2"
            },
            {
                Name: "Dr. Shuaib Karim",
                Designation: "Assistant Professor",
                Email: "skarim@qau.edu.pk",
                Phone: "+92-51-9064 2055",
                Image : "photo.png",
                ID : "f3"
            },
            {
                Name: "Dr. Rabeeh Ayaz Abbasi",
                Designation: "Assistant Professor",
                Email: "rabbasi@qau.edu.pk",
                Phone: "+92-51-9064 2050",
                Image : "DrRabeeh.png",
                ID : "f4"
            },
            {
                Name: "Dr. Ghazanfar Farooq",
                Designation: "Assistant Professor",
                Email: "ghazanfar@qau.edu.pk",
                Phone: "+92-51-9064 2058",
                Image : "DrGhazanfar.png",
                ID : "f5"
            },
            {
                Name: "Dr. Muddassar Azam Sindhu",
                Designation: "Assistant Professor",
                Email: "masindhu@qau.edu.pk",
                Phone: "+92-51-9064 2066",
                Image : "DrSindhu.png",
                ID : "f6"
            },
            {
                Name: "Dr. Akmal Saeed Khattak",
                Designation: "Assistant Professor",
                Email: "akhattak@qau.edu.pk",
                Phone: "+92-51-9064 2161",
                Image : "DrKhattak.png",
                ID : "f7"
            },
            {
                Name: "Dr. Umer Rasheed",
                Designation: "Assistant Professor",
                Email: "umerrashid@qau.edu.pk",
                Phone: "+92-51-9064 2012",
                Image : "DrUmer.png",
                ID : "f8"
            },
            {
                Name: "Memoona Afsheen Malik",
                Designation: "Lecturer",
                Email: "memoona@qau.edu.pk",
                Phone: "+92-51-9064 2064",
                Image : "MamMemoona.png",
                ID : "f9"
            },
            {
                Name: "Ifrah Farrukh Khan",
                Designation: "Lecturer",
                Email: "ifrahkhan@qau.edu.pk",
                Phone: "+92-51-9064 2005",
                Image : "MamIfrah.png",
                ID : "f10"
            },
            {
                Name: "S. M. Naqi",
                Designation: "Lecturer",
                Email: "smnaqi@qau.edu.pk",
                Phone: "+92-51-9064 2013",
                Image : "SirNaqi.png",
                ID : "f11"
            }
        ]

        class Faculty extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                        <div className="f"  id={this.props.fac.ID}>
                            <img src={"photos/"+this.props.fac.Image} alt="img"/>
                            <ul>
                                <li>{this.props.fac.Name}</li>
                                <li>{this.props.fac.Designation}</li>
                                <li>{this.props.fac.Email}</li>
                                <li>{this.props.fac.Phone}</li>
                            </ul>
                            <div id="btns">
                            <button id="edit" title="Edit Faculty Information"><Link to={this.props.fac.Name+"/update"}>Edit</Link></button> 
                                <button id="delete" title="Delete Faculty member"><Link to="/adminportal">Delete</Link></button>   
                            </div>
                        </div>    
                );
            }
        }

        class Exec extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id="exec">
                        <h2>Executive Manager</h2>
	        <Faculty fac={this.props.hod}><Link to={this.props.hod.Name}/></Faculty>
	    </div>
                );
            }
        }

        class FacList extends React.Component{
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div id="faculty">
                        <h2 id="facultyHead">Faculty</h2>
                        <Link to={this.props.facList[1].Name}><Faculty fac={this.props.facList[1]}/></Link>
                        <Link to={this.props.facList[2].Name}><Faculty fac={this.props.facList[2]}/></Link>
                        <Link to={this.props.facList[3].Name}><Faculty fac={this.props.facList[3]}/></Link>
                        <Link to={this.props.facList[4].Name}><Faculty fac={this.props.facList[4]}/></Link>
                        <Link to={this.props.facList[5].Name}><Faculty fac={this.props.facList[5]}/></Link>
                        <Link to={this.props.facList[6].Name}><Faculty fac={this.props.facList[6]}/></Link>
                        <Link to={this.props.facList[7].Name}><Faculty fac={this.props.facList[7]}/></Link>
                        <Link to={this.props.facList[8].Name}><Faculty fac={this.props.facList[8]}/></Link>
                        <Link to={this.props.facList[9].Name}><Faculty fac={this.props.facList[9]}/></Link>
                        <Link to={this.props.facList[10].Name}><Faculty fac={this.props.facList[10]}/></Link>
                    </div>
                );
            }
        }
       
export default AdminPortal;