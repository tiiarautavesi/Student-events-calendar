var fs = require('fs');
var path = require('path');

module.exports = function(dbFile) {
    this.dbFile = dbFile;
    this.database = [];
    this.init = function() { 
        console.log('--> init '+this.dbFile);
        var dbFilePath = path.join(__dirname, this.dbFile);
        fs.readFile(dbFilePath, 'utf8', function(err, jsonData) {
            if (err) {
                console.log('Something went wrong');
                return err;
            }
            this.database = JSON.parse(jsonData);
            //console.log(this.database);
        }.bind(this));
    };

    this.getJson = function() {
        console.log('--> getJson');
        return this.database;
    }

    // exact match
    this.fieldMatch = function(entry, fieldName, value) {
        if(value) {
            value = value.toLowerCase();
            if(entry[fieldName].toLowerCase() != value) { // ! -> negation
                return false;
            }
        }
        return true; // if value is not set or matches, return true
    };

    // contains substring
    this.fieldIncludes = function(entry, fieldName, value) {
        if(value) {
            value = value.toLowerCase();
            if(!entry[fieldName].toLowerCase().includes(value)) {
                return false; // match, return true
            }
        }
        return true; // if value is not set or matches, return true
    };
    // music, restaurants, etc
    this.fieldArrayContains = function(entry, fieldName, value) {
        var match = false;
        if(value) {
            if(!entry[fieldName]) { // if field undefined, return false
            return false;
            }
            value = value.toLowerCase();
            for(var dbValue of entry[fieldName]) {
            if(dbValue.toLowerCase().includes(value)) {
                match = true;
            }
            }
            return match;
        }
        return true; // if value is not defined, return true
    };

    this.includeEntry = function(entry, person, gender, music, tv, movies, restaurants) {
        if(!this.fieldIncludes(entry, 'name', person)) {
            return false;
        }
        if(!this.fieldMatch(entry, 'gender', gender)) {
            return false;
        }
        if(!this.fieldArrayContains(entry, 'music', music)) {
            return false;
        }
        if(!this.fieldArrayContains(entry, 'tv', tv)) {
            return false;
        }
        if(!this.fieldArrayContains(entry, 'movies', movies)) {
            return false;
        }
        if(!this.fieldArrayContains(entry, 'restaurants', restaurants)) {
            return false;
        }
        return true;
    };

    this.searchName = function(person) {
        return this.search(person, '', '', '', '', '');
    }

    this.search = function(person, gender, music, tv, movies, restaurants) {
        console.log('--> search');
        var result = [];
        for(var entry of this.database) {
            if(this.includeEntry(entry, person, gender, music, tv, movies, restaurants)) {
                result.push(entry);
            }
        }
        return result;
    };
};
