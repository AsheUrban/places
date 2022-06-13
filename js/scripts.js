// Business Logic for PassPort -------
function PassPort () {
  this.places = {};
}

PassPort.prototype.addPlace = function(place) {
  this.places[place.location] = place;
};


// Business Log for Places ------
function Place (location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

let passPort = new PassPort();
let place = new Place("Paris", "Eiffel Tower", "Spring", "Too many people");
passPort.addPlace(place);