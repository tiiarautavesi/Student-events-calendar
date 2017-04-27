$(function() {
    console.log( "ready!" );
    
    /* 1) Get today's date for comparing times of events*/
    
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    var output = (day<10 ? '0' : '') + day + '.' + (month<10 ? '0' : '') + month + '.' + d.getFullYear();

    $('#date').append(output);
    
    /* 2) Get area*/
    
    function getTheatres() {
        $.ajax({
            'url': '',
            'dataType': 'html',
            'success': onGetLocation
        });
    }

    function onGetLocation(html) {
        document.getElementById("myCity").classList.toggle("show");

        var theatres = {};

        $(xml).find('TheatreArea').each(function () {
            var id = $(this).find('ID').text();
            /* Testaus */
            console.log('ID: ' + id);
            console.log('---------------------------------------------');
            
            theatres[id] = name;

            var sijainti = {};
            teatteri.id = id;
            // TODO: addeventlistener
            $('#myDropdown').append('<option id="'+id+'">'+name+'</option>');       

        });
        console.log(theatres);
    }
    
    /* 3) Get extra options*/
    /* 4) Get the data????*/
    /* 5) Run program to display at #events */
});