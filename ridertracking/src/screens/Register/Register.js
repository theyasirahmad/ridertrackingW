/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, View, Image } from 'react-native';

import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'



import { Container, Header, Content, Button, Text, Thumbnail, Form, Item, Label, Input } from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Col, Row, Grid } from "react-native-easy-grid";
import { classBody } from '@babel/types';

// type Props = {};
class RegisterScreen extends Component {
    state = {
        employeeStatus: 'Available',
    }

    render() {
        return (
            <AppRegisterContainer />
        );
    }
}
export default RegisterScreen;


class ChangeCredentials extends Component {

    state = {
        Username: null,
        Password: null,
        Password2: null,
        currentUser: null,
        mode: 'User Mode',
    }
    handle = (value, name) => {
        this.setState({
            [name]: value,
        })

    }

    render() { 
        return (
            <Container>
                <Content>
                    <Form>
                        <Item style={{marginTop:0 , marginBottom:0}} floatingLabel>
                            <Label>Enter Your First Name</Label>
                            <Input onChangeText={(value) => { this.handle(value, "FirstName") }} />
                        </Item>
                        <Item style={{marginTop:0 , marginBottom:0}} floatingLabel>
                            <Label>Enter Your Last Name</Label>
                            <Input onChangeText={(value) => { this.handle(value, "LastName") }} />
                        </Item>
                        <Item style={{marginTop:0 , marginBottom:0}} floatingLabel>
                            <Label>Enters Your Email</Label>
                            <Input onChangeText={(value) => { this.handle(value, "Email") }} />
                        </Item>
                        <Item style={{marginTop:0 , marginBottom:0}} floatingLabel>
                            <Label>New Password</Label>
                            <Input secureTextEntry={true} onChangeText={(value) => { this.handle(value, "Password") }} />
                        </Item>
                        <Item style={{marginTop:0 , marginBottom:0}} floatingLabel>
                            <Label>Confirm Password</Label>
                            <Input secureTextEntry={true} onChangeText={(value) => { this.handle(value, "Password2") }} />
                        </Item>



                        <Button style={styles.buttonCenter} bordered info onPress={() => this.props.navigation.navigate('Connect')} >
                            <Text>Next</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}


class ConnectFacebook extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>ConnectFacebook</Text>
            </View>
        );
    }
}

const RegisterSwitchNavigator = createStackNavigator({
    Change: {
        screen: ChangeCredentials,
        navigationOptions: {
            headerTitle: 'Change Credentials'
        }
    },
    Connect: {
        screen: ConnectFacebook,
        navigationOptions: {
            headerTitle: 'Connect Facebook'
        }
    },
});

const AppRegisterContainer = createAppContainer(RegisterSwitchNavigator);


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

});