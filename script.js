let number = 0;
const h3Number = document.querySelector("h3.number");
const spanDate = document.querySelector("span.date");
const generate = () => {
  h3Number.textContent = "";
  for (let i = 0; i < 16; i++) {
    number = Math.floor(Math.random() * 10);
    h3Number.textContent += number;

    if (i === 3) {
      h3Number.textContent += " ";
    } else if (i === 7) {
      h3Number.textContent += " ";
    } else if (i === 11) {
      h3Number.textContent += " ";
    }
  }

  number = Math.floor(Math.random() * 12 + 1);

  if (number < 10) {
    spanDate.textContent = `0${number}/`;
  } else {
    spanDate.textContent = `${number}/`;
  }

  number = Math.floor(Math.random() * (30 - 24 + 1) + 24);
  spanDate.textContent += number;
};
const removeAnimation = () => {
  document.querySelector("div.generate").classList.remove("animation");
  document.querySelector(".card").classList.remove("animation");
  document.querySelector("div.generateBlock").style.display = "none";
};
const animation = () => {
  document.querySelector("div.generate").classList.toggle("animation");
  document.querySelector(".card").classList.toggle("animation");
  document.querySelector("div.generateBlock").style.display = "block";
  setTimeout(removeAnimation, 1000);
};

const start = () => {
  animation();
  setTimeout(generate, 500);
  // generate();
};
document.querySelector("div.generate").addEventListener("click", start);
