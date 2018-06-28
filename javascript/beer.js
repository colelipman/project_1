// $(document).ready(function() {
//
//   $("#submit").on("click", function() {
//     event.preventDefault();
//
// var beerCity = $("#userCity").val().trim();
// var top5Beer = beerCity.slice(0,4);
// var beerKey = "3a7c1ef8f44a55116b5152dcb81665fa" ;
// var beerQueryURL = "http://beermapping.com/webservice/loccity/ "
//                     + beerKey + "/" + top5Beer + "&s=json" ;
// var beerQueryURL2 = "http://beermapping.com/webservice/loccity/ "
//                     + beerKey + "/" + beerCity + "&s=json" ;
//
// console.log(beerCity);
//
// /////// Beer AJAX ///////
// $.ajax({
//   url: beerQueryURL2,
//   method: "GET"
// }).then(function(beerResponse) {
//   // empty the result so each time it loads with new results and not putting them over each other
//   $("#beer-results-div").empty();
//   console.log(beerResponse);
//   var beer0 = beerResponse[0];
//   var beer1 = beerResponse[1];
//   var beer2 = beerResponse[2];
//   var beer3 = beerResponse[3];
//   var beer4 = beerResponse[4];
//
//   var beerResults = beerResponse._embedded.events ;
//
//   // looping over the results
// //   for (var i = 0; i < beerResults.length; i++) {
// //     var barName = beerResults[i].name ;
// //     var venueArray = beerResults[i]._embedded.venues;
// //     var urlLink = beerResults[i].url ;
// //     console.log(eventName);
// //     console.log(venueArray);
// //     console.log(urlLink);
// // }
// //     var beerTable = $("<table style='width: 100%'>");
// //     beerTable.attr("id","beer-table");
// //
// //     var btr = $("<tr>");
// //
// //     var bth1 = $("<th>"); bth1.text("Bar"); btr.append(bth1);
// //     var bth2 = $("<th>"); bth2.text("Venue Name"); btr.append(bth2);
// //     var bth3 = $("<th>"); bth3.text("Get your tickets"); btr.append(bth3);
// //
// //     var btr2 = $("<tr>");
// //     var btd1 = $("<td>"); btd1.text(barName); tr2.append(td1);
// //     var btd2 = $("<td>"); btd2.text(venueArray); tr2.append(td2);
// //     var btd3 = $("<td>"); btd3.text(urlLink); tr2.append(td3);
// //
// //     beerTable.append(btr);
// //     beerTable.append(btr2);
// //     $("#results-div").append(ticketTable);
//
//     });
//   });
// });
