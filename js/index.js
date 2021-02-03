///////////////////////////////////////
//Writing animation 
const texts = ["Developer", "Designer", "Blogger", "Public Speaker"];
var count = 1;
var index = 0;
var currentText = " ";
var letters = "";
function type() {
  if (index === texts.length) {
    index = 0;
  }
  currentText = texts[index];
  letters = currentText.slice(0, count++);
  document.querySelector(".type").textContent = letters;

  if (count - 1 === currentText.length) {
    count = 1;
    index++;

    setTimeout(type, 1000);
  } else setTimeout(type, 250);
}

type();

///////////////////////////////////////
//Navigation

const burger = document.querySelector(".navigation-burger");
const nav = document.querySelector(".navigation");
const list = document.querySelector(".navigation-links-list");

burger.addEventListener("click", () => {
  //container slide
  nav.classList.toggle("expand");
});
list.addEventListener("click", () => {
  //container slide
  nav.classList.remove("expand");
});

document.querySelector("header").addEventListener('click', (e)=>{
  console.log(e);
  nav.classList.remove("expand");
});
document.querySelector("main").addEventListener('click', (e)=>{
  console.log(e);
  nav.classList.remove("expand");
});
document.querySelector("body").addEventListener('scroll', (e)=>{
  console.log(e);
  nav.classList.remove("expand");
});


///////////////////////////////////////
//Animations


function animate() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().y;
      console.log(positionFromTop);

      if (positionFromTop <= windowHeight / 1.3) {
        console.log(element.classList);
        if (element.classList.contains("aleft")) {
          element.classList.add("fade-in-left");
        } else if (element.classList.contains("aright")) {
          element.classList.add("fade-in-right");
        } else if (element.classList.contains("abottom")) {
          element.classList.add("fade-in-bottom");
        } else element.classList.add("fade-in-element");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
}
animate();
