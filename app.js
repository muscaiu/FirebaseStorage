(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBbSh3rx0APy-rqM8bbyQC0XuM1-s6UoWs",
    authDomain: "ionic-chat-32977.firebaseapp.com",
    databaseURL: "https://ionic-chat-32977.firebaseio.com",
    storageBucket: "ionic-chat-32977.appspot.com",
    messagingSenderId: "18119206165"
  };
  firebase.initializeApp(config);

  //Get elements
  var uploader = document.getElementById('uploader')
  var fileButton = document.getElementById('fileButton')

  //Listen for file selection
  fileButton.addEventListener('change', function(e){
    //Get file
    var file = e.target.files[0]
    
    //Create a storage ref
    var storageRef = firebase.storage().ref('sweet_gifs/' + file.name)

    //Upload file
    var task = storageRef.put(file)

    //Update progress bar
    task.on('state_changed',
      function progress(snapshot){
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        uploader.value = percentage
        //console.log(upload.value)
      },
      function error(err){

      }, 
      function complete(){
        console.log("upload OK!! check: https://console.firebase.google.com/project/ionic-chat-32977/storage/files/sweet_gifs/")
      }
    )
  })
}())