var firebaseConfig = {
      apiKey: "AIzaSyBsRKWEuUoGv4VBWvrXngsRUgYoK_6LYZ4",
      authDomain: "kwitter-5590c.firebaseapp.com",
      databaseURL: "https://kwitter-5590c-default-rtdb.firebaseio.com",
      projectId: "kwitter-5590c",
      storageBucket: "kwitter-5590c.appspot.com",
      messagingSenderId: "1039282007925",
      appId: "1:1039282007925:web:2829936dafa36385d5ed3c"
    };

    firebase.initializeApp(firebaseConfig)
//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

     window.location="index.html"
 }


 function send(){
      msg=document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      })

 }
