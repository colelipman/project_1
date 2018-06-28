$(document).ready(function() {

  $("#submit").on("click", function() {
    event.preventDefault();

var beerCity = $("#userCity").val().trim();
var beerKey = "3a7c1ef8f44a55116b5152dcb81665fa" ;
var beerQueryURL = "http://beermapping.com/webservice/loccity/ "
                    + beerKey + "/" + beerCity + "&s=json" ;
//console.log(beerCity);

/////// Beer AJAX ///////
$.ajax({
  url: beerQueryURL,
  method: "GET"
}).then(function(beerResponse) {
  // empty the result so each time it loads with new results and not putting them over each other
  $("#beer-table").empty();
  console.log(beerResponse);
  var beerPlaces = beerResponse.slice(0,5);
  console.log(beerPlaces);

  // looping over the results
  for (var i = 0; i < beerPlaces.length; i++) {
    var barName = beerPlaces[i].name ;
    var phone = beerPlaces[i].phone ;
    var address = beerPlaces[i].street + " " + beerPlaces[i].state + " " + beerPlaces[i].zip ;
    console.log(barName);
    console.log(address);

    $("#beer-table").append("<tr><td>" + barName + "</td><td>" + address + "</td><td>" + phone + "</td></tr>");

    };

    });
  });
});
