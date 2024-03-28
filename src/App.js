import './App.css';
import React from 'react';
import logo from './logo.svg';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      hospitals: []
    }

  }

  componentDidMount() {
    fetch('https://openprescribing.net/api/1.0/org_code/?org_type=practice&q=London&format=json')
      .then(response => {
        return response.json();
      })
      .then(allHospitals => {
        this.setState({ hospitals: allHospitals });
      })
      .catch(function(error) {
        console.log('error', error)
      });
  }

  render() {
    const { hospitals } = this.state;

    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table className="trial-data">
          <thead>
            <tr><th>Hospital</th>
                <th>Postcode</th>
                <th>CCG</th></tr></thead>
              <tbody>
              {hospitals.map(hospital => (
                      <tr key={hospital.code}><td>{hospital.name}</td>
                          <td>{hospital.postcode}</td>
                          <td>{hospital.ccg}</td>
                      </tr>
                  ))}
            </tbody>
          </table>
        </header>
      </div>
    );
  };
}

export default App;
