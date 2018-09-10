import React from 'react';
import Paper from 'material-ui/Paper';
import './Trends.css';

const style ={
    fontFamily:'"Segoe UI",Arial,sans-serif',
    height: 476,
    width: 290,
    display: 'inline-block',
    marginTop:280,
    position:'relative',
    marginLeft:80
};

export default class Trends extends React.Component {
    render(){
        return(
            <Paper zDepth={1} style={style}>
                <div id="module-trends">
                    <div className="trends-header"><h3><span className="header">Trends for you</span></h3>&nbsp;.&nbsp;<a href="#"><span className="change-trends">Change</span></a></div>
                    <div className="trending">
                        <span class="trend-items">#Mumbai</span><br />
                        <span className="trend-items-count">5,683 Tweets</span>
                    </div>
                    <div className="trending">
                        <span class="trend-items">#KamalaMillsFire</span><br />
                        <span className="trend-items-count">@timeofindia is Tweeting about this</span>
                    </div>
                    <div className="trending">
                        <span class="trend-items">#TripleTalaqBill</span><br />
                        <span className="trend-items-count">20.8K Tweets</span>
                    </div>
                    <div className="trending">
                        <span class="trend-items">#Padmavati</span><br />
                        <span className="trend-items-count">Controversial Bollywood film Padmavati could be forced to change name</span>
                    </div>
                    <div className="trending">
                        <span class="trend-items">#IBA2017</span><br />
                        <span className="trend-items-count">3,196 Tweets</span>
                    </div>
                    <div className="trending">
                        <span class="trend-items">Hafiz Saeed</span><br />
                        <span className="trend-items-count">27.4K Tweets</span>
                    </div>
                    <div className="trending">
                        <span class="trend-items">CBFC</span><br />
                        <span className="trend-items-count">18.1K Tweets</span>
                    </div>
                    <div className="trending">
                        <span class="trend-items">Home Credit</span><br />
                        <span className="trend-items-count">4,137 Tweets</span>
                    </div>
                    <div className="trending">
                        <span class="trend-items">#TooteNaJoResolutionWoh</span><br />
                        <span className="trend-items-count">4,147 Tweets</span>
                    </div>
                </div>
            </Paper>
        );
    }
}
