

let f=document.createElement("form");
document.body.append(f);

let heading=document.createElement("h3");
heading.innerHTML="FORM";
f.append(heading);

let FirstName=document.createElement("label");
FirstName.setAttribute("for","firstName");
FirstName.innerHTML="FirstName";
f.append(FirstName);


let input=document.createElement("input");
input.setAttribute("id","firstName");
f.append(input);

let brk=document.createElement("br");
f.append(brk);
let brk1=document.createElement("br");
f.append(brk1);

let LastName=document.createElement("label");
LastName.setAttribute("for","lastName");
LastName.innerHTML="LastName";
f.append(LastName);
let input1=document.createElement("input");
input1.setAttribute("id","lastName");
f.append(input1);

let brk2=document.createElement("br");
f.append(brk2);
let brk3=document.createElement("br");
f.append(brk3);

let Address=document.createElement("label");
Address.setAttribute("for","Address");
Address.innerHTML="Address";
f.append(Address);
let input2=document.createElement("input");
input2.setAttribute("id","Address");
f.append(input2);

let brk4=document.createElement("br");
f.append(brk4);
let brk5=document.createElement("br");
f.append(brk5);

let Pincode=document.createElement("label");
Pincode.setAttribute("for","Pincode");
Pincode.innerHTML="Pincode";
f.append(Pincode);
let input3=document.createElement("input");
input3.setAttribute("id","Pincode");
f.append(input3);
let brk6=document.createElement("br");
f.append(brk6);
let brk7=document.createElement("br");
f.append(brk7);


let State=document.createElement("label");
State.setAttribute("for","State");
State.innerHTML="State";
f.append(State);
let input4=document.createElement("input");
input4.setAttribute("id","State");
f.append(input4);

let brk8=document.createElement("br");
f.append(brk8);
let brk9=document.createElement("br");
f.append(brk9);


let Country=document.createElement("label");
Country.setAttribute("for","Country");
Country.innerHTML="Country";
f.append(Country);
let input5=document.createElement("input");
input5.setAttribute("id","Country");
f.append(input5);

let brk10=document.createElement("br");
f.append(brk10);
let brk11=document.createElement("br");
f.append(brk11);
        let Gender=document.createElement("label");
        Gender.setAttribute("for","Gender");
        Gender.innerHTML="Gender";
        f.append(Gender);

        let input6=document.createElement("input");
        input6.setAttribute("type","radio");
        input6.setAttribute("name","gender")
        input6.setAttribute("id","Gender")
        
        input6.setAttribute("value","Male")
        f.append(input6);
    
        let Male=document.createElement("label");
        Male.setAttribute("for","Male");
        Male.innerHTML="Male";
        f.append(Male);

        let input7=document.createElement("input");
        input7.setAttribute("type","radio");
        input7.setAttribute("name","gender")
        input7.setAttribute("id","Gender")
       
        input7.setAttribute("value","Female")
        f.append(input7);

        let Female=document.createElement("label");
        Female.setAttribute("for","Female");
        Female.innerHTML="Female";
        f.append(Female);

        let brk12=document.createElement("br");
f.append(brk12);
let brk13=document.createElement("br");
f.append(brk13);
let fnames=document.createElement("label");
fnames.innerHTML="Food Items";
f.append(fnames);
let input8=document.createElement("input");
input8.setAttribute("type","checkbox");
input8.setAttribute("name","food")
input8.setAttribute("id","FoodItems")
input8.setAttribute("value","Idly")
f.append(input8);

let Idly=document.createElement("label");
Idly.setAttribute("for","Idly");
Idly.innerHTML="Idly";
f.append(Idly);

let input9=document.createElement("input");
input9.setAttribute("type","checkbox");
input9.setAttribute("name","food")
input9.setAttribute("id","FoodItems")
input9.setAttribute("value","Dosa")
f.append(input9);

let Dosa=document.createElement("label");
Dosa.setAttribute("for","Dosa");
Dosa.innerHTML="Dosa";
f.append(Dosa);


let input10=document.createElement("input");
input10.setAttribute("type","checkbox");
input10.setAttribute("name","food")
input10.setAttribute("id","FoodItems")
input10.setAttribute("value","Pongal")
f.append(input10);

let Pongal=document.createElement("label");
Pongal.setAttribute("for","Pongal");
Pongal.innerHTML="Pongal";
f.append(Pongal);


let input11=document.createElement("input");
input11.setAttribute("type","checkbox");
input11.setAttribute("name","food")
input11.setAttribute("id","FoodItems")
input11.setAttribute("value","Poori")
f.append(input11);

let Poori=document.createElement("label");
Poori.setAttribute("for","Poori");
Poori.innerHTML="Poori";
f.append(Poori);

let input12=document.createElement("input");
input12.setAttribute("type","checkbox");
input12.setAttribute("name","food")
input12.setAttribute("id","FoodItems")
input12.setAttribute("value","vada")
f.append(input12);

let vada=document.createElement("label");
vada.setAttribute("for","vada");
vada.innerHTML="vada";
f.append(vada);

let brk14=document.createElement("br");
f.append(brk14);
let brk15=document.createElement("br");
f.append(brk15);



let input13=document.createElement("input");
input13.setAttribute("type","Submit");
input13.setAttribute("id","Submit1")
input13.setAttribute("value","Submit")
f.append(input13);


let tab=document.createElement("table");
tab.setAttribute("id","table");
f.append(tab);

let tabhead=document.createElement("thead");
tab.append(tabhead);
let r1=document.createElement("tr");
tabhead.append(r1);
let th1=document.createElement("th");
th1.innerHTML="First Name";
r1.append(th1);
let th2=document.createElement("th");
th2.innerHTML="Last Name";
r1.append(th2);

let th4=document.createElement("th");
th4.innerHTML="Address";
r1.append(th4);

let th5=document.createElement("th");
th5.innerHTML="Pincode";
r1.append(th5);

let th6=document.createElement("th");
th6.innerHTML="State";
r1.append(th6);

let th7=document.createElement("th");
th7.innerHTML="Country";
r1.append(th7);

let th8=document.createElement("th");
th8.innerHTML="Gender";
r1.append(th8);


let th9=document.createElement("th");
th9.setAttribute("id","FOOD")
th9.innerHTML="FoodItems";
r1.append(th9);

let tabody=document.createElement("tbody");
tab.append(tabody);


f.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const Address=document.getElementById('Address').value;
const Pincode=document.getElementById('Pincode').value;
const State=document.getElementById('State').value;
const Country=document.getElementById('Country').value;
const Gender=document.querySelector('input[name="gender"]:checked').value;
const FoodItems = [...document.querySelectorAll('input[name="food"]:checked')].map(e => e.value);

if(FoodItems.length<2)
{
alert("please select any two items");
}

const newRow = tabody.insertRow();

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
f.reset()
});

