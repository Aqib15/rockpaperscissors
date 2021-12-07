$(".play").click(function() {
  let input = $(".input").val();
  $(".userChoice").text(input);
  
  let computerNumber = Math.ceil(Math.random() * 3);
  $(".computerChoice").text(computerNumber);
  
  if (computerNumber === 1) {
    $(".computerChoice").text("Rock");
     $(".computerImage").attr("src", 
    "https://cdn.glitch.me/d46cdaf2-6d54-4e61-9125-9dd9694a67ac%2Frock.jpg?v=1638918025270");
  }
  else if (computerNumber === 2) {
    $(".computerChoice").text("Paper");
    $(".computerImage").attr("src", 
  "https://cdn.glitch.me/d46cdaf2-6d54-4e61-9125-9dd9694a67ac%2Fpaper.png?v=1638917717175");
  }
  

else if (computerNumber === 3) {
    $(".computerChoice").text("Scissor");
     $(".computerImage").attr("src", 
  "https://cdn.glitch.me/d46cdaf2-6d54-4e61-9125-9dd9694a67ac%2Fscissors.png?v=1638917914812"); 
  }
  
  
  
  
});
