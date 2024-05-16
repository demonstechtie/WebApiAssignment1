# Assignment 1 - Movie Service Module

This Node.js module provides a simple simulation of a movie service. It allows you to add movies, search for movies by genre, read movie details, update movie details, and delete movies.

## Setup

To set up your node module, follow these steps:

1. Clone the repository or download the `SherwinOng_WAD.js` file.
2. Ensure you have Node.js installed on your system.
3. Create a new Node.js project or use an existing one.
4. Place the `SherwinOng_WAD.js` file in your project directory.
5. Require the module in your application file (e.g., `app.js`).

## Usage

Here's how to use the module in your Node.js application:

   ```javascript
   const movieService = require('./SherwinOng_WAD.js');

   // Adding a movie
   const newMovie = movieService.addMovie('Inception', 'Sci-Fi', 'Christopher Nolan', 2010, 'A mind-bending thriller.');
   console.log('Added movie:', newMovie);

   // Searching for movies by genre
   const sciFiMovies = movieService.searchMoviesByGenre('Sci-Fi');
   console.log('Sci-Fi movies:', sciFiMovies);

   // Reading movie details
   const movieDetails = movieService.readMovieDetails(1);
   console.log('Movie details:', movieDetails);

   // Updating movie details
   const updatedMovie = movieService.updateMovieDetails(1, { title: 'Inception (Updated)' });
   console.log('Updated movie:', updatedMovie);

   // Deleting a movie
   const isDeleted = movieService.deleteMovie(1);
   console.log('Movie deleted:', isDeleted);
