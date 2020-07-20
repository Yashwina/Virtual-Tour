var images = new Array();
images[0] = "https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/St.-Marks-Basilica.jpg";
images[1] = "https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Canale-Grande.jpg";
images[2] = "https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Ponte-di-Rialto.jpg";
images[3] = "https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/San-Giorgio-Maggiore.jpg";
images[4] = "https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Murano.jpg";

var locations = new Array();
locations[0] = "St. Mark's Basilica";
locations[1] = "Canale Grande";
locations[2] = "Ponte di Rialto";
locations[3] = "San Giorgio Maggiore";
locations[4] = "Murano";
var index = 0;

function showImage() {
  var img = document.getElementById("img");
  img.src = images[index];
  
  var polaroid = document.getElementById("polaroid");
  polaroid.title = locations[index];
  
  if (index < images.length -1){
   index = index + 1;
  }
  else{
    index=0;
  }
}

