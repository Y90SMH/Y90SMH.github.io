"use strict";

function fetchJSONFile(path,callback){var httpRequest=new XMLHttpRequest();httpRequest.onreadystatechange=function(){if(httpRequest.readyState===4){if(httpRequest.status===200){var data=JSON.parse(httpRequest.responseText);if(callback)callback(data);}}};httpRequest.open('GET',path);httpRequest.send();}

fetchJSONFile('https://api.github.com/users/Y90SMH/repos', function(data){
    // do something with your data
    console.log(data);
    
    for (var i =0; i < data.length; i++) {
        // Create a
        var a = document.createElement("a");
        a.href = data[i].html_url;
        a.innerText = data[i].name;
        
        // Create li
        var li = document.createElement("li");
        li.appendChild(a);
        
        // Add to Repository ul
        document.getElementById('repositories').appendChild(li);
    }
});