import { Component } from 'react';

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
        },
      },
      () => this.setExperience(this.state.experiences)
    );
  };

  render() {
    return (
      <div className="experience-info">
        <h2>Experience</h2>
        <input
          type="text"
          id="company-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.experience.company}
          placeholder="Company/Institution"
        />
        <input
          type="text"
          id="position-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.experience.position}
          placeholder="Position"
        />
        <input
          type="textfield"
          id="resp-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.experience.responsibility}
          placeholder="Responsibilities"
        />
        <div className="date-fields">
          <input
            type="date"
            id="exFrom-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.experience.from}
            placeholder="From"
          />
          <input
            type="date"
            id="exTo-field"
            onChange={(e) => this.handleChange(e)}
            value={this.state.experience.to}
            placeholder="To"
          />
        </div>
        <button
          className="save-button"
          onClick={(e) => {
            this.handleClick(e);
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Experience;
