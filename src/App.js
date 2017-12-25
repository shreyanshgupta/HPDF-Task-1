import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/home.js'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Home />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
