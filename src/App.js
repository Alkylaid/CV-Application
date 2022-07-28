import React, { Component } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import GeneralInfo from './components/General';
import Resume from './components/Resume';

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phone: '',
        email: '',
        description: '',
      },
      education: [],
      experience: []
    };
    this.setGeneral = this.setGeneral.bind(this);
    this.setEducation = this.setEducation.bind(this);
    this.setExperience = this.setExperience.bind(this);
  }

  setGeneral = (generalInfo) => {
    this.setState({ general: generalInfo });
  };

  setEducation = (educationInfo) => {
    this.setState({ education: educationInfo});
    console.log(this.state.education);
  };

  setExperience = (expInfo) => {
    this.setState({ experience: expInfo });
  };



  render() {
    return (
      <div id="container">
        <div id="left">
          
            <GeneralInfo setGeneral={this.setGeneral} />
            <Education setEducation={this.setEducation} />
            <Experience setExperience={this.setExperience} />
        </div>
        <div id="right">
          <Resume {...this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
