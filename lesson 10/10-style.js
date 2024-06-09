// console.log(
//   document.querySelector(".js-button").classList.contains("js-button")
// );
function clicked(selector) {
  let element = document.querySelector(selector);
  //   let musicbtn = document.querySelector(".music-toggle");
  //   let techbtn = document.querySelector(".tech-toggle");

  if (!element.classList.contains("two")) {
    turnoff();
    classList.add("two");
  } else {
    classList.remove("two");
  }
}

function turnoff() {
  const previousButton = document.querySelector(".two");
  if (previousButton) {
    previousButton.classList.remove("two");
  }
}
