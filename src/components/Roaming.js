import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/fontawesome-free-solid';
import './Roaming.css';

const style = {
    fontFamily:'"Segoe UI",Arial,sans-serif',
    height: 156,
    width: 290,
    position:'relative',
    // left:1000,
    marginLeft:975,
    marginTop:-375,
    // top:389
}

export default class Roaming extends React.Component {
    render(){
        return(
            <Paper zDepth={1} style={style}>
                <div className="flex-module">
                    <ul class="roamings">
                        <li className="citem policy">© 2017 Twitter</li>
                        <li className="citem">About</li>
                        <li className="citem">Help Center</li>
                        <li className="citem">Terms</li>
                        <li className="citem">Privacy policy</li>
                        <li className="citem">Cookies</li>
                        <li className="citem">Ads info</li>
                        <li className="citem">Brand</li>
                        <li className="citem">Blog</li>
                        <li className="citem">Status</li>
                        <li className="citem">Apps</li>
                        <li className="citem">Jobs</li>
                        <li className="citem">Marketing</li>
                        <li className="citem">Business</li>
                        <li className="citem">Developers</li>
                    </ul>
                    <br />
                    <Divider />
                    <br />
                    <span style={{color:'#FF691F',fontSize:'13px',cursor:'pointer'}}>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='xs' />&nbsp;<span className="ads">Advertise with Twitter</span>
                    </span>
                </div>
            </Paper>
        );
    }
}
