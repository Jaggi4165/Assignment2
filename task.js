//---------------------------------------
        // fetch and promises
//---------------------------------------

function getJSON(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
  }
 })
 })
}
//calling the function

getJSON("./task.json").then(d=>{
 console.log(d)
 basic_details(d.details);
 basic_details1(d.details1);
	basic_details1(d.details2);
    //trainers_details(d.trainers);
})//IMG-20201206-WA0026.jpg

var title=document.querySelector(".title");

var heading = document.createElement("h1");
heading.textContent="RESUMES";
heading.setAttribute("id","title")
title.appendChild(heading);

var main=document.querySelector(".row");





function basic_details(SDC) {
// start the dynamic page content....

var card1=document.createElement("div");
card1.setAttribute("class","col-sm-6");


var img = document.createElement("img");
img.src=SDC.photo;
 card1.appendChild(img);

 var heading1 = document.createElement("h1");
heading1.textContent=SDC.name; 
heading1.setAttribute("id","heading1");
card1.appendChild(heading1);

 var age1 = document.createElement("h3");
age1.textContent="My age is : "+SDC.age;
//age.setAttribute("id","heading1");
heading1.appendChild(age1);

var button1=document.createElement("button");
var a = document.createElement('a');  
a.setAttribute("id","a-deco")
var btnname1 = document.createTextNode("VIEW RESUME"); 
a.appendChild(btnname1);
a.title="VIEW RESUME"
a.href = "profile1.html";
button1.appendChild(a);
card1.appendChild(button1);


main.appendChild(card1);
}


function basic_details1(SDC) {
//main.appendChild(document.createElement("hr"));

var card2=document.createElement("div");
card2.setAttribute("class","col-sm-6");



var img = document.createElement("img");
img.src=SDC.photo;
 card2.appendChild(img);

 var heading1 = document.createElement("h1");
heading1.textContent=SDC.name; 
heading1.setAttribute("id","heading1");
card2.appendChild(heading1);

 var age1 = document.createElement("h3");
age1.textContent="My age is : "+SDC.age;
//age.setAttribute("id","heading1");
heading1.appendChild(age1);

/*var button1 = document.createElement("button");
button1.setAttribute("id","btn1");
button1.textContent="SUBMIT";
card2.appendChild(button1);*/ //button------------------------------------------

var button2=document.createElement("button");
var a = document.createElement('a');  
a.setAttribute("id","a-deco")
var btnname = document.createTextNode("VIEW RESUME"); 
a.appendChild(btnname);
a.title="VIEW RESUME"
a.href = "profile2.html";
button2.appendChild(a);
card2.appendChild(button2);

main.appendChild(card2);
}

function basic_details2(SDC) {
//main.appendChild(document.createElement("hr"));

var card2=document.createElement("div");
card3.setAttribute("class","col-sm-6");



var img = document.createElement("img");
img.src=SDC.photo;
 card3.appendChild(img);

 var heading1 = document.createElement("h1");
heading1.textContent=SDC.name; 
heading1.setAttribute("id","heading1");
card3.appendChild(heading1);

 var age1 = document.createElement("h3");
age1.textContent="My age is : "+SDC.age;
//age.setAttribute("id","heading1");
heading1.appendChild(age1);

/*var button1 = document.createElement("button");
button1.setAttribute("id","btn1");
button1.textContent="SUBMIT";
card2.appendChild(button1);*/ //button------------------------------------------

var button3=document.createElement("button");
var a = document.createElement('a');  
a.setAttribute("id","a-deco")
var btnname = document.createTextNode("VIEW RESUME"); 
a.appendChild(btnname);
a.title="VIEW RESUME"
a.href = "profile3.html";
button3.appendChild(a);
card3.appendChild(button2);

main.appendChild(card3);
}
