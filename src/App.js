import React, { Component} from 'react';
import Education from './components/Education';
import GeneralInfo from './components/General';

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
      experience:[],

    };
    this.setGeneral = this.setGeneral.bind(this);
  }

    setGeneral = (generalInfo) => {
      this.setState({general: generalInfo})
    }

    setEducation = (educationInfo) => {
      this.setState({education: this.state.education.concat(educationInfo)});
    }
  


  render() {
    return (
      <div id="container">
        <form onSubmit={this.editGeneral}>
          <GeneralInfo setGeneral={this.setGeneral} />
          <Education setEducation={this.setEducation}/>
        </form>
      
      </div>
    );
  }
}


export default App;
