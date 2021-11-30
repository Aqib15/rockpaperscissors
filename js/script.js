$(".play").click(function(){  
   let input = $(".input").val();     
   $(".userChoice").text(input)
  let computerNumber = Math.ceil(Math.random()*3)
   $(".computerChoice").text(computerNumber)
});

