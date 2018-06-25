
// Event Handler to pull the event API when clicking the submit button
$("#submit").on("click", function () {

    $(".resultShow").show();
    $(".directionShow").show();
    event.preventDefault();
  
  
    // Creating a variable that holds the city and then get the value entered
    var cityAjax = $("#where").val();
    // Replacing spaces with dashes so the callback works proprely
    cityAjax = cityAjax.split(" ").join("-");
    // changing it to lower case
    cityAjax = cityAjax.toLowerCase();
  
  
  
    // Creating a variable that holds the datetime and then get the value enetered
    var startDateTimeAjax = $("#start").val();
    startDateTimeAjax = startDateTimeAjax.split(" ").join("-");
   startDateTimeAjax = startDateTimeAjax.toLowerCase();

    
    console.log(startDateTimeAjax);
    
    
    // var startDateTime = moment(datePicked, "MMMM DD, YYYY").format("YYYY-MM-DD");
    
  
  
  
    // Creating the callback queryURL based on the parameters eneterd
    var queryURL = "https://app.ticketmaster.com/%7Bpackage%7D/%7Bversion%7D/%7Bresource%7D.json?apikey=**{API"; + startDateTimeAjax + "&startDateTime=" + cityAjax + "&city=";
  
    // console.log(queryURL);
    // Performing the ajax request with the queryURL
  
  
    // Creating the Ajax call for the API ticketmaster
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response1) {
      console.log(queryURL);
      // empty the result so each time it loads with new results and not putting them over each other
      $("#results").empty();
  
      // creating a variable that holds the events
      var results = response1.events;
  
      // looping over the results
      for (var i = 0; i < results.length; i++) {
  
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
  