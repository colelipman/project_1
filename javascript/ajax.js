var venueLocation = [];

$(document).ready(function() {

  // Event Handler to pull the event API when clicking the submit button
$("#submit").on("click", function() {
event.preventDefault();
      $(".resultShow").show();
      $(".directionShow").show();

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
        $("#results-div").empty();
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
          // for (var j=0; j < venueArray.length; j++){
          //   var venueName
          //}

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

  // creating a div that holds the results
//           var ourDiv = $("<div>");
//
//           // Getting the title from the ajax call then append it to the results
//           var title = $("<p>");
//           title.append("<b>Event Name: </b>" + results[i].title);
//           ourDiv.append(title, "<hr>");
//           console.log(title);
//
//
//           // getting the date and time from the call and appending it to the results
//           var dateAndTime = $("<p>");
//           dateAndTime.append("<hr>", "<b>Date & Time: </b>" + results[i].datetime_local);
//           ourDiv.append(dateAndTime);
//
//
//           // getting the venue name and appending it to the results
//           var venueName = $("<p>");
//           venueName.append("<b>Venue Name: </b>" + results[i]._embedded.venues[0].name);
//           ourDiv.append(venueName); console.log(venueName);
//
//           var venueAddress = $("<p>");
//           venueAddress.append("<b>Venue Address: </b>" + results[i].venue.address + ", " + results[i].venue.extended_address);
//           ourDiv.append(venueAddress);
//
//           // getting the prices and appending them to the results
//           var pricesRange = $("<p>");
//           pricesRange.append("Lowest Price: $" + results[i].stats.lowest_price, "<br>");
//           pricesRange.append("average Price: $" + results[i].stats.average_price, "<br>");
//           pricesRange.append("highest Price: $" + results[i].stats.highest_price);
//           ourDiv.append(pricesRange);
//
//
//           // getting the ticket url and appending it to the results as an embeded link in a text
//           var ticketUrl = $("<p>");
//           ticketUrl.append("<a href=" + "'" + results[i].url + "'" + ">" + "<b> Get Your Ticket Now! </b>" + "</a>", "<hr>");
//           ourDiv.append(ticketUrl);
// console.log(ourDiv);
//           // showing our results on the page
//           $("#results-div").append(ourDiv);
