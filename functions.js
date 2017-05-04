// OWN EVENTS

$.get("future-events.htm", function(data) {
    var data = $(data);
    $("#upcoming").html(data);
});

// SHOW MORE / LESS EVENTS

function showFunction() {
    var x = document.getElementById('upcoming2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    var x = document.getElementById('more');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    var x = document.getElementById('less');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function showFunction2() {
    $.get("events.htm", function(data) {
    var data = $(data);
    $("#history2").html(data);
    });
}

// CALENDAR

function demoFunction() {
    var x = document.getElementById('demo-mat1');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function demoFunction2() {
    var x = document.getElementById('demo-mat2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function demoFunction3() {
    var x = document.getElementById('demo-mat3');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function demoFunction4() {
    var x = document.getElementById('demo-mat4');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

/*var fs = require('fs');
var path = require('path');

function _parseRow(row) {
    console.log(row.split('(')[0].trim());
}

function _parseList(listItems) {
    for(var row of listItems.split('</li><li>')) {
        _parseRow(row);
    }
}

function _parseHTML(html) {
    var htmlEndPart = html.split('<h2>Tapahtumat</h2><ul><li>')[1];
    var listItems = htmlEndPart.split('</li></ul>')[0];
    _parseList(listItems + '\n');
}

function _parseFile(filename) {
    var pathToFile = path.join(__dirname, filename);
    fs.readFile(pathToFile, 'utf8', function(err, html) {
        if (err) {
            console.log(err);
            return;
        }
        _parseHTML(html);
    });
};

function parseFriends(friendsFile) {
    _parseFile(friendsFile);
};

var friendsFile = 'events.htm';
parseFriends(friendsFile);
*/