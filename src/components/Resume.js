import { Component } from 'react';

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
                        <p>{edu.name}</p>
                    </div>
                )
            })}
    
        </div>
      </div>
    );
  }
}

export default Resume;
