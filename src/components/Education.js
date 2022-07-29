import React, { Component } from 'react';
import uniqid from 'uniqid';
import EduItem from './EduItem';

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

  editEdu = (id, fieldId, e) => {
    const newEdu = this.state.educations.map((edu) => {
      if (edu.id === id) {
        switch (fieldId) {
          case 'inst-edit-field':
            edu.name = e.target.value;
            break;
          case 'city-edit-field':
            edu.city = e.target.value;
            break;
          case 'major-edit-field':
            edu.major = e.target.value;
            break;
          case 'from-edit-field':
            edu.from = e.target.value;
            break;
          case 'to-edit-field':
            edu.to = e.target.value;
            break;
          default:
        }
      }
      return edu;
    });
    this.setState({ educations: newEdu }, () =>
      this.setEducation(this.state.educations)
    );
  };

  deleteEdu = (id) => {
    const newEdu = this.state.educations.filter((x) => x.id !== id);
    this.setState({ educations: newEdu }, () =>
      this.setEducation(this.state.educations)
    );
  };

  render() {
    return (
      <div>
        <h2 className="section-title">Education</h2>
        <EduItem
          edu={this.state.educations}
          formatDate={this.props.formatDate}
          delete={this.deleteEdu}
          edit={this.editEdu}
        />
        <form
          className="education-info"
          onSubmit={(e) => {
            this.handleClick(e);
          }}
        >
          <input
            type="text"
            id="inst-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.education.name}
            placeholder="Name of Insitution"
            required
          />
          <input
            type="text"
            id="city-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.education.city}
            placeholder="City/Location"
            required
          />
          <input
            type="text"
            id="major-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.education.major}
            placeholder="Major or Degree"
            required
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
          <input type="submit" className="save-button" value="Save" />
        </form>
      </div>
    );
  }
}

export default Education;
