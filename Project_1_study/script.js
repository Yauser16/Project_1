"use strict";
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");


/* const personalMovieDB = ['count', 'movies', 'actors', 'genres', 'privat'];

personalMovieDB[0] = numberOfFilms;
personalMovieDB[1] = {films, score};
personalMovieDB[2] = {};
personalMovieDB[3] = []; 
personalMovieDB[4] = false; */
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gernes: [],
    private: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов", ""),
      d = prompt("На сколько оцените его?", "");
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

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
