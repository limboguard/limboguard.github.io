var mainApp = {};
var userName = {};
(function(){
    var firebase = app_fireBase;
    const btnLogin = document.getElementById('signIn');
    const btnLogout = document.getElementById('logOut');
    console.log(btnLogin.innerHTML);
    console.log(btnLogout.innerHTML);

    var uid= null;
    btnLogout.classList.add('hide');
    //Add logout event
    btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();

    });



    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
      btnLogout.classList.remove('hide');
      btnLogin.classList.add('hide');
      document.getElementById('userName').innerHTML = 'Hi ' + user.displayName;
      document.getElementById('signIn').innerHTML = '';
      document.getElementById('logOut').innerHTML = 'SIGN OUT';
      uid =user.uid;

      var user = firebase.auth().currentUser;
    }
    else{
      // redirect to login page
        uid = null;
        console.log('not logged in');
        btnLogout.classList.add('hide');
        btnLogin.classList.remove('hide');
        document.getElementById('userName').innerHTML = '';
        document.getElementById('signIn').innerHTML = 'SIGN IN';
        document.getElementById('logOut').innerHTML = '';
       // window.location.replace("login.html")  
    }

  });

  function logOut() 
    {
    firebase.auth.logOut();
    }

    mainApp.logOut = logOut;

})()
