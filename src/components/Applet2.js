import React from 'react';
//import AppBar from 'material-ui/AppBar';
import './Applet2.css';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faEnvelope, faBell} from '@fortawesome/fontawesome-free-regular';
import {faBolt, faHome} from '@fortawesome/fontawesome-free-solid';
import {faTwitter} from '@fortawesome/fontawesome-free-brands';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

const tStyle={
    position:'fixed',
    width:'100%',
    backgroundColor: '#fff',
    height:50,
    //display:'block',
    alignItems:'center'
}

// const ulStyle = {
//     listStyleType:'none',
//     margin:0,
//     padding:0,
//     overflow:'hidden'
// }

// const liStyle={
//     float:'left',
//     fontFamily:'Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
//     fontWeight:'bold',
//     fontSize:'14px',
//     borderRight:'1px solid #bbb',
//     firstLetter:{
//         fontSize:'15px'
//     }
// }

const fStyle = {
    fontSize:'15px',
}

// const aStyle={
//     display:'block',
//     color:'#66757f',
//     textAlign:'center',
//     textDecoration:'none',
//     padding:'14px 12px',
// }



export default class Applet2 extends React.Component{
    render(){
        return(
            <Paper zDepth={1} style={tStyle}>
                <Toolbar style={tStyle}>
                    <ToolbarGroup firstChild={false}>
                        <ul>
                            <li><a href="javascript:void(0)" className='active'><FontAwesomeIcon icon={faHome} size='lg' spin/>&nbsp;<span style={fStyle}>H</span>ome</a></li>
                            <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faBolt} size='lg' />&nbsp;<span style={fStyle}>M</span>oments</a></li>
                            <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faBell} size='lg' />&nbsp;<span style={fStyle}>N</span>otifications</a></li>
                            <li><a href='javascript:void(0)'><FontAwesomeIcon icon={faEnvelope} size='lg' spin/>&nbsp;<span style={fStyle}>M</span>essages</a></li>
                        </ul>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <a href="javascript:void(0)" size='lg' className='brandLogo'><FontAwesomeIcon icon={faTwitter} /></a>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <input type='text' placeholder='Search Twitter' className='inputBar'/>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <Avatar src="http://bit.ly/2C5NN8T" size={32}/>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <button className="tweetButton">Tweet</button>
                    </ToolbarGroup>
                </Toolbar>
            </Paper>
        );
    }
}
