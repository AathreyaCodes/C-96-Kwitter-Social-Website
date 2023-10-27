var firebaseConfig = {
      apiKey: "AIzaSyB9xvjshUjzTusH8ErM6J15_rOdkjEbSfY",
      authDomain: "kwitter-social-media-c0fa9.firebaseapp.com",
      databaseURL: "https://kwitter-social-media-c0fa9-default-rtdb.firebaseio.com",
      projectId: "kwitter-social-media-c0fa9",
      storageBucket: "kwitter-social-media-c0fa9.appspot.com",
      messagingSenderId: "326766669415",
      appId: "1:326766669415:web:9326dd8aee7e6353d3eec2",
      measurementId: "G-PX9XG8YDB3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
   } });  }); }
getData();



