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
  answerImg.className = "answerImg";

  answerImg.src = img;
  answerImg.alt = `magic 8 ball img`;
  answerImg.style.opacity = 0;
  answerImg.style.transition = "opacity 3s ease";

  document.querySelector(".answers").appendChild(answerImg);
  setTimeout(() => {
    document.querySelector(".answerImg").style.opacity = 1;
  }, 1);
  //   Because changes to the document are batched and performed all at the same time we need to use a
  //   setTimeout here so the opacity doesnt change to 1 till after the image has been written to the document.
  //   Not at the same time.
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
