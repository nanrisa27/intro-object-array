window.dataLayer.array.forEach(function(event) {
  var newEvent = document.createElement("li");
  newEvent.innerHTML =
    '<div class="info"><h2 class="title">' +
    event.short_description.fi +
    '</h2><p class= "desc">' +
    event.dicription.description.fi +
    "</p></div>";

  document.getElementById("event-list").appendChild(newEvent);
});
