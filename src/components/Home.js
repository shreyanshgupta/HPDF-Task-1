import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

function handleRequestDelete() {
    alert('You clicked the delete button.');
}

function handleClick() {
    alert('You clicked the Chip.');
}

export default class Home extends React.Component{
    render(){
        return (
            <MuiThemeProvider muiTheme = {getMuiTheme(lightBaseTheme)}>
                <Toolbar>
                    <ToolbarGroup>
                        <div className = "navbar">
                            <a href="#" class="active"><b>Home</b></a>
                            <a href="#" class="active"><b>Notification</b></a>
                            <a href="#" class="active"><b>Mesages</b></a>
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className="search">
                            <form>
                                <input type="text" placeholder="Search Twitter"/>
                            </form>
                        </div>
                        <List>
                            <ListItem
                                disabled={true}
                                rightAvatar={
                                    <Avatar>S</Avatar>
                                }
                            >
                            </ListItem>
                        </List>
                        <div>
                            <RaisedButton label="Tweet" primary={true} />
                        </div>
                    </ToolbarGroup>
                </Toolbar>

                <div>
                    <Grid fluid>
                        <Row>
                            <Col md={3}>
                                <div>
                                    <Paper style={
                                        {
                                            height: 100,
                                            width: 100,
                                            margin: 20,
                                            textAlign: 'center',
                                            display: 'inline-block',
                                        }
                                    }>

                                        <Card style={
                                            {
                                                textAlign: 'left',
                                                height: 140,
                                                width: 250,
                                                marginLeft: 25,
                                                marginTop: 80,
                                            }
                                        }>
                                            <CardMedia overlay={
                                                <div>
                                                    <List>
                                                        <ListItem disabled={true} leftAvatar={<Avatar>S</Avatar>}></ListItem>
                                                    </List>
                                                </div>
                                            }></CardMedia>
                                            <CardTitle className='user' title='Shreyansh' subtitle='@shreyansh04' />
                                            <CardText>
                                                <p className='highlight'>Tweets Following Followers</p>
                                                <p className='counter'><b>20 12 23</b></p>
                                            </CardText>
                                        </Card>
                                        <Card>
                                            <CardMedia overlay={<CardTitle className='highlights2' title="Trends for you" subtitle="Change"/>}></CardMedia>
                                            <CardText>
                                                <ul className='list'>
                                                    <li><a href="#">#MyntraEORSEndsTonight 5,075 Tweets</a></li>
                                                    <li><a href="#">#ENatalEEU 7,113 Tweets</a></li>
                                                    <li><a href="#">#IndiaForJadhav 2,619 Tweets</a></li>
                                                    <li><a href="#">#RecallBengal 1,810 Tweets</a></li>
                                                    <li><a href="#">TZH BIGGEST OPENING WEEKEND 7,699 Tweets</a></li>
                                                </ul>
                                            </CardText>
                                        </Card>
                                    </Paper>
                                </div>
                            </Col>

                            <Col md ={6}>
                                <div>
                                    <Paper style = {
                                        {
                                            height: 360,
                                            width: 580,
                                            marginLeft: 50,
                                            marginTop: 10,
                                            backgroundColor: indigo200,
                                            textAlign: 'center',
                                            display: 'inline-block',
                                        }
                                    } >
                                        <Card style = {
                                            {
                                                textAlign: 'center',
                                                height: 220,
                                                width: 535,
                                                marginLeft: 25,
                                                marginTop: 120,
                                            }
                                        }>
                                            <CardMedia overlay = {
                                                <div className="tweetBox">
                                                    <form>
                                                        <input type="text" placeholder="What's happening?" style = {{}} />
                                                    </form>
                                                </div>
                                            }>

                                            </CardMedia>
                                            <CardTitle 
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                        );
                        }
}
