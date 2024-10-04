let userHand = document.querySelector(".userHand"),
  aiHand = document.querySelector(".aiHand"),
  result = document.querySelector(".result"),
  scoreUser = document.querySelector(".userScore"),
  scoreAi = document.querySelector(".aiScore"),
  userScore = 0,
  aiScore = 0;
for (let i = 0; i <= 2; i++) {
  let item = document.querySelectorAll(".item")[i];
  item.addEventListener("click", () => {
    userHand.classList.add("userShake");
    aiHand.classList.add("aishake");
    setTimeout(() => {
      user = item.classList[1];
      userHand.setAttribute(`src`, `images/${user}.png`);
      random = Math.floor(Math.random() * 3);
      ai = random == 0 ? "rock" : random == 1 ? "paper" : "scissor";
      aiHand.setAttribute(`src`, `images/${ai}.png`);
      if (user == ai) {
        draw();
      } else if (
        (user == "rock" && ai == "scissor") ||
        (user == "scissor" && ai == "paper") ||
        (user == "paper" && ai == "rock")
      ) {
        userwon();
      } else if (
        (user == "rock" && ai == "paper") ||
        (user == "scissor" && ai == "rock") ||
        (user == "paper" && ai == "scissor")
      ) {
        aiwon();
      }
      userHand.classList.remove("userShake");
      aiHand.classList.remove("aishake");
    }, 1500);
  });
}
function draw() {
  result.innerHTML = "DRAW";
}
function userwon() {
  result.innerHTML = "YOU WON";
  userScore++;
  scoreUser.innerHTML = userScore;
}
function aiwon() {
  result.innerHTML = "AI WON";
  aiScore++;
  scoreAi.innerHTML = aiScore;
}
