 const result = confirm("How are you?");

let namber = 5;
const leftBorderWidth = 1; 
console.log(result);
const answer = prompt("Вам есть 18?", "21"); 
console.log(answer); 
const answers = [];

answers[0] = prompt("Как тебя зовут?", "");
answers[1] = prompt("Как твоя фамилия?", "");
answers[2] = prompt("Сколько тебе лет?", "");

console.log(typeof(answers));

document.write(answers);


/*     const category = "toys";
    
    console.log(`https://some.org/${category}/5`); */

/*     const isChecked = false,
          isClosed = true;

console.log(isChecked || isClosed); */ 

/* ФУНКЦИИ */

let num = 20;

 function showFirsMessage(text) {
     console.log(text);
     let num = 10;
 }
showFirsMessage("Hellow World!");
console.log(num);

function calc(a, b) {
return (a + b);
}
console.log(calc(2, 4));
console.log(calc(3, 7));
console.log(calc(4, 8));
console.log(calc(10, 15));

function ret() {
    let num = 50;
    return num;
}
const anotherNum =ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello!");
}
logger();

const calc = (a, b) => { return a + b }
console.log(calc(2, 4));
/* КОНЕЦ УРОКА ФУНКЦИИ */

const num = 12.2;
console.log(Math.round(num));

const logg = "Hello world";
/* console.log(logg.substr(6, 5)); */
console.log(logg.slice(6));

/* КОЛБЭК ФУНКЦИИ */

function first() {
    // Do samething
    setTimeout(function() {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
console.log(`Я учу ${lang}`);
callback();
}
function done() {
    console.log("Я прошёл этот урок!")
};

learnJS("JavaScript", done);
/* КОНЕЦ УРОКА О КОЛБЭК ФУНКЦИЯХ */

/* ОБЪЕКТЫ */
const options = {
    name: 'Test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();
const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);

let counter = 0;

for (let key in options) {
    if (typeof(options[key])=== 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
        }
    }
    
    console.log(counter);

/*     КОНЕЦ УРОКА ПРО ОБЪЕКТЫ */

/* 021 МФССИВЫ И ПСЕВДОМАССИВЫ     */

const arr = [2,34, 16, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
/* arr[99] = 0;
console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* for (let value of arr) {
    console.log(value);
} */

arr.forEach (function(item, i, arr) {
    console.log(`${i}: ${item} в массиве ${arr}`);
});

const str = prompt("", "");
const product = str.split(",");
console.log(product);

/* КОНЕЦ УРОКА ПРО МАССИВЫ */

/* ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ */

let a = 5,
    b = a;

b = a + b;
 console.log(b);
 console.log(a);

/*  const obj = {
    a: 5,
    b: 1
 };

 const copy = obj;
 copy.a = 10;

 console.log(copy.a);
 console.log(obj.a); */

 function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
 }
 
 const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
 };

 const newNumbers = copy(numbers);
 newNumbers.a = 10;

 /* console.log(newNumbers);
 console.log(numbers); */
 newNumbers.c.x = 20;

/*  console.log(newNumbers);
 console.log(numbers); */

 const add = {
    d: 17,
    e: 25
 };

/*  console.log(Object.assign(numbers, add)); */

const clone = Object.assign({}, add);

clone.d = 23;

console.log(clone);
console.log(add);

const oldArray = ["a", "b", "c"];

const newArray = oldArray.slice();

newArray[1] = "fghd";

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blog = ['worlpress', 'livejournal', 'blogger'],
      internet =[...video, ...blog, 'vk', 'facebook'];
      
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 2, 3];
 log(...num);

 const array = ["a", "b"];

 const newAarray = [...array];

 const q = {
    one: 1,
    two: 2
 };

 const newObl = {...q};

 /* КОНЕЦ УРОКА ПЕРЕДАЧА ПО ССЫЛКЕ */

