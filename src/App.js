import React, { Component } from 'react';
import ProfileCard from './components/ProfileCard.js';
import Trends from './components/Trends.js';
import Roaming from './components/Roaming.js'
import WhoToFollow from './components/WhoToFollow.js'
import TweetBox from './components/TweetBox.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div>
                <WhoToFollow />
                <ProfileCard />
                <Trends />
                <Roaming />
                <TweetBox />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
