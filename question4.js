//Print the total population of countries using reduce function
const XMLHttpRequest=require("xhr2");
const xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    let obj=JSON.parse(xhr.response);
    console.log(obj.reduce((a,b)=>a+b.population,0));
};

