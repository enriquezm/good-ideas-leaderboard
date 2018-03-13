import React, { Component } from 'react';
import './App.css';
import { DB_CONFIG } from './config/config';
import firebase from 'firebase/app';
import UserEntry from './UserEntry';

class App extends Component {
  constructor() {
    super();
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('users');
    this.state = {
      users : [],
    };
  }
  render() {
    return (
      <div className="App">
        <a href="https://www.youtube.com/watch?v=-RtJroTMDf4">Tutorial Help</a>
        <table>
          <caption>Great Ideas</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Winning Count</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map((user, index) => {
                return (
                  <UserEntry id={index} name={user.name} count={user.winCount} />
                )
              })
            }
          </tbody>

        </table>
      </div>
    );
  }
}

export default App;
