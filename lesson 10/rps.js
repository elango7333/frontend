let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  tie: 0,
};

document.querySelector(
  ".scores"
).innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Tie: ${score.tie}`;

document.querySelector(
  ".moves"
).innerHTML = `You picked ${Playermove}.Computer picked ${computermove()}`;

function computermove() {
  let randomnumber = Math.random();

  let computer = "";

  if (randomnumber >= 0 && randomnumber <= 1 / 3) {
    computer = "✊";
  } else if (randomnumber >= 1 / 3 && randomnumber <= 2 / 3) {
    computer = "🖐️";
  } else if (randomnumber >= 2 / 3 && randomnumber <= 1) {
    computer = "✌️";
  }
  return computer;
}

function gameplay(Playermove) {
  const computer = computermove();

  let result = "";
  if (Playermove === "✊") {
    if (computer === "✊") {
      result = "Tie.";
    } else if (computer === "🖐️") {
      result = "You lose!.";
    } else if (computer === "✌️") {
      result = "You Win!!.";
    }
  } else if (Playermove === "🖐️") {
    if (computer === "✊") {
      result = "You Win!!.";
    } else if (computer === "🖐️") {
      result = "Tie.";
    } else if (computer === "✌️") {
      result = "You lose!.";
    }
  } else if (Playermove === "✌️") {
    if (computer === "✊") {
      result = "You lose!.";
    } else if (computer === "🖐️") {
      result = "You Win!!.";
    } else if (computer === "✌️") {
      result = "Tie.";
    }
  }

  if (result === "You Win!!.") {
    score.wins += 1;
  } else if (result === "You lose!.") {
    score.loss += 1;
  } else if (result === "Tie.") {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(
    ".scores"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.loss}, Tie: ${score.tie}`;

  document.querySelector(
    ".moves"
  ).innerHTML = `You picked ${Playermove}.${computermove()} Computer picked `;

  //   alert(`${result} You picked ${Playermove}. computer picked ${computer}
  // Wins: ${score.wins}, Losses: ${score.loss}, Tie: ${score.tie}`);
}
