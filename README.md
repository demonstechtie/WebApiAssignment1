# MoviesFinder Module

This `Moviefinder` module provides functionalities to manage movie data for businesses. The module allows users to add, update, delete, search for, and retrieve details of movies within a simulated database.

## Setting up the node module

1. Clone the repository to your local directory.
2. Create a new file named `app.js` and insert the code below:
    ```javascript
    const movieManager = require("./SherwinOng_WAD.js");
    ```
3. To run the module, open a new terminal and enter the following command:
    ```bash
    node app.js
    ```

## How to use the Functions

`addMovie(title, genre, director, releaseYear, description)`: This function allows the user to add a new movie to the database. The **required parameters** are `title`, `genre`, `director`, `releaseYear`, and `description`.

`searchMovies(search)`: This function takes in one parameter, `search`, allowing the user to input the title, genre, or director of a movie to search for matching movies.

`getMovieDetails(id)`: This function takes in one parameter, `id`, allowing the user to retrieve the details of a movie by its **ID**.

`updateMovieDetails(id, updatedDetails)`: This function takes in two parameters: `id` representing the ID of the movie to be updated and `updatedDetails`, an object containing the fields to be updated. The fields can include `title`, `genre`, `director`, `releaseYear`, and `description`.

`deleteMovie(id)`: This function takes in one parameter, `id`, allowing the user to delete a movie by its **ID**.

## Example demonstrating how to use the functions from the module in app.js

```javascript
const movieManager = require("./MovieManager.js");

// Adds new movies to the database
movieManager.addMovie("Interstellar", "Sci-Fi", "Christopher Nolan", 2014, "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.");
movieManager.addMovie("Parasite", "Thriller", "Bong Joon Ho", 2019, "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.");

// Searches for movies
console.log("Search results:", movieManager.searchMovies("Christopher Nolan")); // Searches for movies by director
console.log("Search results:", movieManager.searchMovies("Action")); // Searches for movies by genre

// Gets details of a movie by ID
console.log("Movie details:", movieManager.getMovieDetails(1)); // Retrieves the movie with ID 1

// Updates the details of a movie
movieManager.updateMovieDetails(2, { title: "The Dark Knight Rises", releaseYear: 2012 });
console.log("Updated movie details:", movieManager.getMovieDetails(2)); // Retrieves the updated movie details

// Deletes a movie by ID
movieManager.deleteMovie(1);
console.log("Remaining movies after deletion:", movieManager.searchMovies("")); // Retrieves all movies to verify deletion
```

## Additional:
1.There are hardcoded items in the array. You can change the items in the hardcoded array.
