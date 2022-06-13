// Business Logic for PassPort -------
function PassPort () {
  this.places = {};
}

PassPort.prototype.addPlace = function(place) {
  this.places[place.location] = place;
  return this.place;
};


// Business Logic for Places ------
function Place (location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

// UI Logic for PassPort --------
$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#location1").toggle();
    $("#hideLocation1").toggle();
  });

  $(".clickable2").click(function() {
    $("#location2").toggle();
    $("#hideLocation2").toggle();
  });

  $(".clickable3").click(function() {
    $("#location3").toggle();
    $("#hideLocation3").toggle();
  });
});



//   $("form#pass-port").submit(function(event) {
//     event.preventDefault();
//   // gather values from input fields
//   const location = $("#location").val();
//   const landmark = $("#landmark").val();
//   const season = $("#season").val();
//   const notes = $("#notes").val();
//   // output results
//   $("#output1").text(location);
//   $("#output2").text(landmark);
//   $("#output3").text(season);
//   $("#output4").text(notes);
//   });
// });

