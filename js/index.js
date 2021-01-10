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