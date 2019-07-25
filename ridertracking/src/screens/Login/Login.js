/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, View, Image } from 'react-native';



import { Container, Header, Content, Button, Text, Thumbnail, Form, Item, Label, Input } from 'native-base';

import firebase from 'react-native-firebase';



import { Col, Row, Grid } from "react-native-easy-grid";


class LoginScreen extends Component {

    state = {
        Username: 11,
        Password: 11,
        currentUser: null,
        mode: 'User Mode',
    }
    handle = (value, name) => {
        this.setState({
            [name]: value,
        })

    }
    changeMode = () => {
        const { mode } = this.state;
        this.setState({
            mode: (mode === 'User Mode') ? 'Admin Mode' : 'User Mode'
        })
    }
    userLogin = () => {
        alert('userLogin');
    }
    adminLogin = () => {


        const db = firebase.firestore();
        const { Username, Password } = this.state;

        db.collection('users').where('password', '==', Password).where('username', '==', Username).get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    this.setState({
                        currentUser: doc.data(),
                    })
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

        this.props.navigation.navigate('Dashboard')
    }
    render() {
        const { Username, Password, mode } = this.state;
        var func = (mode === 'User Mode') ? this.userLogin : this.adminLogin;
        return (
            <Container>
                <Content>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Thumbnail style={styles.logo} large source={require('../../../assets/images/logo.jpg')} />
                        <Button style={styles.buttonCenter} rounded info small onPress={() => { this.changeMode() }} >
                            <Text>{mode}</Text>
                        </Button>
                    </View>
                    <Form>
                        <Item >
                            <Label>Username</Label>
                            <Input onChangeText={(value) => { this.handle(value, "Username") }} />
                        </Item>
                        <Item  >
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(value) => { this.handle(value, "Password") }} />
                        </Item>


                        <Button style={styles.buttonCenter} bordered info onPress={() => func()} >
                            <Text>Login</Text>
                        </Button>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <Text >
                                Forget your login details ?
                            </Text>
                            <Text style={{ color: 'blue' }}
                                onPress={() => LinkingIOS.openURL('http://google.com')}>
                                Click Here Through Login
                            </Text>
                        </View>
                    </Form>
                </Content>
            </Container>

        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonCenter: {
        color: 'white',
        marginTop: 20,
        justifyContent: 'center',

    },
    logo: {
        width: 80,
        height: 80,
        marginTop: '8%'
    },
});