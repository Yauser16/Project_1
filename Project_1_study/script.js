"use strict";
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gernes: [],
    private: false
};
 
for (let i = 0; i<2; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
          b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
} else {
    console.log("error");
    i--;
}
}


/* if (personalMovieDB.count < 10) {
    console.log("Просмотрено слишком мало фильмов.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель.");
    } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман.");
    } else {
    console.log("Произощла ошибка.");

} */
(personalMovieDB.count < 10) ? console.log("Просмотрено слишком мало фильмов.") : ((personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? console.log("Вы классический зритель.") : ((personalMovieDB.count >= 30)? console.log("Вы киноман.") : console.log("Произощла ошибка.")));

console.log(personalMovieDB);


/* numberOfFilms[0] = prompt("Сколько фильмов Вы уже посмотрели?", "");

 const count = [numberOfFilms];
 const movies = [];
 const actors = [];
 const gernes {
 }; */
/*  let incr = 10,
    decr = 10;

incr++;
decr--;
 console.log(decr); */
/* if (2==2) {
    console.log('OR!');
    } else {
        console.log('не верно!');
}

const num = 10;

if (num>15) {
    console.log("OK!");       
} else if (num<15) {
    console.log("not OK!");
} else {
    console.log("В точку");
} */
/* const num = 40; */
/* (num == 10) ? console.log('OK!') : console.log('Error!'); */
/* switch (num) {
    case 30:
    console.log('нет!');
    break;
    case 20:
    console.log('нет!');
    break;
    case 10:
    console.log('В точку!');
    break;
    default:
    console.log('Опять не попал');

}
 */
/* let num = 40; */
/* while (num<=50) {
    console.log(num);
78    num++;
} */
/* for (let i = 1; i<=9; i++) {
console.log(num);
num++;
} */
/* for (let i = 1; i<10; i++) {
    if (i===6) {
        continue;
    }
    console.log(i);
} */

