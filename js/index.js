firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
	document.getElementById("user-div").style.display = "block";
	document.getElementById("login-div").style.display = "none";
	
  } else {
	document.getElementById("user-div").style.display = "none";
	document.getElementById("login-div").style.display = "block";
  }
});

function login(){
	
	var userEmail = document.getElementById("loginmail").value;
	var userPass = document.getElementById("loginpasswd").value;
	
	window.alert(userEmail + " " + userPass);
	
firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
	window.alert(userEmail + " " + userPass);
	window.alert("Error: " + errorMessage);
  

  // ...
	});
	
}
