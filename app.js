
var movies = ["Silicon Valley", "Golden State Warrior", "Overwatch", "Game of Throne", "Badminton", "World of Warcraft", "Mr. Robot", "Trump", "Fifth Harmony"];


var getRatingAndImage = function(response) {
  console.log(response.data);
  // console.log(response.data[0].rating);

  var movieDiv = $('<div clase="picItem">');
  // var image = $("<img>").attr("src", response.data[1].images.downsized.url);

  for(var i = 0; i < 10; i++) {
    var image = $("<img>");
    image.attr("src", response.data[i].images.downsized_still.url);
    image.attr("data-still", response.data[i].images.downsized_still.url);
    image.attr("data-animate", response.data[i].images.downsized_medium.url);
    image.attr("data-state", "still");
    image.addClass("moveImage");

    var pRating = $("<p>").text("Rating: " + response.data[i].rating);

    movieDiv.append(pRating);
    movieDiv.append(image);

    $("#movies-view").html(movieDiv);   

  };

  playImage(response);

};

var playImage = function(response) {

  $(".moveImage").on("click", function() {
    var state = $(this).attr("data-state");

    if(state === "still") {
      $(this).attr("src", $(this).data("animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
    }
    
  });

};

var displayMovieInfo = function() {
  //giphy key: e2Gr1UNreiRIvSKY4BuytFylYN08EWbq
  // var movie = $(this).attr("data-name");
  // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

  $("#movies-view").empty();

  var movie = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=e2Gr1UNreiRIvSKY4BuytFylYN08EWbq";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    getRatingAndImage(response);

  });

};

var renderButtons = function() {

  $("#buttons-view").empty();

  for (var i = 0; i < movies.length; i++) {
    var a = $("<button>");
    a.addClass("movie");
    a.attr("data-name", movies[i]);
    a.text(movies[i]);
    $("#buttons-view").append(a);
  };

};

var addButton = function() {
  $("#add-movie").on("click", function(event) {
    event.preventDefault();

    var movie = $("#movie-input").val().trim();

    movies.push(movie);

    renderButtons();
  });

  $(document).on("click", ".movie", displayMovieInfo);

};

function startMovieAndSportSearch() {
  addButton();
  renderButtons();

};


startMovieAndSportSearch();







