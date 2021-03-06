import React from "react";
import CustomActions from './CustomActions';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import { View, Platform, KeyboardAvoidingView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import MapView from "react-native-maps";


const firebase = require("firebase");
require("firebase/firestore");


export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: "",
        avatar: "",
        name: "",
      },
      isConnected: false,
      image: null,
      location: null,
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

  //loads messages from AsyncStorage
  async getMessages() {
    let messages = '';
    try {
      messages = await AsyncStorage.getItem('messages') || [];
      this.setState({
        messages: JSON.parse(messages)
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  addMessages() {
    const message = this.state.messages[0];
    //add new messages to Firebase
    this.referenceChatMessages.add({
      _id: message._id,
      createdAt: message.createdAt,
      image: message.image || null,
      location: message.location || null,
      text: message.text || "",
      uid: this.state.uid,
      user: message.user,
    });
  }

  //save messages to asyncStorage
  async saveMessages() {
    try {
      await AsyncStorage.setItem('messages', JSON.stringify(this.state.messages));
    } catch (error) {
      console.log(error.message);
    }
  }

  //deletes messages from asyncStorage
  async deleteMessages() {
    try {
      await AsyncStorage.removeItem('messages');
      this.setState({
        messages: []
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount() {
    let name = this.props.route.params.name;

  //checks whether user is online
  NetInfo.fetch().then((connection) => {
    if (connection.isConnected) {
      this.setState({ isConnected: true });

  //creates authentication of users
  this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) {
      firebase.auth().signInAnonymously();
    }
    //update user state with currently active user data
    this.setState({
      uid: user.uid,
      messages: [],
      user: {
        _id: user.uid,
        avatar: "https://placeimg.com/140/140/any",
        name: name,
      },
    });

    //add messages to user
    this.referenceChatMessagesUsers = firebase
    .firestore()
    .collection('messages')
    .where('uid', "==", this.state.uid);

    this.unsubscribe = this.referenceChatMessages
    .orderBy("createdAt", "desc")
    .onSnapshot(this.onCollectionUpdate);
  });
} else {
  console.log('offline');
  this.setState({ isConnected: false });

  //loads messages from asyncStorage
  this.getMessages();
}
});
}
//add new messages to 'message' array
  onSend = (messages = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }),
    () => {
      this.addMessages();
      this.saveMessages();
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
        createdAt: data.createdAt.toDate(),
        image: data.image || null,
        location: data.location || null,
        text: data.text || "",
        uid: this.state.uid,
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

  renderBubble(props) {
    return (
      <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#000'
        }
      }}
      />
    )
  }
//users cannot send new messages if they are offline
  renderInputToolbar(props) {
    if (this.state.isConnected === false) {
    } else {
      return <InputToolbar {...props} />
    }
  }

  renderCustomActions = (props) => {
    return <CustomActions {...props} />;
  };

  renderCustomView (props) {
    const { currentMessage} = props;
    if (currentMessage.location) {
      return (
          <MapView
            style={{
              width: 150,
              height: 100,
              borderRadius: 13,
              margin: 3
            }}
            region={{
              latitude: currentMessage.location.latitude,
              longitude: currentMessage.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
      );
    }
    return null;
  }

  render() {
    let name = this.props.route.params.name;
    let chatRoomColor = this.props.route.params.chatRoomColor;//color from Start view
    this.props.navigation.setOptions({ title: name });
    return (
      <View style={{ flex: 1, backgroundColor: chatRoomColor, }}>
        <GiftedChat
          renderBubble={this.renderBubble}
          renderInputToolbar={this.renderInputToolbar.bind(this)}
          messages={this.state.messages}
          onSend={(message) => this.onSend(message)}
          renderUsernameOnMessage={true}
          user={this.state.user}
          renderActions={this.renderCustomActions}
          renderCustomView={this.renderCustomView}
          //user from database
          user={{
            _id: this.state.user._id,
            avatar: "https://placeimg.com/140/140/any",
            name: this.state.user.name,
          }}
          />
        { Platform.OS === 'android' ? <KeyboardAvoidingView bahvior="height" /> : null }

      
       
        
      </View>
      
    );
  }
}

