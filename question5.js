//Print the country that uses US dollars as currency
const XMLHttpRequest=require("xhr2");
const xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    let obj=JSON.parse(xhr.response);
    let  currency=obj.filter((Element)=>{
        for(let key in Element.currencies){
             if(Element.currencies[key].code=="USD")
             return Element;
  }  });
    console.log(currency);
}