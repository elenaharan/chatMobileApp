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
              {/*Lets you choose black*/}
              <TouchableOpacity 
              accessible={true}
              accessibilityLabel="Black background color"
              accessibilityHint="Lets you choose black background color for your chat room"
              style={[styles.colors, styles.black]}
                onPress={() => this.setState({chatRoomColor: "#090C08"})}>
              </TouchableOpacity>
              {/*Lets you choose dark grey color*/}
              <TouchableOpacity 
              accessible={true}
              accessibilityLabel="Dark grey background color"
              accessibilityHint="Lets you choose dark grey background color for your chat room"
              style={[styles.colors, styles.darkGrey]}
                onPress={() => this.setState({chatRoomColor: "#474056"})}>
              </TouchableOpacity>
              {/*Lets you choose light grey color*/}
              <TouchableOpacity 
              accessible={true}
              accessibilityLabel="Light grey background color"
              accessibilityHint="Lets you choose light grey background color for your chat room"
              style={[styles.colors, styles.lightGrey]}
                onPress={() => this.setState({chatRoomColor: "#8A95A5"})}>
              </TouchableOpacity>
              {/*Lets you choose green color*/}
              <TouchableOpacity 
              accessible={true}
              accessibilityLabel="Green background color"
              accessibilityHint="Lets you choose green background color for your chat room"
              style={[styles.colors, styles.green]}
                onPress={() => this.setState({chatRoomColor: "#B9C6AE"})}>
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
    justifyContent: "center",
  },
  colors: {
    width: 45,
    height: 45,
    //margin: 8, 
    //marginTop: 0,
    borderRadius: 45 / 2,
    borderColor: "#fff",
  },
  black: {
    backgroundColor: "#090C08",
  },
  darkGrey: {
    backgroundColor: "#474056",
  },
  lightGrey: {
    backgroundColor: "#8A95A5",
  },
  green: {
    backgroundColor: "#B9C6AE",
  },
})
