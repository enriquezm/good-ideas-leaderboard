import React, { Component } from 'react';
import './App.css';
// import { DB_CONFIG } from './config';
import firebase from 'firebase/app';
import 'firebase/database';
import UserEntry from './UserEntry';

class App extends Component {
  constructor() {
    super();
    // Initialize Firebase
    const DB_CONFIG = {
      apiKey: "AIzaSyDOFdqcEKqGypczTSkNdzm7KoSS4w9hUN8",
      authDomain: "good-ideas-da921.firebaseapp.com",
      databaseURL: "https://good-ideas-da921.firebaseio.com",
      projectId: "good-ideas-da921",
      storageBucket: "good-ideas-da921.appspot.com",
      messagingSenderId: "661275371854"
    };
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('users');
    this.state = {
      users : [],
    };
  }
  componentWillMount() {
    const previousUsers = this.state.users; // Create copy of current list of users
    this.database.on('child_added', snap => {
      previousUsers.push({
        id: snap.key,
        name: snap.val().name,
      })
      this.setState({
        users : previousUsers,
      })
    });
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
