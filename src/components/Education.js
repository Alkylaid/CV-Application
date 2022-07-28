import { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        name: '',
        city: '',
        major: '',
        from: '',
        to: '',
      },
      educations: [],
    };
    this.setEducation = props.setEducation;
  }

  handleChange = (e) => {
    const education = { ...this.state.education };
    switch (e.target.id) {
      case 'inst-field':
        education.name = e.target.value;
        this.setState({ education: education });
        break;
      case 'city-field':
        education.city = e.target.value;
        this.setState({ education: education });
        break;
      case 'major-field':
        education.major = e.target.value;
        this.setState({ education: education });
        break;
      case 'from-field':
        education.from = e.target.value;
        this.setState({ education: education });
        break;
      case 'to-field':
        education.to = e.target.value;
        this.setState({ education: education });
        break;
      default:
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {name: '', city: '', major: '', from: '', to: '' },
    });
    this.setEducation(this.state.educations)
 
  };

  render() {
    return (
      <div className="education-info">
        <h2>Education</h2>
        <input
          type="text"
          id="inst-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.education.name}
          placeholder="Name of Insitution"
        />
        <input
          type="text"
          id="city-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.education.city}
          placeholder="City/Location"
        />
        <input
          type="text"
          id="major-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.education.major}
          placeholder="Major or Degree"
        />
        <input
          type="date"
          id="from-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.education.from}
          placeholder="From"
        />
        <input
          type="date"
          id="to-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.education.to}
          placeholder="To"
        />
        <button className="save-button" onClick={(e)=>{this.handleClick(e)}}>Save</button>

      </div>
    );
  }
}

export default Education;
