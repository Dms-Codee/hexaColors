
const hex = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"]
const btn =document.getElementById("btn");
const color = document.querySelector(".color");
$circleHover1 = document.getElementById(1);
$circleHover2 = document.getElementById(2);
$circleHover3 = document.getElementById(3);

//Al hacer click se generara de manera aleatoria el codigo 
//Hexadecimal del color a utilizar.
btn.addEventListener('click',function(){
   for(let j = 1 ; j<4; j++){
    let hexColor ='#'
       for(let i=0; i<6; i++){
           hexColor+=hex[randomNumber()];
        }
        color.textContent=hexColor;
        const circle = document.getElementById(j);
        circle.style.backgroundColor= hexColor;
        circle.textContent= hexColor;
        document.querySelector(".btn-hero").style.backgroundColor=hexColor
   }
})



$circleHover1.addEventListener('mouseenter',function(){
   document.querySelector(".btn-hero").style.backgroundColor=  $circleHover1.textContent;
});

$circleHover2.addEventListener('mouseenter',function(){
   document.querySelector(".btn-hero").style.backgroundColor=  $circleHover2.textContent;
});

$circleHover3.addEventListener('mouseenter',function(){
   document.querySelector(".btn-hero").style.backgroundColor=  $circleHover3.textContent;
});


function randomNumber(){
    return Math.floor(Math.random()* hex.length);
}