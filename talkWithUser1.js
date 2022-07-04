"use scrict";

const numOfQuestions = 2; /*constant that have number of questions about films*/

const numberOfFilms = prompt('Скільки фільмів ви вже подивились?','');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private:false
};

for(let numOfMovies=0;numOfMovies<numOfQuestions;numOfMovies++)
{
    const firstQuestion = prompt(`Останній переглянутий фільм?`,``);
    const secondQuestion = prompt(`Скількі балів ви дасте цьому фільму?`,``);
    personalMovieDB.movie[firstQuestion] = secondQuestion;
}

console.log(personalMovieDB);
