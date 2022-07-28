import { Component } from 'react';
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
      education:{

      },
      experience:{

      }

    };
    this.setGeneral = this.setGeneral.bind(this);
  }

    setGeneral = (generalInfo) => {
      this.setState({general: generalInfo})
    }
  

  render() {
    return (
      <div id="container">
        <form onSubmit={this.editGeneral}>
          <GeneralInfo setGeneral={this.setGeneral} />
        </form>
        {this.state.general.firstName}
        {this.state.general.lastName}
      </div>
    );
  }
}


export default App;
