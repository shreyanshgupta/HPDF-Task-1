import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/fontawesome-free-solid';
import './TweetBox.css';

const style = {
    fontFamily: '"Segoe UI",Arial,sans-serif',
    height: 58,
    width: 588,
    backgroundColor: '#FFF0E8',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    position:'absolute',
    top:48,
    left:390
}

const imgStyle = {
    left:'28px',
    position:'absolute',
    top:'13px'
}

export default class TweetBox extends React.Component {
    render(){
        return(
            <Paper zDepth={0} style={style} rounded={false}>
                <Avatar src="https://goo.gl/avLhwR" size={32} style={imgStyle}/>
                <span className="tweetbox">
                    <input type="text" id="textbox" placeholder="What's happening?" />
                    <span id="icon"><FontAwesomeIcon icon={faImage} /></span>
                </span>
            </Paper>
        );
    }
}
