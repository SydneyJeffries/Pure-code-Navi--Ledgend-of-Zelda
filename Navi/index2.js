

let  i = 0;
var contentBox =  document.getElementById("contentBox");
var button = document.getElementById('theButton');

function buttonAppear() {
    var button = document.getElementById('theButton');
    button.className = "button";
   
};


function typeHi() {
var txt = "hi, i'm Sydney and i'm a web developer.";
var speed = 120; 

       
 function LoopHi () {  
   if ( i < 38) { 
document.getElementById("contentBox").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeHi, speed);
     if (i == 38) {
 setTimeout(buttonAppear(), 5500);
   }
     }
 }

 LoopHi();

};


var o = 0; 

typeHi();


button.onclick = (function(e){

    typeGreetings(e);
    function typeGreetings(e) {
        e.preventDefault();
        let txt2 = "I'm happy to meet you";  
         var speed2 = 100; 
    
          if (o < txt2.length){ 
             contentBox.innerHTML += txt2.charAt(o);
             o++;
             setTimeout(typeGreetings, speed2)
            if (i == txt2.length) {
              setTimeout(buttonAppear(), 5500); }
            }; 
          } 
    
        })();
   

    
