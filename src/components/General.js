import { Component } from 'react';

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
    };
  }

  onChange = (e) => {
    switch (e.target.id) {
      case 'firstName-field':
        this.setState({ firstName: e.target.value });
        break;
      case 'lastName-field':
        this.setState({ lastName: e.target.value });
        break;
      case 'titleName-field':
        this.setState({ title: e.target.value });
        break;
      case 'address-field':
        this.setState({ address: e.target.value });
        break;
      case 'phone-field':
        this.setState({ phone: e.target.value });
        break;
      case 'email-field':
        this.setState({ email: e.target.value });
        break;
      case 'description-field':
        this.setState({ description: e.target.value });
        break;
      default:
    }
    this.setGeneral(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <div className="general-info">
        {console.log(this.props)}
        <h2>Personal Info</h2>
        <input
          type="text"
          id="firstName-field"
          onChange={(e) => this.onChange(e)}
          value={this.state.firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          id="lastName-field"
          onChange={(e) => this.onChange(e)}
          value={this.state.lastName}
          placeholder="Last Name"
        />
        <input
          type="text"
          id="title-field"
          onChange={(e) => this.onChange(e)}
          value={this.state.title}
          placeholder="Title"
        />
        <input
          type="text"
          id="address-field"
          onChange={(e) => this.onChange(e)}
          value={this.state.address}
          placeholder="Address"
        />
        <input
          type="tel"
          id="phone-field"
          onChange={(e) => this.onChange(e)}
          value={this.state.phone}
          placeholder="Phone: 999-999-9999"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <input
          type="email"
          id="email-field"
          onChange={(e) => this.onChange(e)}
          value={this.state.email}
          placeholder="Email"
        />
        <input
          type="textarea"
          id="description-field"
          onChange={(e) => this.onChange(e)}
          value={this.state.description}
          placeholder="Description"
        />
      </div>
    );
  }
}

export default GeneralInfo;
