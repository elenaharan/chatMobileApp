# chatMobileApp General Information

This is a mobile chat app for mobile devices built with React Native. This app will provide users with a chat interface and options to share images and their location.

## Technologies
This app is built using React Native, Expo and Google Firestore Database. It is optimized for both Android and iOS devices. Expo was used to develop the app and Google Firestor to store chat messages.

## Built with
- React Native
- Node.js
- Expo
- Android Studio
- Firebase
- Google Firestore
- Gifted Chat
- Dialogflow

## Dependencies
You will need to install the following dependencies in order to run the project:<br>
-"@react-native-community/masked-view": "^0.1.11",<br>
-"@react-navigation/native": "^6.0.6",<br>
-"@react-navigation/stack": "^6.0.11",<br>
-"expo": "~43.0.2",<br>
-"expo-status-bar": "~1.1.0",<br>
-"firebase": "^8.2.3",<br>
-"react": "17.0.1",<br>
-"react-dom": "17.0.1",<br>
-"react-native": "0.64.3",<br>
-"react-native-gesture-handler": "~1.10.2",<br>
-"react-native-gifted-chat": "^0.16.3",<br>
-"react-native-reanimated": "~2.2.0",<br>
-"react-native-safe-area-context": "3.3.2",<br>
-"react-native-screens": "~3.8.0",<br>
-"react-native-web": "0.17.1",<br>
-"react-navigation": "^4.4.4",<br>
-"@react-native-async-storage/async-storage": "~1.15.0",<br>
-"@react-native-community/netinfo": "6.0.2",<br>
-"expo-permissions": "~13.0.3",<br>
-"expo-image-picker": "~11.0.3",<br>
-"expo-location": "~13.0.4",<br>
-"react-native-maps": "0.28.1"<br>

## Set up
CLI tool called Expo was used to run, develop and test this React Native project. Before installing expo-cli, make sure that you have the latest LTS Node version installed or upgrade it to the latest one if needed. To create a new project and start running Expo, yo'll need to install Expo CLI. To do so, open up your terminal and type in: <br>
<i>npm install expo-cli --global</i> <br>
Next, you'll need the Expo app installed on your phone to run the project.<br>
Create a new project by entering: <br>
<i>expo init hello-world</i><br>

## Running the app
To run the app, use "expo start" or "npm start" in your termial.

## Features and Requirements

## User Stories
- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
- As a user, I want to be able to send messages to my friends and family memebers to exchange the latest news.
- As a user, I want to send images to my friends to show them what I'm currently doing.
- As a user, I want to share my location  with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any time.
- As a user with a visual impairement, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

## Key Features
- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat must provide users with two additional communication features: sending images and location data.
- Data gets stored online and offline.

## Technical Requirements
- The app is written in React Native.
- The app is developed using Expo.
- Chat conversations are stored in Google Firestore Database.
- The app authenticates users anonymously via Google Firebase authentication.
- Chat conversations are store locally.
- The app lets users pick and send images from the phone's image library.
- The app lets users take pictures with the devices's camera app and send them.
- The app stores images in Firebase Cloud Storage.
- The app is able to read the user's location data.
- Location data must be sent via the chat in a map view.
- The chat interface and functionality is created using the Gifted Chat library.
- The app's codebase contains comments.

## Design Specifications
- Vertical and horizontal spacing: evenly distributed.
- App title: font size 45, font weight 600, font color #FFFFFF.
- "Your name": font size 16, font weight 300, font color #757083, 50% opacity.
- "Choose background color": font size 16, font weight 300, font color #757083, 100% opacity.
- Color options HEX codes: #090C08, #474056, #8A95A5, #B9C6AE
- Start chatting button: font size 16, font weight 600, font color #FFFFFF, button color #757083
