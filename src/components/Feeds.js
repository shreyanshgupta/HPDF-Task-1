import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCheckCircle,faRetweet,faAngleDown} from '@fortawesome/fontawesome-free-solid';
import {faComment,faHeart,faEnvelope} from '@fortawesome/fontawesome-free-regular';
import Divider from 'material-ui/Divider';
import './Feeds.css';
const style = {
    base: {
		fontFamily: '"Segoe UI",Arial,sans-serif',
		width:588,
		position:'relative',
		marginLeft: 378,
		marginRight: 10
    // height:450,
    // left:390,
    // top:108,
    // marginTop: -415,
	},

	heightbase:{
		marginTop: -415
	}


}

const divstyle={
    width:588,
    paddingLeft:'none !important',
}

export default class Feeds extends React.Component {
    render(){
        return(
            <div>
                <Paper style={Object.assign({},style.base,style.heightbase)} zDepth={0}>
                    <div className="feedModule">
                        <div className="stream-item-header">
                            <a href="https://twitter.com/CNN" className="profile">
                                <Avatar src="https://goo.gl/cKMquq" className="avatar"/>
                                <span className="FullNameGroup">
                                    <strong className="fullname u-textTruncate">CNN</strong>
                                    <span>&rlm;</span>
                                    <span className="UserBadges">
                                        <span className="Icon"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                    </span>
                                    <span>&nbsp;</span>
                                </span>
                                <span className="username-dir">@<b>CNN</b></span>
                            </a>
                            <small className="time">&nbsp;.&nbsp;24m</small>
                            <div className="profileTweetAction">
                                <div className="dropdown" style={{position:'relative',float:'right'}}>
                                    <FontAwesomeIcon icon={faAngleDown} className="toggle"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="tweetsize">
                                Trump appears to claim credit for recent reports saying that 2017 was the safest year in global commercial air travel's recorded history, but it's been nearly a decade since there was a fatal US commercial passenger airline crash in the United States <a href="http://cnn.it/2CFbamP" style={{color:'#FF691F',textDecoration:'none'}}>http://cnn.it/2CFbamP</a>
                            </p>
                        </div>
                        <div className="media" style={{marginTop:'10px',marginLeft:'50px'}}>
                            <div className="adaptiveMedia">
                                <img src="https://goo.gl/k2Qz9T" className="adaptiveMedia"/>
                            </div>
                        </div>
                        <div className="stream-footer">
                            <div className="stream-footer-action-list" role="group">
                                <div className="action">
                                    <div className="reply actionButton"><FontAwesomeIcon icon={faComment} className="icon"/>&nbsp;<span className="count">41</span></div>
                                </div>
                                <div className="action">
                                    <div className="retweet actionButton"><FontAwesomeIcon icon={faRetweet} className="icon"/>&nbsp;<span className="count">54</span></div>
                                </div>
                                <div className="action">
                                    <div className="favourite actionButton"><FontAwesomeIcon icon={faHeart} className="icon"/>&nbsp;<span className="count">97</span></div>
                                </div>
                                <div className="action">
                                    <div className="dm actionButton"><FontAwesomeIcon icon={faEnvelope} className="icon"/>&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider style={divstyle} />
                </Paper>


                {/* <Divider style={divstyle} /> */}
                <Paper style={style.base} zDepth={0}>
                    <div className="feedModule">
                        <div className="stream-item-header">
                            <a href="https://twitter.com/CNN" className="profile">
                                <Avatar src="https://goo.gl/fKtpBc" className="avatar"/>
                                <span className="FullNameGroup">
                                    <strong className="fullname u-textTruncate">Times of India</strong>
                                    <span>&rlm;</span>
                                    <span className="UserBadges">
                                        <span className="Icon"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                    </span>
                                    <span>&nbsp;</span>
                                </span>
                                <span className="username-dir">@<b>timesofindia</b></span>
                            </a>
                            <small className="time">&nbsp;.&nbsp;44m</small>
                            <span className="profileTweetAction">
                                <span className="dropdown" style={{position:'relative',marginLeft:'-108px' }}>
                                    <FontAwesomeIcon icon={faAngleDown} className="toggle"/>
                                </span>
                            </span>
                        </div>
                        <div>
                            <p className="tweetsize">
                                Amid friction, India to host CPC team <a href="http://toi.in/qwnpjY/a24gk" style={{color:'#FF691F',textDecoration:'none'}}>http://toi.in/qwnpjY/a24gk</a>
                            </p>
                        </div>
                        <div className="media" style={{marginTop:'10px',marginLeft:'50px'}}>
                            <div className="adaptiveMedia">
                                <img src="https://goo.gl/Lks9yp" className="adaptiveMedia"/>
                            </div>
                        </div>
                        <div className="stream-footer">
                            <div className="stream-footer-action-list" role="group">
                                <div className="action">
                                    <div className="reply actionButton"><FontAwesomeIcon icon={faComment} className="icon"/>&nbsp;<span className="count">41</span></div>
                                </div>
                                <div className="action">
                                    <div className="retweet actionButton"><FontAwesomeIcon icon={faRetweet} className="icon"/>&nbsp;<span className="count">54</span></div>
                                </div>
                                <div className="action">
                                    <div className="favourite actionButton"><FontAwesomeIcon icon={faHeart} className="icon"/>&nbsp;<span className="count">97</span></div>
                                </div>
                                <div className="action">
                                    <div className="dm actionButton"><FontAwesomeIcon icon={faEnvelope} className="icon"/>&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider style={divstyle} />
                </Paper>


                {/* <Divider style={divstyle} /> */}
                <Paper style={style.base} zDepth={0}>
                    <div className="feedModule">
                        <div className="stream-item-header">
                            <a href="https://twitter.com/CNN" className="profile">
                                <Avatar src="https://goo.gl/cKMquq" className="avatar"/>
                                <span className="FullNameGroup">
                                    <strong className="fullname u-textTruncate">CNN</strong>
                                    <span>&rlm;</span>
                                    <span className="UserBadges">
                                        <span className="Icon"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                    </span>
                                    <span>&nbsp;</span>
                                </span>
                                <span className="username-dir">@<b>CNN</b></span>
                            </a>
                            <small className="time">&nbsp;.&nbsp;1hr</small>
                            <div className="profileTweetAction">
                                <div className="dropdown" style={{position:'relative',float:'right'}}>
                                    <FontAwesomeIcon icon={faAngleDown} className="toggle"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="tweetsize">
                                This burger company's stock soared after it launched a customer rewards program on blockchain technology <a href="http://cnn.it/2EDMhZ7" style={{color:'#FF691F',textDecoration:'none'}}>http://cnn.it/2EDMhZ7</a>
                            </p>
                        </div>
                        <div className="media" style={{marginTop:'10px',marginLeft:'50px'}}>
                            <div className="adaptiveMedia">
                                <img src="https://goo.gl/4rQSPz" className="adaptiveMedia"/>
                            </div>
                        </div>
                        <div className="stream-footer">
                            <div className="stream-footer-action-list" role="group">
                                <div className="action">
                                    <div className="reply actionButton"><FontAwesomeIcon icon={faComment} className="icon"/>&nbsp;<span className="count">41</span></div>
                                </div>
                                <div className="action">
                                    <div className="retweet actionButton"><FontAwesomeIcon icon={faRetweet} className="icon"/>&nbsp;<span className="count">54</span></div>
                                </div>
                                <div className="action">
                                    <div className="favourite actionButton"><FontAwesomeIcon icon={faHeart} className="icon"/>&nbsp;<span className="count">97</span></div>
                                </div>
                                <div className="action">
                                    <div className="dm actionButton"><FontAwesomeIcon icon={faEnvelope} className="icon"/>&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider style={divstyle} />
                </Paper>
            </div>
        );
    }
}
