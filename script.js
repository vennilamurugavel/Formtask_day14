
const form = document.getElementById('data');

const tbody = document.getElementById('table');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const Address=document.getElementById('Address').value;
const Pincode=document.getElementById('Pincode').value;
const State=document.getElementById('State').value;
const Country=document.getElementById('Country').value;
const Gender=document.querySelector('input[name="gender"]:checked').value;
const FoodItems=document.querySelector('input[name="food"]:checked').value;



const newRow = tbody.insertRow();

const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3=newRow.insertCell(2);
const cell4=newRow.insertCell(3);
const cell5=newRow.insertCell(4);
const cell6=newRow.insertCell(5);
const cell7=newRow.insertCell(6);
const cell8=newRow.insertCell(7);


cell1.textContent = firstName;
cell2.textContent = lastName;
cell3.textContent=Address;
cell4.textContent=Pincode;
cell5.textContent=State;
cell6.textContent=Country;
cell7.textContent=Gender;
cell8.textContent=FoodItems;

form.reset();
});

