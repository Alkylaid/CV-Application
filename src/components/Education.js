import React, { Component } from 'react';
import uniqid from 'uniqid';
import Items from './Items';

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
        id: uniqid(),
      },
      educations: [],
    };
    this.props = props;
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
    this.setState(
      {
        educations: this.state.educations.concat(this.state.education),
        education: {
          name: '',
          city: '',
          major: '',
          from: '',
          to: '',
          id: uniqid(),
        },
      },
      () => this.setEducation(this.state.educations)
    );
  };

  deleteEdu = (id) => {
    const newEdu = this.state.educations.filter(x => x.id !== id);
    this.setState({ educations: newEdu }, ()=> this.setEducation(this.state.educations));

  }

  render() {
    return (
      <div>
        <form className="education-info" onSubmit={(e) => {
            this.handleClick(e);
          }}>
        <h2>Education</h2>
        <Items edu={this.state.educations} formatDate={this.props.formatDate} delete={this.deleteEdu}/>
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
        <div className="date-fields">
          <input
            type="date"
            id="from-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.education.from}
            placeholder="From"
            required
          />
          <input
            type="date"
            id="to-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.education.to}
            placeholder="To"
            required
          />
        </div>
        <input type="submit"
          className="save-button"
          value="Save"
        />
        
        </form>
      </div>
    );
  }
}

export default Education;
