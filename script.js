console.log("Hello");

let dt = document.getElementById("dt");
let now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const day = now.getDate();
const month = now.getMonth(); 
const year = now.getFullYear();
dt.innerHTML = `<p>Current Time: ${hours}:${minutes}:${seconds} Current Date: ${day}/${month+1}/${year}</p>`;




// Events

const form = document.getElementById("form");

const result = document.getElementById("result");

const count = document.getElementById("count");

console.log(form,result,count);


let registrations = [];

form.addEventListener("submit", function(e){

    e.preventDefault();

    let sname=document.getElementById("sname").value.trim();

    let roll=document.getElementById("roll").value.trim();

    let email=document.getElementById("email").value.trim();

    let mobile=document.getElementById("mobile").value.trim();

    let year=document.getElementById("year").value.trim();

    let eventName=document.getElementById("events").value;

    let team=document.getElementById("team").value.trim();

    let size=document.getElementById("size").value.trim();

    let emailpattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(
        sname=== "" ||
        roll=== "" ||
        email=== "" ||
        mobile=== "" ||
        year=== "" ||
        eventName=== "" ||
        team=== "" ||
        size=== ""
    ){
        alert("Enter all the details");
        return;
    }

    if(mobile.length != 10){
        alert("Mobile number must be 10 digits");
        return;
    }

   
    if(!email.match(emailpattern)){
        alert("Invalid Email");
        return;
    }

   
    if(size < 2 || size > 4){
        alert("Team size must be between 2 and 4");
        return;
    }

 
    let alreadyExists = registrations.some(function(item){
        return item.roll === roll && item.event === eventName;
    });

    if(alreadyExists){
        alert("Duplicate registration not allowed");
        return;
    }

   
    registrations.push({
        sname,
        roll,
        email,
        mobile,
        year,
        event: eventName,
        team,
        size
    });

   
count.textContent = registrations.length;

   
result.innerHTML = `
<h2>Registration Successful</h2>

<p><b>Name:</b> ${sname}</p>

<p><b>Roll Number:</b> ${roll}</p>

<p><b>Email:</b> ${email}</p>

<p><b>Mobile:</b> ${mobile}</p>

<p><b>Year:</b> ${year}</p>

<p><b>Event:</b> ${eventName}</p>

<p><b>Team:</b> ${team}</p>

<p><b>Team Size:</b> ${size}</p>`;
   
form.reset();

});