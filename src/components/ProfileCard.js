import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './ProfileCard.css';

const style = {
    height: 213,
    width: 290,
    top:55,
    marginLeft: 80,
    // textAlign: 'center',
    position:'absolute'
};

const profileCardStyle = {
    border:'2px solid #fff',
    position:'absolute',
    float:'left',
    marginTop:'-30px',
    marginRight:'0',
    marginBottom:'0',
    marginLeft:'8px'
};

export default class ProfileCard extends React.Component {
    render(){
        return(
            <Paper style={style} zDepth={1} rounded={false}>
                <img src="https://goo.gl/WzJAvD" alt="coverImage" width="290" height="95" style={{position:'absolute'}}/>
                <div style={{position:'relative',marginTop:'100px'}}>
                    <a href="https://goo.gl/LyJPNA"><Avatar src="https://goo.gl/avLhwR" size={68} style={profileCardStyle} /></a>
                    <div className="accountGroup">
                        <a href="https://goo.gl/LyJPNA" className="userName">Shreyansh&nbsp;Gupta</a><br/>
                        <span className="screenNameLinkP">@<a href="https://goo.gl/LyJPNA" className="screenNameLink">shreyansh04</a></span>
                    </div>
                    <br />
                    <div class="profileCardStats">
                        <ul className="Arrange Arrange--equal">
                            <li className="stat"><a href="#" id="opi">
                                <span className="profileCardStats-statLabel">Tweets</span><br />
                                <span className="profileCardStats-statValue">18</span></a>
                            </li>
                            <li className="stat"><a href="#" id="opi">
                                <span className="profileCardStats-statLabel">Following</span><br />
                                <span className="profileCardStats-statValue">140</span></a>
                            </li>
                            <li className="stat"><a href="#" id="opi">
                                <span className="profileCardStats-statLabel">Followers</span><br />
                                <span className="profileCardStats-statValue">27</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Paper>

        );
    }
}
