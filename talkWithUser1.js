"use scrict";

const numOfQuestions = 2; /*constant that have number of questions about films*/

/*Function that checks input string for conditions*/
function inputCheck(check){
    if(check==null || check=='' || check.length>50) 
    {
        return false;
    }else{
        return true;
    }
}


//NumOfFilmsInputCheck();

const personalMovieDB = {
    count: 0,
    movie: {},
    actors: {},
    genres: [],
    private:false,

    NumOfFilmsInputCheck: function(){
        while(true)
        {
            this.count = prompt(`Скільки фільмів ви вже подивились?`,``);
            if(inputCheck(this.count) && !isNaN(this.count))break;
        }
    },

    addLastSeenFilm: function(){
        for(let numOfMovies=0;numOfMovies<numOfQuestions;numOfMovies++)
    {
        let firstQuestion,
            secondQuestion;

        while(true)
        {
            firstQuestion = prompt(`Останній переглянутий фільм?`,``).trim();
            if(inputCheck(firstQuestion))break;
        }

        while(true)
        {
            secondQuestion = prompt(`Скількі балів ви дасте цьому фільму?`,``).trim();
            if(inputCheck(secondQuestion) && !isNaN(secondQuestion))break;
        }
    
        this.movie[firstQuestion] = secondQuestion;
        
    }
    },

    checkPersonalLevel: function(){
        if(this.count<10){alert(`Доволі мало фільмів переглянуто`);}
        else if(this.count>=10 && this.count<=30 ){alert(`Ви типовий глядач!`);}
        else if (this.count>30){alert(`Ви кіноман!`);}
        else {alert(`Помилка!`);}
    },

    showMyDB: function(){
        if(this.private == false) console.log(personalMovieDB);
        else{
            console.log(`Об'єкт є приватним!`);
        }
    },

    enterYourFavGenres: function(){
        let favGenre;
    
        for(let i = 0 ; i<3; ++i)
        {
            while(true)
            {
                favGenre = prompt(`Ваш улюблений жанр під номером ${i+1}`,``).trim();
                if(inputCheck(favGenre) && isNaN(favGenre))break;
            }
            this.genres.push(favGenre);
        }

        this.genres.forEach((item,num)=>{
            console.log(`Улюблений жанр #${num+1} - це ${item}`);
        });
    },

    toggleVisibleMyDB: function(){
        this.private == false ? this.private = true : this.private = false;
    }
};

//personalMovieDB.NumOfFilmsInputCheck();

//personalMovieDB.addLastSeenFilm();

//personalMovieDB.checkPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();


personalMovieDB.enterYourFavGenres();

