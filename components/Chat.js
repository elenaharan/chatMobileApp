import React from "react";
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Platform, KeyboardAvoidingView, Text, Button, TextInput, StyleSheet } from "react-native";

const firebase = require("firebase");
require("firebase/firestore");


export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      uid: 0,
    };
  

  //if no firebase
  if (!firebase.apps.length) {
    //initialise Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyA3LHkaj2aQxj1LzItARlEOelwDVwXjoWc",
      authDomain: "chatmobileapp-3168a.firebaseapp.com",
      projectId: "chatmobileapp-3168a",
      storageBucket: "chatmobileapp-3168a.appspot.com",
      messagingSenderId: "806432856375",
      appId: "1:806432856375:web:ef030626110eb43efd22b2"
    });
  }

  //reference to the messages collection
  this.referenceChatMessages = firebase.firestore().collection("messages");
  }

  addMessages() {
    const message = this.state.messages[0];
    //add new messages to Firebase
    this.referenceChatMessages.add({
      uid: this.state.uid,
      _id: message._id,
      text: message.text || "",
      createdAt: message.createdAt,
      user: message.user,
    });
  }





  componentDidMount() {
    let name = this.props.route.params.name;
    this.setState({
      messages: [
        {
          _id: 1,
          text: `Hello ${name}`,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: `${name} joined this conversation`,
          createdAt: new Date(),
          system: true,
        },
      ]
    });
  

  //creates authentication of users
  this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) {
      firebase.auth().signInAnonymously();
    }
    //update user state with currently active user data
    this.setState({
      uid: user.uid,
      messages: [],
    });


    this.unsubscribe = this.referenceChatMessages
    .orderBy("createdAt", "desc")
    .onSnapshot(this.onCollectionUpdate);
  });
}
//add new messages to 'message' array
  onSend = (messages = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }),
    () => {
      this.addMessages();
    }
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
    //stop listening to authentication
    this.authUnsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      //get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text || "",
        createdAt: data.createdAt.toDate(),
        user: {
          _id: data.user._id,
          avatar: data.user.avatar,
          name: data.user.name,
        },
      });
    });
    this.setState({
      messages,
    });
  };

  render() {
    let name = this.props.route.params.name;
    let chatRoomColor = this.props.route.params.chatRoomColor;//color from Start view
    this.props.navigation.setOptions({ title: name });
    return (
      <View style={{ flex: 1, backgroundColor: chatRoomColor, }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => this.onSend(message)}
          renderUsernameOnMessage={true}
          user={this.state.user}
          />
        { Platform.OS === 'android' ? <KeyboardAvoidingView bahvior="height" /> : null }

      
       
        
      </View>
      
    );
  }
}

