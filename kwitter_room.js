
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
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
      console.log("Room Name:" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)'>/'"+Room_names+"</div></hr>";
      document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function redirecToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
