import React, { Component } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import GeneralInfo from './components/General';
import Resume from './components/Resume';
import {parseISO, format} from 'date-fns';

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
    this.formatDate = this.formatDate.bind(this);
  }

  setGeneral = (generalInfo) => {
    this.setState({ general: generalInfo });
  };

  setEducation = (educationInfo) => {
    this.setState({ education: educationInfo});
  };

  setExperience = (expInfo) => {
    this.setState({ experience: expInfo });
  };

  formatDate = (date) => {
    const newDate = parseISO(date, 'yyyy/MM/dd', new Date());
    return format(newDate, 'LLLL yyyy')
  }


  render() {
    return (
      <div id="container">
        <div id="left">
          
            <GeneralInfo setGeneral={this.setGeneral} />
            <Education setEducation={this.setEducation} formatDate={this.formatDate}/>
            <Experience setExperience={this.setExperience} formatDate={this.formatDate} />
        </div>
        <div id="right">
          <Resume {...this.state} formatDate={this.formatDate}/>
        </div>
      </div>
    );
  }
}

export default App;
