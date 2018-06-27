var venueLocation = [];

$(document).ready(function() {

  // Event Handler to pull the event API when clicking the submit button
$("#submit").on("click", function() {
event.preventDefault();

      //Creating a variable that holds the city and then get the value entered
      var cityAjax = $("#userCity").val().trim();
          //console.log(cityAjax);
      // Creating a variable that holds the datetime and then get the value enetered
      var startDateTimeAjax = $("#userDate").val().trim() + "T12:00:00Z";
          //console.log(startDateTimeAjax);

      // Creating the callback queryURL based on the parameters eneterd
      var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&startDateTime=" + startDateTimeAjax +
                      "&city=" + cityAjax + "&apikey=tb4GUiGrLAFXaXdMFqqWdf1IMN71PGCa";


      // Creating the Ajax call for the API ticketmaster
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(tmResponse) {
        // empty the result so each time it loads with new results and not putting them over each other
        $("#beer-results-div").empty();
        console.log(tmResponse);
        // creating a variable that holds the events
        var results = tmResponse._embedded.events ;

        // looping over the results
        for (var i = 0; i < results.length; i++) {
          var eventName = results[i].name ;
          var venueArray = results[i]._embedded.venues;
          var urlLink = results[i].url ;
          console.log(eventName);
          console.log(venueArray);
          console.log(urlLink);
}
          var ticketTable = $("<table style='width: 100%'>");
          ticketTable.attr("id","ticket-table");

          var tr = $("<tr>");

          var th1 = $("<th>"); th1.text("Event"); tr.append(th1);
          var th2 = $("<th>"); th2.text("Venue Name"); tr.append(th2);
          var th3 = $("<th>"); th3.text("Get your tickets"); tr.append(th3);

          var tr2 = $("<tr>");
          var td1 = $("<td>"); td1.text(eventName); tr2.append(td1);
          var td2 = $("<td>"); td2.text(venueArray); tr2.append(td2);
          var td3 = $("<td>"); td3.text(urlLink); tr2.append(td3);

          ticketTable.append(tr);
          ticketTable.append(tr2);
          $("#results-div").append(ticketTable);


      });
    });
  });
