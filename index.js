let inputField = document.getElementById("questionInput");
let inputBtn = document.getElementById("inputBtn");
let newBtn = document.getElementById("newBtn");
let baseImg = document.getElementById("baseImg");
let questionField = document.querySelector(".questionField");

let randomNum = () => {
  let min = 1;
  let max = 21;
  return Math.floor(Math.random() * (max - min) + min);
};

let newImg = () => {
  let img = `./images/magic8ball_${randomNum()}.png`;
  //   let answerImg = document.createElement("img");
  //   answerImg.className = "answerImg";
  document.querySelector("#baseImg").style.animation =
    "shaking 4s ease 0s 1, jumping 4s ease 0s 1";

  let answerImg = document.querySelector(".answerImg");

  answerImg.src = img;
  answerImg.alt = `magic 8 ball img`;
  answerImg.style.opacity = 0;
  answerImg.style.transition = "opacity 4s ease";

  document.querySelector(".answers").appendChild(answerImg);
  setTimeout(() => {
    document.querySelector(".answerImg").style.opacity = 1;
    document.querySelector("#baseImg").style.animation = "none";
  }, 4500);

  //   Because changes to the document are batched and performed all at the same time we need to use a
  //   setTimeout here so the opacity doesnt change to 1 till after the image has been written to the document.
  //   Not at the same time.
};

questionField.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputField.value) {
    newImg();
  } else {
    console.log("No Question");
  }
});

newBtn.addEventListener("click", () => {
  inputField.value = "";
  document.querySelector(".answerImg").style.transition = "opacity 0.5s ease";
  document.querySelector(".answerImg").style.opacity = 0;
});

// TODO || Make default img reappear after clearing inner HTML ||
//// make img generated draw from random number that is generated
// TODO To do Highlight
//   Normal Comment
// * Highlighted Comment
// ? Blue Comment
// ! Red Comment
