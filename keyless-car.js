// author : https://www.instagram.com/ahmad_irfanda_

alert("Before you go, please answer the following question");
var age = 18;
var ask = prompt("how old are you?");

if(ask>age){
    alert("Powering On. Enjoy the ride!");
}else if(ask<age){
    alert("Sorry, you're too young to drive this car");
}else{
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}