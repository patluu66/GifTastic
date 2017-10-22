var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];


function getRatingAndImage(response) {
  console.log(response.data);
  // console.log(response.data[0].rating);
  // console.log(response.data[1].url);
  // console.log(response.data[1].images.downsized.url);
  // $(".movies-view").html("");

  var movieDiv = $('<div clase="picItem">');
  // var image = $("<img>").attr("src", response.data[1].images.downsized.url);
  // $(".picItem").html("");

  for(var i = 0; i < 10; i++) {
    var imageClass = "moveImage" + i;
    var image = $("<img>").attr("src", response.data[i].images.downsized_still.url).addClass(imageClass);
    var pRating = $("<p>").text("Rating: " + response.data[i].rating);

    movieDiv.append(pRating);
    movieDiv.append(image);

    $("#movies-view").prepend(movieDiv);

  }

  $(".moveImage0").on("click", function() {
    $(".moveImage0").attr("src", response.data[0].images.downsized_medium.url);
     delayButtonAlert = setTimeout(function() {
      $(".moveImage0").attr("src", response.data[0].images.downsized_still.url);
      }, 3000);
  });

  $(".moveImage1").on("click", function() {
    $(".moveImage1").attr("src", response.data[1].images.downsized_medium.url);
    delayButtonAlert = setTimeout(function() {
      $(".moveImage1").attr("src", response.data[1].images.downsized_still.url);
    }, 3000);
  });

  $(".moveImage2").on("click", function() {
    $(".moveImage2").attr("src", response.data[2].images.downsized_medium.url);
    delayButtonAlert = setTimeout(function() {
      $(".moveImage2").attr("src", response.data[2].images.downsized_still.url);
    }, 3000);
  });


  $(".moveImage3").on("click", function() {
    $(".moveImage3").attr("src", response.data[3].images.downsized_medium.url);
    delayButtonAlert = setTimeout(function() {
      $(".moveImage3").attr("src", response.data[3].images.downsized_still.url);
    }, 3000);
  });


  $(".moveImage4").on("click", function() {
    $(".moveImage4").attr("src", response.data[4].images.downsized_medium.url);
    delayButtonAlert = setTimeout(function() {
      $(".moveImage4").attr("src", response.data[4].images.downsized_still.url);
    }, 3000);
  });

  $(".moveImage5").on("click", function() {
      $(".moveImage5").attr("src", response.data[5].images.downsized_medium.url);
      delayButtonAlert = setTimeout(function() {
        $(".moveImage5").attr("src", response.data[5].images.downsized_still.url);
      }, 3000);
  });

  $(".moveImage6").on("click", function() {
      $(".moveImage6").attr("src", response.data[6].images.downsized_medium.url);
      delayButtonAlert = setTimeout(function() {
        $(".moveImage6").attr("src", response.data[6].images.downsized_still.url);
      }, 3000);
  });

  $(".moveImage7").on("click", function() {
      $(".moveImage7").attr("src", response.data[7].images.downsized_medium.url);
      delayButtonAlert = setTimeout(function() {
        $(".moveImage7").attr("src", response.data[7].images.downsized_still.url);
      }, 3000);
  });


  $(".moveImage8").on("click", function() {
      $(".moveImage8").attr("src", response.data[8].images.downsized_medium.url);
      delayButtonAlert = setTimeout(function() {
        $(".moveImage8").attr("src", response.data[8].images.downsized_still.url);
      }, 3000);
  });


  $(".moveImage9").on("click", function() {
      $(".moveImage9").attr("src", response.data[9].images.downsized_medium.url);
      delayButtonAlert = setTimeout(function() {
        $(".moveImage9").attr("src", response.data[9].images.downsized_still.url);
      }, 3000);
  });

}

function displayMovieInfo() {

  //giphy key: e2Gr1UNreiRIvSKY4BuytFylYN08EWbq
  // var movie = $(this).attr("data-name");
  // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

  var movie = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=e2Gr1UNreiRIvSKY4BuytFylYN08EWbq";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    getRatingAndImage(response);


  });
}


function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < movies.length; i++) {
    var a = $("<button>");
    a.addClass("movie");
    a.attr("data-name", movies[i]);
    a.text(movies[i]);
    $("#buttons-view").append(a);
  }

}

function addButton() {
  $("#add-movie").on("click", function(event) {
    event.preventDefault();

    var movie = $("#movie-input").val().trim();

    movies.push(movie);

    renderButtons();
  });


  $(document).on("click", ".movie", displayMovieInfo)
}


addButton();
renderButtons();










