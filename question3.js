//Print the following details name, capital, flag, using forEach function
const XMLHttpRequest = require("xhr2");
const xhr=new XMLHttpRequest();
xhr.open('GET',"https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function() {
    let obj=JSON.parse(xhr.response);
    obj.forEach(element => {
        console.log(element.names);
        console.log(element.capital);
        console.log(element.flag);
    });
}
