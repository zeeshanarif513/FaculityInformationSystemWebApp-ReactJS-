import React from "react"
import "./myStyle.css"





    class ViewFaculty extends React.Component
    {
        constructor(props)
        {
            super(props);
            this.state = {selected: null}
           this.showLinkDet = this.showLinkDet.bind(this);
        }

      showLinkDet(link)
      {
        this.setState({selected: link})
      }
        render()
        {
             var ff = null;
            {this.props.fac.map( f=> 
                    {
                        if(ff == null && f.Name === this.props.nam)
                        {
                          ff = f;
                         
                        }
                            
                    }
            )}


            var com;
            switch(this.state.selected){
                case '#invisible1':
               
                com =  <OptionDetail f ={ff.ResearchInterests} id={"#invisible1"} c ={"Research"}/>
                break;

                case '#invisible2':
                com = <OptionDetail f ={ff.Teachings} id={"#invisible2"} c ={"Teaching"}/>
                break;

                case '#invisible3':
                com = <OptionDetail f ={ff.Publications} id={"#invisible3"} c ={"Publications"}/>
                break;

                case '#invisible4':
                com = <OptionDetail f ={ff.Conference} id={"#invisible4"} c ={"Conference"}/>
                break;

                case '#invisible5':
                com = <OptionDetail f ={ff.Workshop} id={"#invisible5"} c ={"Workshop"}/>
                break;

                case '#invisible6':
                com = <OptionDetail f ={ff.Thesis} id={"#invisible6"} c ={"Thesis"}/>
                break;

                case '#invisible7':
                com = <OptionDetail f ={ff.Projects} id={"#invisible7"} c ={"Projects"}/>
                break;

                case '#invisible8':
                com = <OptionDetail f ={ff.Activities} id={"#invisible8"} c ={"Activities"}/>
                break;

                case 'back':
                com = "";
                break;
            }
           
            return (
                <div id="wrapper">
                <div className="inside">
                <a href="#" class="btn" ><i class="fa fa-home"></i></a>      
                <Intro f={ff} />
                <Options sendLink = {this.showLinkDet} />
               {com}
                </div>
                </div>
            )
        }
    }

     class Intro extends React.Component
     {
         constructor(props)
         {
             super(props);
         }

        
         render()
         {
             return(
        <div  className="intro">
    
             <div className="personalInfo">
                 <img src={this.props.f.imgSrc} alt={this.props.f.Name} />
                    <div className="insidePersonalInfo">
                    <h1>{this.props.f.Name}</h1>    
                    <h3>{this.props.f.Designation}</h3>
                    <hr className="line" />
                    <a href={this.props.f.Phone}>{this.props.f.Phone}</a>
                    <a href={this.props.f.Email}>{this.props.f.Email}</a>
                    </div>
             </div> 
    

        </div>
             )
         }

     }


     class Options extends React.Component
     {
         constructor(props)
         {
             super(props);
           
         }

        


         render()
         {
             return(
                <div className="options">
                <ul>
                        <li><Link link="#invisible1" label={'Research'} sl = {this.props.sendLink}/></li>
                        
                        <li><Link link="#invisible2" label={'Teaching'} sl = {this.props.sendLink}/></li>
                        
                        <li><Link link="#invisible3" label={'Publications'} sl = {this.props.sendLink}/></li>
                        
                        <li><Link link="#invisible4" label={'Conference'} sl = {this.props.sendLink}/></li>
                        
                        <li><Link link="#invisible5" label={'Workshop'} sl = {this.props.sendLink}/></li>
                        
                        <li><Link link="#invisible6" label={'MPhil/MS Thesis'} sl = {this.props.sendLink}/></li>
                        
                        <li><Link link="#invisible7" label={'BS/MSc Projects'} sl = {this.props.sendLink}/></li>
                        
                        <li><Link link="#invisible8" label={'Professional Activities'} sl = {this.props.sendLink}/></li>
                        <li><Link link="back" label={"back"} sl = {this.props.sendLink} /> </li>
                    
                </ul>
                 
            </div>
             )
         }
     }

     class Link extends React.Component{
                constructor(props)
                {
                    super(props);
                    this.click_handler = this.click_handler.bind(this);
                }
                
                click_handler(e)
                {
                    this.props.sl(this.props.link)
                }

                render()
                {
                    return(

                        <div>
                                <a href={this.props.link} onClick={this.click_handler}><h4>{this.props.label}</h4></a>
                             
                        
                        </div>
                    )
                }
            }



    class OptionDetail extends React.Component
    {
        constructor(props)
        {
            super(props);
        }       

        render()
        {
            var comp = null;
            
                    switch(this.props.c)
                    {
                        case "Teaching":
                        comp = this.props.f.map(d =>
                       <li>{d.degree}<ul>
                        {d.courses.map( c =><li>{c} </li>)}</ul></li>)
                        break;
                        default:
                        comp = this.props.f.map(ff => <li>{ff}</li>)
                    }
         
            return(
                <div className="sect">
                <section id={this.props.id} className={this.props.c}>
                <h3>{this.props.c} </h3>
                    <ul>
                        {comp}
                        
                     </ul>
            
        </section>
                </div>
            )
        }
    }


export default ViewFaculty;
