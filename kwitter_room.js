
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD_GAUJAU-2VzViZXjraX4pH99m6uC8znM",
      authDomain: "kwitter-90da2.firebaseapp.com",
      databaseURL: "https://kwitter-90da2-default-rtdb.firebaseio.com",
      projectId: "kwitter-90da2",
      storageBucket: "kwitter-90da2.appspot.com",
      messagingSenderId: "243618268507",
      appId: "1:243618268507:web:597cda0fcd7ab3c1a7867e"
    };
    firebase.initializeApp(firebaseConfig);  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
