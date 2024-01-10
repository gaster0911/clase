var firebaseConfig = {
      apiKey: "AIzaSyDk8QiJCII0yiZlyAwBU6iqPDtU19mlOJg",
      authDomain: "x-falso.firebaseapp.com",
      projectId: "x-falso",
      storageBucket: "x-falso.appspot.com",
      messagingSenderId: "340023293306",
      appId: "1:340023293306:web:96740cb314e1c87a7e12c3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
