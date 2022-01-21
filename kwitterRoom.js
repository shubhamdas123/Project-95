const firebaseConfig = {
    apiKey: "AIzaSyCXMZadGVEaBoU-WeWUGc3gB4DF-BMu4Ok",
    authDomain: "kwitterproject-b9f36.firebaseapp.com",
    databaseURL: "https://kwitterproject-b9f36-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-b9f36",
    storageBucket: "kwitterproject-b9f36.appspot.com",
    messagingSenderId: "194584267905",
    appId: "1:194584267905:web:693bc0c909402b724f9180"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;
            //Start code
            console.log(roomNames);
            div = document.createElement("div");
            div.id = roomNames;
            div.innerHTML = roomNames;
            div.onclick = goToRoom;
            var hr = document.createElement("hr");
            div.appendChild(hr);
            document.getElementById("output").appendChild(div);
            //End code
        });
    });
}
getData();

function getName() {
    username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome " + username + "!";
}

function addRoom() {
    roomName = document.getElementById("roomIdInput").value;
    localStorage.setItem("roomName", roomName);
    dbRef = firebase.database().ref("/");
    dbRef.child(roomName).update({
        purpose: "addingRoom"
    })
    window.location = "kwitterPage.html";
}

function logout() {
    window.location = "index.html";
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
}

function goToRoom(e) {
    console.log(e.target.id);
    localStorage.setItem("currentRoom", e.target.id);
    window.location = "kwitterPage.html";
}