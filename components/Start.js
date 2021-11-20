import React, {Component} from "react";
import { TouchableOpacity, ImageBackground, View, Text, Button, TextInput, StyleSheet } from "react-native";

//Importing images
import backgroundImage from "../assets/images/backgroundImage.png";


export default class Start extends React.Component {
  state = {
    name: "",
    chatRoomColor: "",
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
        {/*Container with name input, color picker and button*/}
        <View style={styles.box}>
          {/*Text input window*/}
          <TextInput
            style={styles.inputText}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            placeholder="Type your name here..."
          />
          {/*Colo picker*/}
          <View style={styles.colorPickerContainer}>
            <Text style={styles.chooseColor}>Pick the color of your chat room</Text>
            <View style={styles.colorPicker}>
              {/*Lets you choose mist color*/}
              <TouchableOpacity style={[styles.colors, styles.mist]}
                onPress={() => this.setState({chatRoomColor: "#90AFC5"})}>
              </TouchableOpacity>
              {/*Lets you choose seafoam color*/}
              <TouchableOpacity style={[styles.colors, styles.seafoam]}
                onPress={() => this.setState({chatRoomColor: "#C4DFE6"})}>
              </TouchableOpacity>
              {/*Lets you choose aquamarine color*/}
              <TouchableOpacity style={[styles.colors, styles.aquamarine]}
                onPress={() => this.setState({chatRoomColor: "#98DBC6"})}>
              </TouchableOpacity>
              {/*Lets you choose pinkTulip color*/}
              <TouchableOpacity style={[styles.colors, styles.pinkTulip]}
                onPress={() => this.setState({chatRoomColor: "#F18D9E"})}>
              </TouchableOpacity>
              {/*Lets you choose ice color*/}
              <TouchableOpacity style={[styles.colors, styles.ice]}
                onPress={() => this.setState({chatRoomColor: "#A1D6E2"})}>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity>
            <Button
              title="Start to Chat"
              onPress={() =>
                this.props.navigation.navigate("Chat", { 
                  name: this.state.name,
                  chatRoomColor: this.state.chatRoomColor,
               })
              }
            />
            </TouchableOpacity>
          </View>
          
        </View>
        
      </View>
    );
  }
}

//Styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  inputText: {
    top: 25,
    height: 55,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18,
    borderColor: "#777",
    borderWidth: 1,
    fontWeight: "300",
  },
  box: {
    backgroundColor: "#ffffff",
    width: "80%",
    marginBottom: 160,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    height: 280,
    borderRadius: 20,
  },
  chooseColor: {
    fontSize: 16,
    fontWeight: "300",
    color: "gray",
    marginTop: 35,
  },
  colorPicker: {
    flexDirection: "row",
    marginTop: 10,
  },
  colors: {
    width: 45,
    height: 45,
    //margin: 8, 
    //marginTop: 0,
    borderRadius: 45 / 2,
    borderColor: "#fff",
  },
  mist: {
    backgroundColor: "#90AFC5",
  },
  seafoam: {
    backgroundColor: "#C4DFE6",
  },
  aquamarine: {
    backgroundColor: "#98DBC6",
  },
  pinkTulip: {
    backgroundColor: "#F18D9E",
  },
  ice: {
    backgroundColor: "#A1D6E2",
  },
})
