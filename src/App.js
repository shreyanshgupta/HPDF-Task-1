import React, { Component } from 'react';
import ProfileCard from './components/ProfileCard.js';
import Trends from './components/Trends.js';
import Roaming from './components/Roaming.js'
import WhoToFollow from './components/WhoToFollow.js'
import TweetBox from './components/TweetBox.js';
import Feeds from './components/Feeds.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar.js'
import './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div>
                <Applet2 />
                <Navbar />
                <WhoToFollow />
                <ProfileCard />
                <Trends />
                <Roaming />
                <TweetBox />
                <Feeds />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
