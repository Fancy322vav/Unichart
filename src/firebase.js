import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBdKMyqx8o9BSOeMECfFCQF0OQg9cEhZAI",
    authDomain: "chat-4eddf.firebaseapp.com",
    projectId: "chat-4eddf",
    storageBucket: "chat-4eddf.appspot.com",
    messagingSenderId: "700531727413",
    appId: "1:700531727413:web:79244d9b6ea4931f58257c",
  })
  .auth();
