// variable declaration
let nextButton = document.querySelector('.button');


// Change the button backgroundColor using mouseover
    nextButton.addEventListener('mouseover', function handleMouseOver() {
    nextButton.style.color = 'white';
 
   });
   
   //  Change the button backgroundColor back using mouseout
    nextButton.addEventListener('mouseout', function handleMouseOut() {
    nextButton.style.backgroundColor = 'darkBlue';
    nextButton.style.color = 'black';
   });


   

 

  

