import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.setGeneral = props.setGeneral;

    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      address: '',
      phone: '',
      email: '',
      description: '',
      disabled: false,
    };
  }

  handleChange = (e) => {
    switch (e.target.id) {
      case 'firstName-field':
        this.setState({ firstName: e.target.value }, () => {
          this.setGeneral(this.state);
        });
        break;
      case 'lastName-field':
        this.setState({ lastName: e.target.value }, () => {
          this.setGeneral(this.state);
        });
        break;
      case 'title-field':
        this.setState({ title: e.target.value }, () => {
          this.setGeneral(this.state);
        });
        break;
      case 'address-field':
        this.setState({ address: e.target.value }, () => {
          this.setGeneral(this.state);
        });
        break;
      case 'phone-field':
        this.setState({ phone: e.target.value }, () => {
          this.setGeneral(this.state);
        });
        break;
      case 'email-field':
        this.setState({ email: e.target.value }, () => {
          this.setGeneral(this.state);
        });
        break;
      case 'description-field':
        this.setState({ description: e.target.value }, () => {
          this.setGeneral(this.state);
        });
        break;
      default:
    }
  };

  handleClick = (e) => {
    if (!this.state.disabled) {
      e.preventDefault();
      this.setState({ disabled: true });
      this.setGeneral(this.state);
    } else {
      this.setState({ disabled: false });
    }
  };

  render() {
    return (
      <div className="general-info">
        <h2>Personal Info</h2>
        <input
          type="text"
          id="firstName-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.firstName}
          disabled={this.state.disabled}
          placeholder="First Name"
        />
        <input
          type="text"
          id="lastName-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.lastName}
          disabled={this.state.disabled}
          placeholder="Last Name"
        />
        <input
          type="text"
          id="title-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.title}
          disabled={this.state.disabled}
          placeholder="Title"
        />
        <input
          type="text"
          id="address-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.address}
          disabled={this.state.disabled}
          placeholder="Address"
        />
        <input
          type="tel"
          id="phone-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.phone}
          disabled={this.state.disabled}
          placeholder="Phone: 999-999-9999"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <input
          type="email"
          id="email-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.email}
          disabled={this.state.disabled}
          placeholder="Email"
        />
        <input
          type="textarea"
          id="description-field"
          onChange={(e) => this.handleChange(e)}
          value={this.state.description}
          disabled={this.state.disabled}
          placeholder="Description"
        />
        {!this.state.disabled && (
          <button
            className="save-button"
            onClick={(e) => {
              this.handleClick(e);
            }}
          >
            Save
          </button>
        )}
        {this.state.disabled && (
          <button
            className="edit-button"
            onClick={(e) => {
              this.handleClick(e);
            }}
          >
            Edit
          </button>
        )}
      </div>
    );
  }
}

export default GeneralInfo;
