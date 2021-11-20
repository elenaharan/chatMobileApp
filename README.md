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

## Running the app
To run the app, use "expo start" or "npm start" in your termial.


## Features and Requirements

### User Stories
- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
- As a user, I want to be able to send messages to my friends and family memebers to exchange the latest news.
- As a user, I want to send images to my friends to show them what I'm currently doing.
- As a user, I want to share my location  with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any time.
- As a user with a visual impairement, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

### Key Features
- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat must provide users with two additional communication features: sending images and location data.
- Data gets stored online and offline.

### Technical Requirements
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

### Design Specifications
- Vertical and horizontal spacing: evenly distributed.
- App title: font size 45, font weight 600, font color #FFFFFF.
- "Your name": font size 16, font weight 300, font color #757083, 50% opacity.
- "Choose background color": font size 16, font weight 300, font color #757083, 100% opacity.
- Color options HEX codes: #090C08, #474056, #8A95A5, #B9C6AE
- Start chatting button: font size 16, font weight 600, font color #FFFFFF, button color #757083
