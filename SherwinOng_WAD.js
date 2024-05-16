// module.exports = {
//     // Explain what function A does
//     functionA() {
//         return 1+2;
//     },
//     // Explain what function B does
//     functionB() {
//         console.log("Hello function B");
//     },
    
// }


// Simulating a database with an array to store movie information
let movies = [];

// Adds a new movie to the collection
function addMovie(title, genre, director, releaseYear, description) {
  // Create a new movie object with a unique ID and the provided details
  const movie = {
    id: movies.length + 1,  // Unique ID for the movie
    title: title,
    genre: genre,
    director: director,
    releaseYear: releaseYear,
    description: description
  };
  // Add the new movie to the movies array
  movies.push(movie);
  // Return the added movie object
  return movie;
}

// Searches for movies by genre
function searchMoviesByGenre(genre) {
  // Filter the movies array to find movies that match the specified genre (case insensitive)
  return movies.filter(function(movie) {
    return movie.genre.toLowerCase() === genre.toLowerCase();
  });
}

// Reads the details of a movie by its ID
function readMovieDetails(id) {
  // Find the movie in the movies array that has the specified ID
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      return movies[i];
    }
  }
  // Return null if no movie with the specified ID is found
  return null;
}

// Updates the details of a movie
function updateMovieDetails(id, updatedDetails) {
  // Find the movie in the movies array that has the specified ID
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      // Update the movie's details with the provided updatedDetails
      movies[i].title = updatedDetails.title || movies[i].title;
      movies[i].genre = updatedDetails.genre || movies[i].genre;
      movies[i].director = updatedDetails.director || movies[i].director;
      movies[i].releaseYear = updatedDetails.releaseYear || movies[i].releaseYear;
      movies[i].description = updatedDetails.description || movies[i].description;
      // Return the updated movie object
      return movies[i];
    }
  }
  // Return null if no movie with the specified ID is found
  return null;
}

// Deletes a movie by its ID
function deleteMovie(id) {
  // Find the index of the movie in the movies array that has the specified ID
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      // Remove the movie from the movies array
      movies.splice(i, 1);
      // Return true to indicate that the movie was successfully deleted
      return true;
    }
  }
  // Return false if no movie with the specified ID is found
  return false;
}

// Exporting the functions as a module
module.exports = {
  // Function to add a new movie to the collection
  addMovie,

  // Function to search for movies by genre
  searchMoviesByGenre,

  // Function to read the details of a movie by its ID
  readMovieDetails,

  // Function to update the details of a movie
  updateMovieDetails,

  // Function to delete a movie by its ID
  deleteMovie
};
