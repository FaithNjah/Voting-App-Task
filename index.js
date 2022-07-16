//Variable declaration
var loginButton = document.querySelector(".btn");
loginButton.addEventListener("click", action);



// Click button function
function action(e){
e.preventDefault();

//variable declaration
const firstName = document.querySelector("#Firstname").value;

const lastName= document.querySelector("#Lastname").value;

const selectStates = document.getElementById('value').value;


//Coditionals
if(firstName == "" ){
    alert("Enter your first name name");

}else if(lastName == ""){
    alert("Enter your last name");

}else if(selectStates == "" ){
    alert("Select your state");
}
else{
    alert("Welcome " + firstName)
    document.location.href = "/votingapp.html";
}

}

// Change background Color of button using mouseover
loginButton.addEventListener('mouseover', function handleMouseOver() {
    loginButton.style.backgroundColor = 'darkBlue';
    loginButton.style.color = 'white';
 
   });
   
   //  Change backgroundColor of button back using mouseout
   loginButton.addEventListener('mouseout', function handleMouseOut() {
     loginButton.style.backgroundColor = '#34495e';
     loginButton.style.color = 'black';
   });


   // function for select state
function update() {
    var select = document.getElementById('language');
    var option = select.options[select.selectedIndex];
    document.getElementById('value').value = option.value;
}
update();