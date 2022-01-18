$(".play").click(function () {
  let input = $(".input").val();
  $(".userChoice").text(input);

  let computerNumber = Math.ceil(Math.random() * 3);
  let computerChoice;
  $(".computerChoice").text(computerNumber);

  if (computerNumber === 1) {
    computerChoice = "rock";
    $(".computerChoice").text("rock");
    $(".computerImage").attr(
      "src",
      "https://cdn.glitch.me/d46cdaf2-6d54-4e61-9125-9dd9694a67ac%2Frock.jpg?v=1638918025270"
    );
  } else if (computerNumber === 2) {
    computerChoice = "paper";
    $(".computerChoice").text("paper");
    $(".computerImage").attr(
      "src",
      "https://cdn.glitch.me/d46cdaf2-6d54-4e61-9125-9dd9694a67ac%2Fpaper.png?v=1638917717175"
    );
  } else if (computerNumber === 3) {
    computerChoice = "scissor";
    $(".computerChoice").text("scissor");
    $(".computerImage").attr(
      "src",
      "https://cdn.glitch.me/d46cdaf2-6d54-4e61-9125-9dd9694a67ac%2Fscissors.png?v=1638917914812"
    );
  }

  determineWinner(input, computerChoice);
});

function determineWinner(userChoice, computerChoice) {
  if (userChoice === "rock" && computerChoice === "rock") {
    $(".result").text("Tie");
    return determineWinner;
  } else if (userChoice === "paper" && computerChoice === "paper") {
    $(".result").text("Tie");
  } else if (userChoice === "scissor" && computerChoice === "scissor") {
    $(".result").text("Tie");
  } else if (userChoice === "rock" && computerChoice === "scissor") {
    $(".result").text("User Wins!");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    $(".result").text("User Wins!");
  } else if (userChoice === "scissor" && computerChoice === "paper") {
    $(".result").text("User Wins!");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    $(".result").text("Computer Wins!");
  } else if (userChoice === "paper" && computerChoice === "scissor") {
    $(".result").text("Computer Wins!");
  } else if (userChoice === "scissor" && computerChoice === "rock") {
    $(".result").text("Computer Wins!");
  } else {
    return $(".result").text("invalid option");
  }
}
