import React from "react";
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Platform, KeyboardAvoidingView, Text, Button, TextInput, StyleSheet } from "react-native";

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
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
    }

    onSend(messages = []) {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }));
    }
  
  render() {
    let name = this.props.route.params.name;
    let chatRoomColor = this.props.route.params.chatRoomColor;//color from Start view
    this.props.navigation.setOptions({ title: name });
    return (
      <View style={{ flex: 1, backgroundColor: chatRoomColor, }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
          />
        { Platform.OS === 'android' ? <KeyboardAvoidingView bahvior="height" /> : null }

      
       
        {/*<Button
        title="Go to Start"
        onPress={() => this.props.navigation.navigate("Start")}
        />*/}
      </View>
      
    );
  }
}

