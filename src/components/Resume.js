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
            <p>{this.props.general.address}</p>
            <p>{this.props.general.phone}</p>
            <p>{this.props.general.email}</p>
          </div>
        </div>
        <div className="resume-desc">
          <p>{this.props.general.description}</p>
        </div>
        <div className="resume-edu">
          {this.props.education.map((edu) => {
            return (
              <div key={edu.id}>
                <h2>{edu.name}</h2>
                <p>{edu.city}</p>
                <p>{edu.major}</p>
                <p>
                  {this.formatDate(edu.from)} to {this.formatDate(edu.to)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Resume;
