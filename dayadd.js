var config = {
    apiKey: "AIzaSyB819GtBu2CjDJckUdDXynL7BVDl1gwdUc",
  authDomain: "effort-admin.firebaseapp.com",
  databaseURL: "https://effort-admin-default-rtdb.firebaseio.com",
  projectId: "effort-admin",
  storageBucket: "effort-admin.appspot.com",
  messagingSenderId: "967287089194",
  appId: "1:967287089194:web:09e6a5bdbcdb412e9f7b53",
  measurementId: "G-YTBDD5FBLJ"};
firebase.initializeApp(config);

var frb = firebase.auth();


var ST = firebase.database().ref('Admin').child('post');
       ST.on('value', function(snapshot) {
       var Y = (snapshot.val());
       var YX = Y-1;
       
document.getElementById("idf").value= (Y);
document.getElementById("title").value= (YX)+".html";
document.getElementById("filename").value= (YX)+".png";


});


frb.onAuthStateChanged(user => {
  if (user) {

            var Fuid = user.uid;
            Duid = "User/"+(Fuid);
			var Uduid = user.uid;
			var Ud = "User/"+(Uduid);
			var ST = firebase.database().ref(Ud).child('Name');
       ST.on('value', function(snapshot) {
       var Ys = (snapshot.val());

       

 document.getElementById("Us").value= (Ys);


});

            document.getElementById("main").style.display = "block";
            
            ////

   }
            
        else {
    // No user is signed in.

    document.getElementById("main").style.display = "block";

  }    
            
            
            });
			






const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const file = form.file.files[0];
  const fr = new FileReader();
  fr.readAsArrayBuffer(file);
  fr.onload = f => {
	  
	  
	var idfs = document.getElementById('idf').value;	
	if (idfs == "lod")
	{
		alert("Plz wait")
	}
	else{
		
		
document.getElementById("mbody").style.display = 'none';
	
document.getElementById("mbody1").style.display = 'none';
	
document.getElementById("mbody2").style.display = 'none';
		
document.getElementById("loder").style.display = 'block';		

var content = document.getElementById('content').value;
var titles = document.getElementById('title').value;
var img = document.getElementById('filename').value;
var html = "<html><body><title>"+(titles)+"</title><h2>"+(content)+"<img src='https://jsdody3g5q6ny2acakntlg-on.drv.tw/Effort-workers-file/image/"+(img)+"'></h2></body></html>";


document.getElementById('content').value = (html);

firebase.auth().onAuthStateChanged(user => {
      if (user) {
		  
		 var d = new Date();
         var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var m = months[d.getMonth()];
         var e = d.getFullYear();
         var n = d.getDate(); 
		  
	       
                var Y1 = document.getElementById("filename").value;
		var Y1f = "https://jsdody3g5q6ny2acakntlg-on.drv.tw/Effort-workers-file/image/"+(Y1);
		var Y2 = document.getElementById("titles").value;
		var Y3 = document.getElementById("content").value;
		var Y4 = document.getElementById("category").value;
		var Y5 = (m)+" "+(n)+" "+(e);
	       var uip = document.getElementById("mip").value;
		var Us = document.getElementById("Us").value;
	    var Fuid = document.getElementById("idf").value;
		var Guid = Fuid-1;
		var Tuid = "live/"+(Guid);

     firebase.database().ref(Tuid).update({
                   img : Y1f,
				   name : Y2,
				   dat : Y3,
				   id : Tuid,
				   user : Us,
				   link : Guid,
				   category : Y4,
				   like : 0,
				   comment: 0,
				   view: 0,
				   date: Y5,
	                           uip: uip,
                
       });
              firebase.database().ref("Admin").update({
             post : Guid,
  });

}



 else {
    // No user is signed in.
      var Y1 = document.getElementById("filename").value;
    var Y1f = "https://jsdody3g5q6ny2acakntlg-on.drv.tw/Effort-workers-file/image/"+(Y1);
	
      var uip = document.getElementById("mip").value;
	  var uip1 = uip.replace(/\./g, "-");
      var fuip = "Gustip/"+(uip1);
	 
  firebase.database().ref(fuip).update({
             ip: uip,
	         img: Y1f,
  });		 
	
	
	var Fuid = document.getElementById("idf").value;
		var Guid = Fuid-1;
		
	firebase.database().ref("Admin").update({
             post : Guid,
  });	

  }    


});
		
	  
    
    const url = "https://script.google.com/macros/s/AKfycbxudeqqGs78QInLQw6qKftLEYkbWJA2ijitL1eZc70AjpAk-2fVoj6xDqndEK0f9rbt/exec";  // <--- Please set the URL of Web Apps.
    
    const qs = new URLSearchParams({filename: form.filename.value || file.name, mimeType: file.type, title : form.title.value, content : form.content.value});
    fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)])})
    .then(res => res.json())
    .then(e => docall())  // <--- You can retrieve the returned value here.
    .catch(err => alert(err));
  }}
});

function docall(){

document.getElementById("loder").style.display = 'none';		
	
document.getElementById("result").style.display = 'block';

var link1 = document.getElementById("idf").value;

var link = 'https://jsdody3g5q6ny2acakntlg-on.drv.tw/Effort-workers-file/image/'+(link1)+".png";
	
document.getElementById("link").value = (link);

var tweetsh = 'https://twitter.com/intent/tweet?url=https://topexpertbd.blogspot.com/p/today-photo-gallery.html?'+(link);

window.open(tweetsh);

}


function download_txt() {

  var title = document.getElementById("dtitle").value;
  var description = document.getElementById("ddisc").value;
  var img = document.getElementById("link").value;
  var tweetlink = document.getElementById("dtweet").value;
  
  
  var html = "<html><head>"+

"<title> " +(title)+ " </title>"+

"<meta name='title' content=' " +(title)+ " '>"+
"<meta name='description' content='" +(description)+ "'>"+
"<meta property='og:type' content='website'><meta property='og:url' content='https://metatags.io/'>"+
"<meta property='og:title' content=' " +(title)+ " '>"+
"<meta property='og:description' content=' " +(description)+ " '>"+
"<meta property='og:image' content=' " +(img)+ " '></head> "+

"<body>Plz Wait .....????????????????"+
"<script> location.replace('" +(tweetlink)+ "') </script>"+ 

"</body> </html>";
  var github = document.getElementById("idf").value;
  var github1 = (github)+".html";
  var textToSave = (html);
  var hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/html,' + encodeURI(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = (github1);
  hiddenElement.click();
}

document.getElementById('test').addEventListener('click', download_txt);

function myFunction() {


  
  document.getElementById("dshare").style.display = 'block';		
	
document.getElementById("result").style.display = 'none';

var github = document.getElementById("idf").value;
  var github1 = (github)+".html";

var link = 'https://isratjahanen.github.io/today/'+(github1);

var fbshare = 'https://www.facebook.com/sharer/sharer.php?u='+(link);

  document.getElementById("fbshare").innerHTML = (link);
  
  document.getElementById("fbshare2").href = (fbshare);
}
