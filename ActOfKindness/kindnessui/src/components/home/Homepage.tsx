import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {store, useStore} from '../../app/stores/store';
import {Button, Container, Divider, Grid, Header, Icon, Segment} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";
import ImageCarousel from './ImageCarousel';
import homeImage1 from '../../images/homepage1.avif'
import homeImage2 from '../../images/homepage2.avif'
import homeImage3 from '../../images/homepage3.avif'
import homeImage4 from '../../images/homepage4.avif'
import FacebookLogin from "@greatsumini/react-facebook-login";

function Homepage() {
    const { accountStore } = useStore();

    useEffect(() => {
        document.body.style.display = 'flex';
        return () => {
            document.body.style.display = 'block';
        };
    }, []);



    return (
        <>
            <Segment  className="homepagePicture" style={{ width: '110vw', height: '98vh' }}>
                <Grid  centered verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column style={{marginRight: 250}} textAlign="center">

                            <Header
                                as="h1"
                                content="Creating memories together"
                                inverted
                                style={{
                                    fontSize: '5em',
                                    fontWeight: 'bold',
                                    marginBottom: 0,
                                    marginTop: '2.2em',
                                }}
                            />
                            <Header
                                as="h2"
                                content="Multiple hands get the job done faster."
                                inverted
                                style={{
                                    fontSize: '1.7em',
                                    fontWeight: 'bold',
                                    marginTop: '1.5em',
                                }}
                            />

                            {!accountStore.isLoggedIn ? (
                                <Button.Group>
                                    <Button as={Link}

                                            size="huge" color={'orange'}  style={{ width: '180px', margin: '0 auto'
                                    }} onClick={()=>store.modalStore.openModal(<LoginForm/>, "Login to help others")} >
                                        Login
                                        <Icon style={{ paddingLeft: '10px' }} name="user" />
                                    </Button>
                                    <Button.Or className={"custom-or"} style={{marginTop: 6,verticalAlign: 'text-top'}}/>

                                    <Button onClick={()=>store.modalStore.openModal(<RegisterForm/>, "Register to help others")} size="huge" color={'teal'}  style={{ width: '180px', margin: '0 auto' }}>
                                        Register
                                        <Icon style={{ paddingLeft: '10px' }} name="wpforms" />
                                    </Button>

                                    <Divider horizontal inverted>Or</Divider>
                                    <Button
                                        as={FacebookLogin}
                                        appId={'287828743788720'}
                                        size={'huge'}
                                        inverted
                                        color={'facebook'}
                                        content={'Login to Facebook'}
                                        onSuccess={(response:any)=>{
                                            console.log('Login Success', response)
                                        }}
                                        onFail={(response:any)=>{
                                            console.log('Login Failed', response)
                                        }}
                                    />
                                </Button.Group>
                            ):
                                    <Button as={Link} to={'/events'} size="huge" color={'teal'}  style={{ width: '280px', margin: '0 auto' }}>
                                        Take me to Events!
                                        <Icon style={{ paddingLeft: '10px' }} name="wpforms" />
                                    </Button>
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>


        <Segment style={{ width: '100vw', background: 'black' }}>
                        <ImageCarousel />
        </Segment>
        <Segment style={{ width: '60vw', background: 'gray', margin: '0px 0px 0px 20vw' }}>
            <center><p><h1>How does it work?<br/></h1></p></center><p></p>
            <Grid centered verticalAlign="middle" align="center">
                <Grid.Row>
                    <Grid.Column width={8} textAlign="center" color="black">
<h2>Purpose of this site is to connect users on a meaningful level (not like any other social media). We aim to link helpers with people in need and enable real-life interactions between them.</h2>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="right" color="black">
                        <img src={homeImage1}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8} textAlign="center" color="black">
                    <img src={homeImage2}/>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="center" color="black">
<h2>Want to help?<br/>Click on the 'events' above and check if someone near you needs any support.<br/>You can join via 'Event details'.</h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8} textAlign="center" color="black">
<h2>Do you need help?<br/>Click on 'create event' and let people know what you need, when, where and how they could aid you.</h2>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="right" color="black">
                        <img src={homeImage3}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8} textAlign="center" color="black">
                    <img src={homeImage4}/>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="center" color="black">
<h2>Do you want to teach any skill?<br/>You can organize any lessons or webinars via 'create event'.</h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        </>
    );
}

export default observer(Homepage);
