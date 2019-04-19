
            
// let varriables = {
//  txt: "hi, i'm Sydney and i'm a web developer.",
//  speed: 120,
//  txt2: "I'm happy to meet you",
//  contentBox: document.getElementById("contentBox"),
//  blueButton: document.createElement('div'),
//  buttonMake: function(){
//     this.contentBox.appendChild(this.blueButton);
//     this.blueButton.setAttribute('type', 'button');
//     this.blueButton.setAttribute('class', 'button');
//     this.blueButton.setAttribute('value', 'A');   
//  }
// }

// // let i = 0 
// // function writeLoop() {
// //     if ( i < varriables.txt.length){ 
// //         document.getElementById("contentBox").innerHTML += varriables.txt.charAt(i);
// //             i++;
// //             setTimeout(writeLoop, varriables.speed);
// //             if (i == 34) {
// //          setTimeout(varriables.buttonMake(), 5500);
//  //          clearTimeout(); }
// //           }
// // }
// // writeLoop();   
    
//  function typeGreetings() {
//      varriables.blueButton.removeAttribute("class");
//      //varriables.contentBox.removeChild(varriables.blueButton);
//       varriables.contentBox.innerHTML= "";
//       console.log("click worked")
//         }

// //    if (o < varriables.txt2.length){ 
// //        contentBox.innerHTML += varriables.txt2.charAt(o);
// //        o++;
// //        setTimeout(typeGreetings, varriables.speed)
// //       if (i == varriables.txt2.length) {
// //         setTimeout(varriables.buttonMake(), 5500); }
// //        };  
// //     };
  
 
// // varriables.blueButton.onclick =  typeGreetings;
//   document.onclick = typeGreetings();


// /////////////////////
//   let  i = 0;
//   var contentBox =  document.getElementById("contentBox");
  
  
//   function buttonAppear() {
//     let button = document.createElement('input');
//      button.setAttribute('type', 'button');
//      button.setAttribute('class', 'button');
//      button.setAttribute('value', 'A');
//     contentBox.appendChild(button) ;    
//   };
                
   
//   function typeHi() {
//   var txt = "hi, i'm Sydney and i'm a web developer.";
//   var speed = 120; 
//   let txt2 = "I'm happy to meet you";
         
//    function LoopHi () {  
//      if ( i < txt.length) { 
//   document.getElementById("contentBox").innerHTML += txt.charAt(i);
//       i++;
//       setTimeout(typeHi, speed);
//        if (i == 34) {
//    setTimeout(buttonAppear(), 5500); }
//        }
//    }
//    LoopHi();
    
//     var o = 0; 
//    function typeGreetings () {
//      let p = 0;
//      if (p == 0) { 
//        document.removeChild('button');
//        contentBox.innerHTML= "";
//          }
  
//      if (o < txt2.length){ 
//         contentBox.innerHTML += txt2.charAt(o);
//         o++;
//         setTimeout(typeGreetings, speed)
//        if (i == txt2.length) {
//          setTimeout(buttonAppear(), 5500); }
//         };  
//    };
    
   
//     button.onclick =  typeGreetings ();
    
//    button();
//   };
  
//   typeHi();



let  i = 0;
let buttonID;   // = document.getElementById("theButton");
var contentBox =  document.getElementById("contentBox");
let letThereBeButton;
let txt2 = "I'm happy to meet you";

function buttonAppear() {
  let button = document.createElement('input');
  buttonID = document.getElementById('button2');
   button.setAttribute('type', 'button');
   button.setAttribute('class', 'button');
   button.setAttribute('id', 'button2')
   button.setAttribute('value', 'A');
   contentBox.appendChild(button);   

};

// function buttonAppear(){
// buttonID.style.opacity= "1" ;

// }
            

 
 function LoopHi () {  
  const txt = "hi, i'm Sydney and i'm a web developer.";
   if ( i < txt.length) { 
    document.getElementById("contentBox").innerHTML += txt.charAt(i);
    i++;
    setTimeout(LoopHi ,120);
     if (i == 34) {
    setTimeout(buttonAppear(), 5500);  
        }
     }
 } 
 LoopHi();
   


var o = 0; 

function typeGreetings () {
   contentBox.innerHTML= "";   
  console.log('button clicked');
 if (o < txt2.length){ 
    contentBox.innerHTML += txt2.charAt(o);
    o++;
    setTimeout(typeGreetings, 120)
   if (o == txt2.length) {
     setTimeout(buttonAppear(), 5500); }
    };  
};



document.addEventListener('click', function  (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('#button2')) return;
  // Don't follow the link
  event.preventDefault();
  typeGreetings();
  // Log the clicked element in the console
  console.log(event.target)
}, false);



