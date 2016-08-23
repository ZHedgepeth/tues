function Movie(inputTime, inputAge) {
  this.time = inputTime;
  this.age = inputAge;
  this.price = 12;
}
Movie.prototype.calculatePrice = function() {
  if ((this.time <= 15) && (this.age >= 65)) {
    this.price = (this.price *= 0.7).toFixed(2);
  }
  else if ((this.time >= 15) && (this.age >= 65)) {
    this.price = (this.price *= 0.9).toFixed(2);
  }
  else if ((this.time <= 15) && (this.age < 65)) {
    this.price = (this.price *= 0.8).toFixed(2);
  }
}

$(document).ready(function() {
  $("#movieSelect").submit(function(event) {
    event.preventDefault();

    var userAge = parseInt($("input#age").val());
    if (userAge < 18) {
      alert("You're too young to watch this movie.");
    }
    else {
      var userTime = $('input[name=inlineRadioOptions]:checked').val();
      var selectedMovie = new Movie(userTime, userAge);
      console.log(selectedMovie.price);

      selectedMovie.calculatePrice();

      $("#price").text("Your ticket will be $" + selectedMovie.price + ".");
    }
  });
});
