var myJSON, obj;

    //Storing data:
    var myObj = {
	"name": "METKAn Wiikon Wappu 2017 / METKAs Week of MayDay 2017",
	"month": "HUHTI",
	"date": "23",
    "time": "su 13:00",
	"location": "Kansalaistori",
	"city": "Helsinki",
    "kuvatus": "http://users.metropolia.fi/~tiiaraut/Student-events-calendar/img/metkanvappu.jpg"
    };
    myJSON = JSON.stringify(myObj);
    obj = JSON.parse(myJSON);
    
    document.getElementById("events").innerHTML = myObj.name+"<br>"+myObj.date+" "+myObj.month+" - "+myObj.time+"<br>"+myObj.location+", "+myObj.city;

    myObj.forEach( function(obj) {
      var img = new Image();
      img.src = obj.kuvatus;
      img.setAttribute("id", "kuva1");
      img.setAttribute("alt", "kuva");
      document.getElementById("kuvat").appendChild(img);
    });

/* http://stackoverflow.com/questions/28778048/get-image-from-json-file-using-javascript-and-display-in-html-img-tag */