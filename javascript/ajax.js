var venueLocation = [];

$(document).ready(function() {

  // Event Handler to pull the event API when clicking the submit button
$("#submit").on("click", function() {
event.preventDefault();
      $(".resultShow").show();
      $(".directionShow").show();

      //Creating a variable that holds the city and then get the value entered
      var cityAjax = $("#userCity").val().trim();
console.log(cityAjax);
      // Creating a variable that holds the datetime and then get the value enetered
       var startDateTimeAjax = $("#userDate").val().trim() + "T12:00:00Z";

      console.log(startDateTimeAjax);

      // Creating the callback queryURL based on the parameters eneterd
      var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&startDateTime=" + startDateTimeAjax +  "&city=" + cityAjax
                      + "&apikey=tb4GUiGrLAFXaXdMFqqWdf1IMN71PGCa";
       console.log(queryURL);

      // Creating the Ajax call for the API ticketmaster
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response1) {
        console.log(queryURL);
        // empty the result so each time it loads with new results and not putting them over each other
        $("#results").empty();
        console.log(response1);
        // creating a variable that holds the events
        var results = response1.events;

        // looping over the results
        for (var i = 0; i < results.length; i++) {
          venueLocation.push()
          // creating a div that holds the results
          var ourDiv = $("<div>");

          // Getting the title from the ajax call then append it to the results
          var title = $("<p>");
          title.append("<b>Event Name: </b>" + results[i].title);
          ourDiv.append(title, "<hr>");

          // getting the image from the call and appending it to the results
          var image = $("<img>");
          // console.log(results[i].performers[0].image);
          image.attr("src", results[i].performers[0].image);
          // console.log(image);
          ourDiv.append(image);


          // getting the date and time from the call and appending it to the results
          var dateAndTime = $("<p>");
          dateAndTime.append("<hr>", "<b>Date & Time: </b>" + results[i].datetime_local);
          ourDiv.append(dateAndTime);


          // getting the venue name and appending it to the results
          var venueName = $("<p>");
          venueName.append("<b>Venue Name: </b>" + results[i].venue.name);
          ourDiv.append(venueName);

          var venueAddress = $("<p>");
          venueAddress.append("<b>Venue Address: </b>" + results[i].venue.address + ", " + results[i].venue.extended_address);
          ourDiv.append(venueAddress);

          // getting the prices and appending them to the results
          var pricesRange = $("<p>");
          pricesRange.append("Lowest Price: $" + results[i].stats.lowest_price, "<br>");
          pricesRange.append("average Price: $" + results[i].stats.average_price, "<br>");
          pricesRange.append("highest Price: $" + results[i].stats.highest_price);
          ourDiv.append(pricesRange);


          // getting the ticket url and appending it to the results as an embeded link in a text
          var ticketUrl = $("<p>");
          ticketUrl.append("<a href=" + "'" + results[i].url + "'" + ">" + "<b> Get Your Ticket Now! </b>" + "</a>", "<hr>");
          ourDiv.append(ticketUrl);

          // showing our results on the page
          $("#results").append(ourDiv);
        }
      });
    });
  });
