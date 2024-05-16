let movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    releaseYear: 2010,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology."
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    director: "Christopher Nolan",
    releaseYear: 2008,
    description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham."
  },
  {
    id: 3,
    title: "Crouching Tiger, Hidden Dragon",
    genre: "Action",
    director: "Ang Lee",
    releaseYear: 2000,
    description: "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure."
  }
];

// Adds a new movie to the array
function addMovie(title, genre, director, releaseYear, description) {
  // Check if the movie already exists
  const movieExists = movies.some(movie => movie.title === title && movie.releaseYear === releaseYear);
  if (movieExists) {
    return "Movie already exists";
  }

  // Create a new movie item
  const movie = {
    id: movies.length + 1, // Primary key, unique id
    title: title,
    genre: genre,
    director: director,
    releaseYear: releaseYear,
    description: description
  };
  // Push the movie and add it to the movies array
  movies.push(movie);
  // Print success message
  console.log(`Movie "${title}" is added.`);
}

// Search for movies with term
function searchMovies(search) {
  // Filter the movies array 
  const foundMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(search.toLowerCase()) ||
    movie.genre.toLowerCase().includes(search.toLowerCase()) ||
    movie.director.toLowerCase().includes(search.toLowerCase())
  );
  return foundMovies.length > 0 ? foundMovies : "No movies found matching the search term";
}

// Gets the details of a movie by its ID
function getMovieDetails(id) {
  // Find the movie by id
  const movie = movies.find(movie => movie.id === id);
  return movie || "Movie does not exist";
}

// Update details
function updateMovieDetails(id, updatedDetails) {
  // Find the movie with selected ID
  const movie = movies.find(movie => movie.id === id);
  if (movie) {
    // Update movie details 
    movie.title = updatedDetails.title || movie.title;
    movie.genre = updatedDetails.genre || movie.genre;
    movie.director = updatedDetails.director || movie.director;
    movie.releaseYear = updatedDetails.releaseYear || movie.releaseYear;
    movie.description = updatedDetails.description || movie.description;
    // Return the updated movie 
    return movie;
  }
  // Return a message if it does not exist
  return "Movie does not exist";
}

// Deletes a movie by its ID
function deleteMovie(id) {
  // Find the movie in the movies array that has the specified ID
  const movieIndex = movies.findIndex(movie => movie.id === id);
  if (movieIndex !== -1) {
    // Remove the movie from the movies array
    const [deletedMovie] = movies.splice(movieIndex, 1);

    // Print message
    console.log(`Movie "${deletedMovie.title}" is deleted.`);

    // Return true to indicate that the movie was successfully deleted
    return true;
  }
  // Return a message if no movie with the specified ID is found
  return "Movie does not exist";
}

// Exporting the functions as a module
module.exports = {
  // Function to add a new movie to the array
  addMovie,

  // Function to search for movies 
  searchMovies,

  // Function to get the details of a movie by its ID
  getMovieDetails,

  // Function to update the details of a movie
  updateMovieDetails,

  // Function to delete a movie by its ID
  deleteMovie
};
