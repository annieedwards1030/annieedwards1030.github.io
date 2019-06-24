
var images = ["the-featured-snippet-banner-1.png", "SEO-banner.jpg", "templates.png"];
var currentPosition = 0;






$("#next").on("click", function(){

  $("#prev").attr("disabled", false);

  currentPosition += 1;

  if(currentPosition == images.length-1){
    // We are at the end
    $(this).attr("disabled", true);
  } else {
    // We haven't reached the end yet
    console.log(images[currentPosition]);
    $(this).attr("disabled", false);
  }
   $("#slide-show").attr("src","images/" +images [currentPosition]);
});


$("#prev").on("click", function(){

  $("#next").attr("disabled", false);

  currentPosition -= 1;

  if(currentPosition == 0){
    // We are at the start
    console.log(images[currentPosition]);

    $(this).attr("disabled", true);

  } else {
    // We haven't reached the start yet
    console.log(images[currentPosition]);
    $(this).attr("disabled", false);
  }
  $("#slide-show").attr("src","images/" +images[currentPosition]);
 
});

 

  