(function() {
    var output = document.getElementById("data");
    var config = {
      apiKey: "AIzaSyB4j2Zu5u4-clQSb37iuHCUwdtCG9TCQBM",
      authDomain: "t-source.firebaseapp.com",
      databaseURL: "https://t-source.firebaseio.com",
      storageBucket: "t-source.appspot.com",
    };
    firebase.initializeApp(config);

//     var ref = firebase.database().ref();
//     ref.on("value", function(snapshot) {

//         output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
//     });
// })();


        var userDataRef = firebase.database().ref("user-data").orderByKey();
        userDataRef.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();              

          var firstname_val = childSnapshot.val().firstname;
          var size_val = childSnapshot.val().jerseysize;
          var lastname_val = childSnapshot.val().lastname;
          var jerseyname_val = childSnapshot.val().nameonjersey;
          var jerseynumber_val = childSnapshot.val().numberonjersey;

          output.innerHTML += ("<h4>Name:" + firstname_val + " " + lastname_val + "<p>Name on Jersey: " + jerseyname_val + "<p>Jersey Size: " + size_val + "<p>Jersey Number: " + jerseynumber_val+ "</p><br>");

     });
   });
})();
