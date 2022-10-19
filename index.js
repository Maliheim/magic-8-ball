let inputField = document.getElementById("questionInput");
let inputBtn = document.getElementById("inputBtn");

let randomNum = () => {
  let min = 1;
  let max = 21;
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(randomNum());

let newImg = () => {
  let img = `./images/magic8ball_${randomNum()}.png`;
  let answerImg = document.createElement("img");

  answerImg.src = img;
  answerImg.alt = `magic 8 ball img`;

  document.querySelector(".answers").appendChild(answerImg);
};

inputBtn.addEventListener("click", () => {
  if (inputField.value) {
    newImg();
  } else {
    console.log("No Question");
  }
});

//// make img generated draw from random number that is generated
// TODO To do Highlight
//   Normal Comment
// * Highlighted Comment
// ? Blue Comment
// ! Red Comment
