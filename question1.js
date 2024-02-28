//Get all the countries from Asia continent /region using Filter function
const XMLHttpRequest=require("xhr2");
const xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    let obj=JSON.parse(xhr.response);
    let less=obj.filter((countries)=>{
    return countries.region==="Asia";
});
console.log(less);
}

