
    function Movie(time, age) {
      this.time = time;
      this.age = age;
      this.price = 12;
    }

$(document).ready(function() {
  $("#movieSelect").submit(function(event) {
    event.preventDefault();

    $("#price").text("Your ticket will be $12.00");

    var userAge = parseInt($("input#age").val());
    var userTime = $('input[name=inlineRadioOptions]:checked').val();
    console.log(time)
    var selectedMovie = new Movie(userTime, userAge);
    // var kubo = new Movie(11, 16, 21, 0);
    // var jason = new Movie(11, 14, 17, 13);
    // var dontBreathe = new Movie(19, 21, "", 18);
    // console.log(starTrek)
    //
    // var times = []
    //
    //   for (var index = 1; index <= 11; index++) {
    //     var radioID = "#time" + index;
    //
    //     var checkedTime = $(radioID + ":checked").val();
    //     if ((checkedTime <= 15) && (age >= 65)) {
    //       var seniorMatineePrice = (price *= 0.7).toFixed(2)
    //       $("#price").text("Your ticket will be $" + seniorMatineePrice + ".");
    //     }
    //     else if ((checkedTime >= 15) && (age >= 65)) {
    //       var seniorPrice = (price *= 0.9).toFixed(2)
    //       $("#price").text("Your ticket will be $" + seniorPrice + ".");
    //     }
    //     else if ((checkedTime <= 15) && (age < 65)) {
    //       var matineePrice = (price *= 0.8).toFixed(2)
    //       $("#price").text("Your ticket will be $" + matineePrice + ".");
    //     }
    //     else if (((checkedTime >= 15)) && (age < 65)) {
    //       $("#price").text("Your ticket will be $" + price + ".");
    //     }
    //
    //
    //   }
    //
    //   if (($("#time10:checked")) || ($("#time11:checked")) && age < 18) {
    //     alert("You're too young to watch this movie.")
    //   }
    //


  });
});
