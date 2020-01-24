window.dataLayer.forEach(function(event) {
  var newEvent = document.createElement("li");
  newEvent.innerHTML =
    '<div class="info"><h2 class="title">' +
    event.short_description.fi +
    '</h2><p class= "desc">' +
    event.description.fi +
    "</p></div>";

  document.getElementById("event-list").appendChild(newEvent);
});

var helsinkiAirportDepature=[
    {
    airline: 'finair',
    departure: '14:00',
    destination: 'spain'



    }, 
    
    {
        

    }, 
    
    {


    }

    helsinkiAirportDepature.forEach(function(flight){
        var newFlight=document.createElement('li');
    })









]