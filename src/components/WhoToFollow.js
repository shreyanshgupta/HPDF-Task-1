import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faTimes,faCheckCircle,faUsers} from '@fortawesome/fontawesome-free-solid';
import FlatButton from 'material-ui/FlatButton';
import './WhoToFollow.css';

const style= {
    fontFamily:'"Segoe UI",Arial,sans-serif',
    height: 316,
    width: 290,
    position:'absolute',
    left:1000,
    top:56
}

const buttonStyle ={
    border:1,
    borderStyle:'solid',
    borderColor:'#FF691F',
    borderRadius:'100px',
    height:30,
    marginTop:8,
    minWidth:'89px',
};

const labelStyle={
    textTransform:"none",
    color:"#FF691F",
    fontWeight:"bold",
    fontSize:'12px',
    verticalAlign:'center',
    horizontalAlign:'middle',
};

export default class WhoToFollow extends React.Component{
    render(){
        return(
            <Paper zDepth={1} style={style}>
                <div className="wtf-module">
                    <div className="wtf-module-header">
                        <h3>Who to follow</h3>
                        &nbsp;<small>.</small>&nbsp;
                        <span id="subheader"><small>Refresh</small></span>
                        &nbsp;<small>.</small>&nbsp;
                        <span id="subheader"><small>View all</small></span>
                    </div>
                    <div className="wtf-module-recommendations">
                        <div className="item">
                            <div style={{display:'flex',marginBottom:'4px'}}></div>
                            <div style={{float:'right',marginTop:'0',color:'#ccd6dd',width:'10px',height:'10px',cursor:'pointer'}}><span style={{display:'inline-block',fontStyle:'normal',verticalAlign:'baseline',position:'relative'}}><FontAwesomeIcon icon={faTimes} /></span></div>
                            <div><Avatar src="https://goo.gl/xXsLuP" size={48} style={{position:'absolute',left:0}}/></div>
                            <span style={{position:'absolute',width:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',marginLeft:'60px'}}>
                                <strong className="fullName">Armin van Buuren</strong>
                                <span>&nbsp;</span>
                                <span style={{fontSize:'.9em',color:'#1c94e0'}}><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <span>&nbsp;</span>
                                <span>@<b>armi...</b></span>
                            </span>
                            <div className="followButton">
                                <FlatButton label="Follow" primary={true} style={buttonStyle} labelStyle={labelStyle} hoverColor ="rgba(255, 240, 232,1)" />
                            </div>
                        </div>
                        <Divider />
                        <div className="item">
                            <div style={{display:'flex',marginBottom:'4px'}}></div>
                            <div style={{float:'right',marginTop:'0',color:'#ccd6dd',width:'10px',height:'10px',cursor:'pointer'}}><span style={{display:'inline-block',fontStyle:'normal',verticalAlign:'baseline',position:'relative'}}><FontAwesomeIcon icon={faTimes} /></span></div>
                            <div><Avatar src="https://goo.gl/orvheH" size={48} style={{position:'absolute',left:0}}/></div>
                            <span style={{position:'absolute',width:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',marginLeft:'60px'}}>
                                <strong className="fullName">Gareth Emery</strong>
                                <span>&nbsp;</span>
                                <span style={{fontSize:'.9em',color:'#1c94e0'}}><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <span>&nbsp;</span>
                                <span style={{fontSize:'14px',color:'#657786'}}>@<b>garemary</b></span>
                            </span>
                            <div className="followButton">
                                <FlatButton label="Follow" primary={true} style={buttonStyle} labelStyle={labelStyle} hoverColor ="rgba(255,206,183,0.5)" />
                            </div>
                        </div>
                        <Divider />
                        <div className="item">
                            <div style={{display:'flex',marginBottom:'4px'}}></div>
                            <div style={{float:'right',marginTop:'0',color:'#ccd6dd',width:'10px',height:'10px',cursor:'pointer'}}><span style={{display:'inline-block',fontStyle:'normal',verticalAlign:'baseline',position:'relative'}}><FontAwesomeIcon icon={faTimes} /></span></div>
                            <div><Avatar src="https://goo.gl/TvDZEs" size={48} style={{position:'absolute',left:0}}/></div>
                            <span style={{position:'absolute',width:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',marginLeft:'60px'}}>
                                <strong className="fullName">Aly & Fila</strong>
                                <span>&nbsp;</span>
                                <span style={{fontSize:'.9em',color:'#1c94e0'}}><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <span>&nbsp;</span>
                                <span style={{fontSize:'14px',color:'#657786'}}>@<b>alyandfila</b></span>
                            </span>
                            <div className="followButton">
                                <FlatButton label="Follow" primary={true} style={buttonStyle} labelStyle={labelStyle} hoverColor ="rgba(255,206,183,0.5)" />
                            </div>
                        </div>
                        <Divider />
                    </div>
                    <div className="import">
                        <span><FontAwesomeIcon icon={faUsers} /></span>&nbsp;&nbsp;
                        <span>Find people you know</span>
                    </div>
                </div>
            </Paper>
        );
    }
}
