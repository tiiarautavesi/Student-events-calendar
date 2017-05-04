$(function() {
    console.log( "ready!" );
    
    /* 1) Get today's date for comparing times of events*/
    
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    var output = (day<10 ? '0' : '') + day + '.' + (month<10 ? '0' : '') + month + '.' + d.getFullYear();

    $('#date').append(output);
    
    /* Print stuff */
    
    function addEvents(location) {
        var obj, dbParam, xmlhttp, myObj, x, txt = "";
        var kuva1 = ""; 
        obj = { "table":"name", "limit":20 };
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myObj = JSON.parse(this.responseText);
                for (x in myObj) {
                    
                    if(location) {
                       if(location == myObj[x].city) {
                          txt += '<div class="kiva viiva">' + myObj[x].name+"<br>"+myObj[x].date+" "+myObj[x].month+" - "+myObj[x].time+"<br>"+myObj[x].location+", "+myObj[x].city+'<br><br><a href="' + myObj[x].link + '" class="ikonit"><img src="img/fb.jpg"></a><a href="' + myObj[x].link + '" class="ikonit"><img src="img/bailataan.png"></a></div>';
                          kuva1 += '<div class="kiva"><img src="' +myObj[x].kuvatus+ '"></div>';
                       } 
                    } else {
                      txt += '<div class="kiva viiva">' + myObj[x].name+"<br>"+myObj[x].date+" "+myObj[x].month+" - "+myObj[x].time+"<br>"+myObj[x].location+", "+myObj[x].city+'<br><br><a href="' + myObj[x].link + '" class="ikonit"><img src="img/fb.jpg"></a><a href="' + myObj[x].link + '" class="ikonit"><img src="img/bailataan.png"></a></div>';
                    kuva1 += '<div class="kiva"><img src="' +myObj[x].kuvatus+ '"></div>';   
                    }
                    
                    
                   
                }
                document.getElementById("kuvaa").innerHTML = kuva1;
                document.getElementById("events").innerHTML = txt;
            }
        };

        xmlhttp.open("POST", "tapahtumat.json", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
    };

    $('#myCity').change(function() {
        var id2 = $(this).children(":selected").attr("id");
        console.log(id2);
        getEvents(id2);
    });

    function getEvents(location) {
        $('#kuvaa').empty();
        $('#events').empty();
        console.log(location);
        //console.log(myObj.city);
        addEvents(location);
        /*if (myObj.city.includes(location)) {
                console.log("SISÄLTYY");
                } */
    }

    addEvents();
    
    /* 2) Get area*/
    
    
    /* 3) Get extra options*/
    /* 4) Get the data????*/
    /* 5) Run program to display at #events */
});