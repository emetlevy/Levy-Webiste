
// Function to increase image size



var action = 1;

$("input").on("click", viewSomething);
  images = document.getElementsByClassName(".image");
 
function resizeImage(img){

  if ( action == 1 ) {
    img.style.transform = "scale(2)";
    img.style.transition =
      "transform 0.25s ease";
    img.style.zIndex = "1000";
    img.style.position="fixed";
    img.style.left= "center";
    action=2;
  }
else{

  img.style.transform = "scale(1)";
  img.style.transition ="transform 0.25s ease";
  img.style.zIndex = "0";
  img.style.position="initial";
  img.style.padding=""
  action=1;
  
  
  let myElement = document.querySelector('.home');
}
$("#mainContent").toggle();
  }



