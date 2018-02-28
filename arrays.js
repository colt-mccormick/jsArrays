console.log("Hello World!")

//exercise 1

var test1 = 'cat'; 
var test2 = 'racecar';
var test3 = 'bear';
var test4= 'mom'; 

var opp = test1.split("").reverse().join(""); 

if(test1 === opp){
    console.log("same: ", true); 
}else {
    console.log("same: ", false);
}

// class example


var animals = ['fish', 'dog', 'cat'];
var animalzElement = document.getElementById('animalz')
for(var i=0; i<animals.length; i++) {
    //console.log("animals: ", animals[i])
    animalzElement.innerHTML += "<h5>" + animals[i] + "</h5>";
}

//exercise #2

var book1 = "Catch 22"; 
var book2 = "Slaughterhouse 5"; 
var book3 = "Fahrenheit 451"; 

var bookSplit= book3.split(""); 
var realNumz = []; 
for(var j=0; j<bookSplit.length; j++){
    if(bookSplit[j]*)) {
        realNumz.push(bookSplit[j]); 
    }
}
console.log("answer", realNumz.join(""));