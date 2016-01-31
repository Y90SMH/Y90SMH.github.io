"use strict";

function fetchJSONFile(path,callback){var httpRequest=new XMLHttpRequest();httpRequest.onreadystatechange=function(){if(httpRequest.readyState===4){if(httpRequest.status===200){var data=JSON.parse(httpRequest.responseText);if(callback)callback(data);}}};httpRequest.open('GET',path);httpRequest.send();}

fetchJSONFile('https://api.github.com/users/Y90SMH/repos', function(data){
    // do something with your data
    console.log(data);
    
    for (var i =0; i < data.length; i++) {
        console.log(data[i].name);
    }
});