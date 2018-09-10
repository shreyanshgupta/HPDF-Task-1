import React from 'react';
//import AppBar from 'material-ui/AppBar';
import './Navbar.css';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faEnvelope, faBell} from '@fortawesome/fontawesome-free-regular';
import {faBolt, faHome, faSearch} from '@fortawesome/fontawesome-free-solid';
import {faTwitter} from '@fortawesome/fontawesome-free-brands';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

const tStyle={
    position:'fixed',
    width:'100%',
    backgroundColor: '#fff',
    height:45,
    top:0,
    zIndex:1,
    //padding: '0px 100px',
    //display:'block',
    //alignItems:'center'
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

const tpStyle = {
    padding: '0px 80px',
    position:'fixed',
    width:'100%',
    backgroundColor: '#fff',
    height:45,
    top:0,
    zIndex:1,
}

const imgStyle = {
    textAlign: 'center',
    // position:'absolute',
    // left:'28px'
}

// const aStyle={
//     display:'block',
//     color:'#66757f',
//     textAlign:'center',
//     textDecoration:'none',
//     padding:'14px 12px',
// }



export default class Navbar extends React.Component{
    render(){
        return(
            <Paper zDepth={1} style={tStyle}>
                <Toolbar style={tpStyle}>
                    <ToolbarGroup firstChild={false}>
                        <ul className="list">
                            <li className="itemlist"><a href="javascript:void(0)" className='active'><FontAwesomeIcon icon={faHome} size='lg'/>&nbsp;<span style={fStyle}>H</span>ome</a></li>
                            <li className="itemlist"><a href="javascript:void(0)"><FontAwesomeIcon icon={faBolt} size='lg' />&nbsp;<span style={fStyle}>M</span>oments</a></li>
                            <li className="itemlist"><a href="javascript:void(0)"><FontAwesomeIcon icon={faBell} size='lg' />&nbsp;<span style={fStyle}>N</span>otifications</a></li>
                            <li className="itemlist"><a href='javascript:void(0)'><FontAwesomeIcon icon={faEnvelope} size='lg'/>&nbsp;<span style={fStyle}>M</span>essages</a></li>
                        </ul>
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <a href="javascript:void(0)" size='lg' className='brandLogo'><FontAwesomeIcon icon={faTwitter} /></a>
                    </ToolbarGroup>

                    <ToolbarGroup className='searchinput'>
                        <input type='text' placeholder='Search Twitter' className='inputBar'/>
                        <FontAwesomeIcon icon={faSearch} size='lg' className='searchIcon'/>
                    </ToolbarGroup>

                    <ToolbarGroup className='avatarposition'>
                        <Avatar src="https://goo.gl/avLhwR" size={32} style={imgStyle}/>
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <button className="tweetButton">Tweet</button>
                    </ToolbarGroup>

                </Toolbar>
            </Paper>
        );
    }
}
