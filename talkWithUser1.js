"use scrict";

const numOfQuestions = 2; /*constant that have number of questions about films*/
let numberOfFilms;

/*Function that checks input string for conditions*/
function inputCheck(check){
    if(check==null || check=='' || check.length>50) 
    {
        return false;
    }else{
        return true;
    }
}

function NumOfFilmsInputCheck() {

    while(true)
    {
        numberOfFilms = prompt(`Скільки фільмів ви вже подивились?`,``);
        if(inputCheck(numberOfFilms) && !isNaN(numberOfFilms))break;
    }

}

NumOfFilmsInputCheck();

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private:false
};

function addLastSeenFilm()
{
    for(let numOfMovies=0;numOfMovies<numOfQuestions;numOfMovies++)
    {
        let firstQuestion,
            secondQuestion;

        while(true)
        {
            firstQuestion = prompt(`Останній переглянутий фільм?`,``);
            if(inputCheck(firstQuestion))break;
        }

        while(true)
        {
            secondQuestion = prompt(`Скількі балів ви дасте цьому фільму?`,``);
            if(inputCheck(secondQuestion) && !isNaN(secondQuestion))break;
        }
    
        personalMovieDB.movie[firstQuestion] = secondQuestion;
        
    }
}

addLastSeenFilm();

function checkPersonalLevel(){
    if(personalMovieDB.count<10){alert(`Доволі мало фільмів переглянуто`);}
    else if(personalMovieDB.count>=10 && personalMovieDB.count<=30 ){alert(`Ви типовий глядач!`);}
    else if (personalMovieDB.count>30){alert(`Ви кіноман!`);}
    else {alert(`Помилка!`);}
}

checkPersonalLevel();

function showMyDB(privCheck){
    if(privCheck == false) console.log(personalMovieDB);
    else{
        console.log(`It's private!`);
    }
}

showMyDB(personalMovieDB.private);

function enterYourFavGenres(){
    let favGenre;
    
    for(let i = 0 ; i<3; ++i)
    {
        while(true)
        {
            favGenre = prompt(`Ваш улюблений жанр під номером ${i+1}`,``);
            if(inputCheck(favGenre) && isNaN(favGenre))break;
        }
        personalMovieDB.genres.push(favGenre);
    }
}

enterYourFavGenres();

