import React, { Component } from 'react';
import {format, parseISO} from 'date-fns';
class Resume extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.capitalize = this.capitalize.bind(this);
  }

  capitalize = (string) => {
    let newString = string.toLowerCase();
    return (newString = newString.charAt(0).toUpperCase() + newString.slice(1));
  };

  formatDate = (date) => {
    const newDate = parseISO(date, 'yyyy/MM/dd', new Date());
    return format(newDate, 'LLLL yyyy')
  }

  render() {
    return (
      <div id="resume">
        <div className="resume-heading">
          <div className="resume-heading person">
            <h1>
              {this.capitalize(this.props.general.firstName)}{' '}
              {this.capitalize(this.props.general.lastName)}
            </h1>
            <p>{this.props.general.title}</p>
          </div>
          <div className="resume-heading contact">
            <div><span className="fa-solid fa-house"/>{this.props.general.address}</div>
           <div><span className="fa-solid fa-phone"/>{this.props.general.phone}</div> 
           <div><span className="fa-solid fa-envelope"/>{this.props.general.email}</div> 
          </div>
        </div>
        <div className="resume-desc">
          <p>{this.props.general.description}</p>
        </div>
        <div className="resume-edu">
          <h2>Education</h2>
          {this.props.education.map((edu) => {
            return (
              <div key={edu.id} className="resume-edu-item">
                <h3 className="resume-edu-item-major">{edu.major}</h3>
                <p className="resume-edu-item-date">
                  {this.formatDate(edu.from)} to {this.formatDate(edu.to)}
                </p>
                <p className="resume-edu-item-loc"> {edu.name} - {edu.city}</p>
               
              </div>
            );
          })}
        </div>
        <div className="resume-exp">
          <h2>Experience</h2>
          {this.props.experience.map((exp) => {
            return (
              
              <div key={exp.id} className="resume-exp-item">
                {console.log(exp.responsibility)}
                <h3 className="resume-exp-item-comp">{exp.company}</h3>
                <p className="resume-exp-item-date">{this.formatDate(exp.from)} to {this.formatDate(exp.to)}</p>
                <p className="resume-exp-item-pos">{exp.position}</p>
                <p className="resume-exp-item-resp">{exp.responsibility}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Resume;

