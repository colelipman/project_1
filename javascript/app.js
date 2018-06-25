$(document).ready(function() {

  /////////// TicketmasterThings ////////////
  function getFormData() {
    // getting data
    var userCity = $("#userCity").val().trim();
    var userDate = $("#userDate").val().trim();

    var formInput = {
      city: userCity,
      date: userDate
    };
    //var userCity = "New York City" ;
    //var userDate = "2018-06-30T12:00:00Z" ;
    console.log(userDate);
    return formInput;
  };

  var tmKey = "tb4GUiGrLAFXaXdMFqqWdf1IMN71PGCa"; ///make sure you have api key inserted
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&startDateTime=" +
    userDate + "T12:00:00Z&city=" + userCity + "&apikey=" + tmKey;

  $.ajax({
    type: "GET",
    url: queryURL,
    async: true,
    dataType: "json",
    success: function(json) {
      console.log(json);

    },
    error: function(xhr, status, err) {

    }
  });


  ////////////// Zomato Things /////////////////
});
