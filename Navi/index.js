
            
let buttonID = document.getElementById("theButton");
let buttonID2 = document.getElementById("theButton2");
var contentBox =  document.getElementById("contentBox");
let i = 0;
let o = 0;
let j = 0;

LoopHi();

function buttonAppear() {
  document.getElementById('theButton').style.visibility = "visible";
}

function LoopHi () {
  const txt = "HEY! I'm Sydney and i'm a web developer.";
  
  if ( i < txt.length) { 
    document.getElementById("contentBox").innerHTML += txt.charAt(i);
    i++;
    setTimeout(LoopHi ,120);
  
      if (i == txt.length) {
        setTimeout(buttonAppear(), 5500);
      }
  }
};

function typeGreetings () {
  let txt = "LISTEN! I'm happy to meet you";

  if ( o < txt.length ) {
    contentBox.innerHTML += txt.charAt(o);
    o++;
    setTimeout(typeGreetings, 120)
    if (o == txt.length) {
      buttonID2.style.visibility = "hidden";
      // setTimeout(buttonAppear(), 5500); 
    }
  }
};



document.addEventListener('click', function  (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('#theButton')) return;
  // Don't follow the link
  event.preventDefault();
  contentBox.innerHTML= "";
  buttonID.style.visibility = "hidden";
  typeGreetings();
  // Log the clicked element in the console
  console.log(event.target);
}, false);

document.addEventListener('click', function  (event) {
  if (!event.target.matches('#theButton2')) return;
  event.preventDefault();
  contentBox.innerHTML= "";
  buttonID2.style.visibility = "hidden";
  
  console.log(event.target);
}, false);



