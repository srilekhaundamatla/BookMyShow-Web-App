var nooftickets1 = localStorage.getItem('nooftickets');
var taxes = localStorage.getItem('taxes');
var ticketcost = localStorage.getItem('ticketcost');

console.log(nooftickets1)
var nooftickets=document.getElementById('nooftickets');
nooftickets.innerHTML=nooftickets1;
var ticketscost=nooftickets1*ticketcost;
var totalcost=parseInt(taxes)+ticketscost;

document.getElementById('taxes').innerHTML=taxes;
document.getElementById('ticketcost').innerHTML=ticketcost;
document.getElementById('totalcost').innerHTML=totalcost;

function submitpayment(){
    alert("Tickets Booked Successfully.\n You can check the details of the booked show in the history.")
    window.location.href="Main_Frame.html";
}



   
