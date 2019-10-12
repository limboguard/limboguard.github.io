var mainApp = {};
var userName = {};
(function(){
    var firebase = app_fireBase;
var uid= null;
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid =user.uid;
      var un = user.getUserName;
      document.getElementById("user_name").innerHTML = un;

      var user = firebase.auth().currentUser;

      if(user != null){

        var un = user.getUserName;
        document.getElementById("user_name").innerHTML = un;
  
      }
    }
    else{
      // redirect to login page
        uid = null;
        userName = user.userName;
        window.location.replace("login2.html")  
    }

  });

  function logOut() 
    {
    firebase.auth.logOut();
    }

    mainApp.logOut = logOut;

})()
