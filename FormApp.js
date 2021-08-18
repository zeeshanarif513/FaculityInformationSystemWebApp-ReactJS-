import React from "react"
import "./INSERT NEW FACULTY FORM.css"
      

  class FormApp extends React.Component{
            constructor(props){
                super(props);
            }

            render()
            {
                return (
                   <div> 
                        <PersonalInformation />
                        <Research />
                        <Teachings />
                        <Publications />
                    </div>
                )
            }

        }



        class PersonalInformation extends React.Component{
            constructor(props){
                super(props);
            }
            render()
            {
                return (
                    
         <div>
                <div className="row">
                    <div className="col1">
                        <label>First Name</label>
                    </div>
                    <div className="col2">
                        <input type="text" name="fname" placeholder="Enter Name here..." />
                    </div>
              </div>
            <div className="row">
                <div className="col1">
                    <label >Last Name</label>
                </div>
                <div className="col2">
                    <input type="text" name="lastname" placeholder="Entet last name here..." />
                </div>
            </div>
            <div className="row">
                <div className="col1">
                   <label >Designation</label>
                </div>
                <div className="col2">
                    <select name="designation">
                        <option value="Lecturer">Lecturer</option>
                        <option value="Assistant Professor">Assistant Professor</option>
                        <option value="Head of department(HOD)">Head of Department</option>
                    </select>
                </div>
            </div>
             <div className="row">
                <div className="col1">
                    <label>Contact Number</label>
                </div>
                    <div className="col2">
                        <input type="tel" name="contact" placeholder="+92-XX-XXXX-XXXX" />
                    </div>
                </div>
                <div className="row">
                    <div className="col1">
                        <label>E-mail</label>
                    </div>
                    <div className="col2">
                        <input type="email" name="email" placeholder="someone@gmail.com" />
                    </div>
                </div>
        </div>
                    
                );
            }


        }

class Research extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
        {
            return(
                <div>
                        <h1 className="underline">Research</h1>
                        <div className="row">
                    <div className="col1">
                    <label>Enter Area of Research</label>
                </div>
                <div className="col2">
                    <textarea type="text" name="reseach" placeholder="Write from here..."></textarea>
                </div>
            </div>

                </div>
            )
        }
    
}


class Teachings extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
        {
            return(
                <div>

                        <h1 className="underline">Teaching</h1>
                        <div className="row">
                            <div className="col1">
                                <label >Teaching courses to MPhil/PhD</label>
                            </div>
                            <div className="col2">
                                <textarea type="text" name="teaching mphil/phd" placeholder="Enter Courses one by one here..."></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label >Teaching courses to M.Sc/BS</label>
                            </div>
                            <div className="col2">
                                <textarea type="text" name="teaching msc/bs" placeholder="Enter Courses one by one here..."></textarea>
                            </div>
            </div>

                </div>
            )
        }
    
}

class Publications extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
        {
            return(
                <div>
                        <h1 className="underline">Publications</h1>
                        <div className="row">
                            <div className="col1">
                                <label>Teacher Publications</label>
                            </div>
                            <div className="col2">
                                <textarea type="text" name="publications" placeholder="Enter Publications here..."></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" name="submit" placeholder="Submit" />
                        </div>
        

                </div>
            )
        }
    
}


export default FormApp