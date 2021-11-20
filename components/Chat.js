import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default class Chat extends React.Component {
  render() {
    let name = this.props.route.params.name;
    let chatRoomColor = this.props.route.params.chatRoomColor;//color from Start view
    this.props.navigation.setOptions({ title: name });
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: chatRoomColor, }}>
        <Button
        title="Go to Start"
        onPress={() => this.props.navigation.navigate("Start")}
        />
      </View>
    );
  }
}
