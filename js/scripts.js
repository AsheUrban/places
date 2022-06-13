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

let passPort = new PassPort();
let place = new Place("Paris", "Eiffel Tower", "Spring", "Too many people");
passPort.addPlace(place);

// UI Logic for PassPort --------
$(document).ready(function() {
  $("form#pass-port").submit(function(event) {
    event.preventDefault();
  // gather values from input fields
  const location = $("#location").val();
  const landmark = $("#landmark").val();
  const season = $("#season").val();
  const notes = $("#notes").val();
  // output results
  $("#output").text(PassPort(location, landmark, season, notes));
  });
});

