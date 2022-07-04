"use scrict";

const numOfQuestions = 2; /*constant that have number of questions about films*/
let numberOfFilms = 0;

while(true)
{
    numberOfFilms = prompt(`Скільки фільмів ви вже подивились?`,``);

    if( numberOfFilms == null || numberOfFilms.length == 0 || numberOfFilms.length >50)
    {
        console.log(`Помилка!`);
    }
    else
    {
        break;
    }
}
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
    
    if(firstQuestion!=null && secondQuestion !=null && firstQuestion!='' && secondQuestion!='' && firstQuestion.length<50)
    {
    personalMovieDB.movie[firstQuestion] = secondQuestion;
    }else{
        alert(`Помилка!`);
    }
}

if(personalMovieDB.count<10){alert(`Доволі мало фільмів переглянуто`);}
else if(personalMovieDB.count>=10 && personalMovieDB.count<=30 ){alert(`Ви типовий глядач!`);}
else if (personalMovieDB.count>30){alert(`Ви кіноман!`);}
else {alert(`Помилка!`);}

console.log(personalMovieDB);
