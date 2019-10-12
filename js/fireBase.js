var app_fireBase = {};

(function(){
var firebaseConfig = {
    apiKey: "AIzaSyA46Ypupmt9fj5O5jzXZI3ZX5M4VpHoKAY",
    authDomain: "grow-coder.firebaseapp.com",
    databaseURL: "https://grow-coder.firebaseio.com",
    projectId: "grow-coder",
    storageBucket: "grow-coder.appspot.com",
    messagingSenderId: "1069944457581",
    appId: "1:1069944457581:web:031e0b7c4e55974382b264",
    measurementId: "G-Q8XLS6K0DY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_fireBase = firebase;
})()