let points = JSON.parse(localStorage.getItem("score"));

if (points === null) {
  points = {
    score: 0,
  };
}

function scoreset() {
  console.log((points.score += 1));
  document.getElementById("apple").innerHTML = `score:${points.score}`;
  let jsonfile = JSON.stringify(points);
  localStorage.setItem("score", jsonfile);
}
