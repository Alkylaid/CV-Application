import React, { Component } from 'react';
import uniqid from 'uniqid';
import ExpItem from './ExpItem';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        company: '',
        position: '',
        responsibility: '',
        from: '',
        to: '',
        id: uniqid(),
      },
      experiences: [],
    };
    this.setExperience = props.setExperience;
  }

  handleChange = (e) => {
    const experience = { ...this.state.experience };
    switch (e.target.id) {
      case 'company-field':
        experience.company = e.target.value;
        this.setState({ experience: experience });
        break;
      case 'position-field':
        experience.position = e.target.value;
        this.setState({ experience: experience });
        break;
      case 'resp-field':
        experience.responsibility = e.target.value;
        this.setState({ experience: experience });
        break;
      case 'exFrom-field':
        experience.from = e.target.value;
        this.setState({ experience: experience });
        break;
      case 'exTo-field':
        experience.to = e.target.value;
        this.setState({ experience: experience });
        break;
      default:
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState(
      {
        experiences: this.state.experiences.concat(this.state.experience),
        experience: {
          company: '',
          position: '',
          responsibility: '',
          from: '',
          to: '',
          id: uniqid(),
        },
      },
      () => this.setExperience(this.state.experiences)
    );
  };

  editExp = (id, fieldId, e) => {
    const newExp = this.state.experiences.map((exp) => {
      if (exp.id === id) {
        switch (fieldId) {
          case 'comp-edit-field':
            exp.company = e.target.value;
            break;
          case 'pos-edit-field':
            exp.position = e.target.value;
            break;
          case 'resp-edit-field':
            exp.responsibility = e.target.value;
            break;
          case 'fromEx-edit-field':
            exp.from = e.target.value;
            break;
          case 'toEx-edit-field':
            exp.to = e.target.value;
            break;
          default:
        }
      }
      return exp;
    });
    this.setState({ experiences: newExp }, () =>
      this.setExperience(this.state.experiences)
    );
  };

  deleteExp = (id) => {
    const newExp = this.state.experiences.filter((x) => x.id !== id);
    this.setState({ experiences: newExp }, () =>
      this.setExperience(this.state.experiences)
    );
  };

  render() {
    return (
      <div>
        <h2 className="section-title">Experience</h2>
        <ExpItem
          exp={this.state.experiences}
          formatDate={this.props.formatDate}
          delete={this.deleteExp}
          edit={this.editExp}
        />
        <form
          className="experience-info"
          onSubmit={(e) => {
            this.handleClick(e);
          }}
        >
          <input
            type="text"
            id="company-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.experience.company}
            placeholder="Company/Institution"
            required
          />
          <input
            type="text"
            id="position-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.experience.position}
            placeholder="Position"
            required
          />
          <textarea
            id="resp-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.experience.responsibility}
            placeholder="Responsibilities"
            required
          />
          <div className="date-fields">
            <input
              type="date"
              id="exFrom-field"
              onChange={(e) => this.handleChange(e)}
              value={this.state.experience.from}
              placeholder="From"
              required
            />
            <input
              type="date"
              id="exTo-field"
              onChange={(e) => this.handleChange(e)}
              value={this.state.experience.to}
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

export default Experience;
