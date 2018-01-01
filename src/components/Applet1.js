import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
//import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


export default class Applet1 extends React.Component {
    render(){
        return(
            <Card style={{height:200, width:300, marginLeft:25}}>
                <img src="https://www.mri.psu.edu/sites/default/files/hp-insect-cloaking-device.png" alt="" style={{height:140,width:300}} />
                <Avatar src="https://www.mri.psu.edu/sites/default/files/hp-insect-cloaking-device.png" size={60} border={2.5} style={{marginLeft:10,marginTop:-35}}/>
                <CardTitle
                    className=''
                    title={<a href="#">Shreyansh Gupta</a>}
                    subtitle="@shreyansh04"
                    style={{marginLeft:65, marginTop:-52, textAlign:'left', fontWeight:'bold', fontFamily:'Helvetica Neue", Helvetica, Arial, sans-serif'}}
                />
                <span>
                    <a>Tweets</a> &nbsp;&nbsp;&nbsp; <a>Following</a> &nbsp;&nbsp;&nbsp; <a>Followers</a>
                    <br />
                    20 &nbsp;&nbsp;&nbsp; 125 &nbsp;&nbsp;&nbsp; 236
                </span>
            </Card>
        );
    }
}
