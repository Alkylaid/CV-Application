import React, {Component} from "react";
class Items extends Component {
    render() { 
        return (
            <div>
              {this.props.edu.map((edu)=> {
                return(
                    <div className="item" key={edu.id}>
                        <h3>{edu.major}</h3>
                        <p>{this.props.formatDate(edu.from)} to {this.props.formatDate(edu.to)} </p>
                        <p>{edu.name} - {edu.city}</p>
                        <div><span className="fa-regular fa-pen-to-square"></span><span className="fa-regular fa-trash-can" onClick={() => this.props.delete(edu.id)}></span></div>
                    </div>
                )
              })}</div>)
                
            }
           
          
           
        
           
    }
    
 
export default Items;