// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(currentMovie => currentMovie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    const spielbergsDramaMovies = moviesArray.filter(currentMovie => 
        (currentMovie.director == "Steven Spielberg" && currentMovie.genre.includes(`Drama`))
    )

    if (moviesArray.length == 0) {
        return 0
    }

    else {
        return spielbergsDramaMovies.length
    }    
        
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length == 0) {
        return 0
    }

    const moviesScores = moviesArray.map(currentMovie => 
        currentMovie.score)

    const totalSumOfScores = moviesScores.reduce (
        (accumulator, currentScore) => 
        {
            if (typeof currentScore === `number`) {
                return accumulator + currentScore;
            }

            else {
                return accumulator;
            }
        }, 0);

    return Number((totalSumOfScores / moviesScores.length).toFixed(2)) ; 
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter (
        currentMovie =>
        currentMovie.genre.includes(`Drama`)
    );

    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let newArray = [...moviesArray];

    const moviesByYear = newArray.sort(
        (movie1, movie2) =>
        movie1.year - movie2.year
    );

    const moviesByYearAndTitle = moviesByYear.sort (
        function(movie1, movie2) {
            if ((movie1.year == movie2.year) && (movie1.title < movie2.title)) {
                return -1;
            }
            else if ((movie1.year == movie2.year) && (movie1.title > movie2.title)) {
                return 1;
            }
            
            else {
                return 0;
            }
            
        }
    );

    return moviesByYearAndTitle
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let firstMovies=[];

    const moviesByTitle = moviesArray.sort (
        function(movie1, movie2) {
            if (movie1.title < movie2.title) {
                return -1;
            }
            else if (movie1.title > movie2.title) {
                return 1;
            }
            
        }
        
    );

    const onlyTitles = moviesByTitle.map (
        (currentMovie) =>
        currentMovie.title
    );

    if (onlyTitles.length >= 20) {
        for (let i = 0; i <20; i++) {
            firstMovies.push(onlyTitles[i]);
        };
        return firstMovies;
    }

    else {
        return onlyTitles;
    }

}


console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
