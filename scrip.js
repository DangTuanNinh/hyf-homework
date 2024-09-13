// 1. Warmup array exercises
// 1.1 Doubling of number

// let numbers = [1, 2, 3, 4];
// let newNumbers = [];

// let check = numbers.filter((item) => {
//   return item % 2 !== 0;
// });
// console.log(check);

// check.map((item) => {
//   return newNumbers.push(item * 2);
// });

// console.log("The doubled numbers are", newNumbers);

// Working with movies

import { movies } from "./movies.js";

const longMovies = [];
let count = 0;
let rating;
let countTotalNumber;

movies.forEach((item) => {
  if (1980 <= item.year && item.year <= 1989) {
    count++;
  }
  if (item.rating >= 7) item.tag = "Good";
  else if (item.rating >= 4 && item.rating < 7) item.tag = "Average";
  else item.tag = "Bad";

  rating = movies
    .filter((item) => {
      return item.rating > 6;
    })
    .map((item) => {
      return item.rating;
    });
});

const keywords = ["surfer", "alien", "benjamin"];
countTotalNumber = movies.filter((movie) =>
  keywords.some((keyword) => movie.title.toLowerCase().includes(keyword))
).length;

const checkDuplicatedWords = (title) => {
  const words = title.toLowerCase().split(" ");
  const wordCount = {};

  for (const word of words) {
    if (wordCount[word]) {
      return true;
    }
    wordCount[word] = true;
  }

  return false;
};
const duplicatedWordMovies = movies.filter(checkDuplicatedWords);

console.log(duplicatedWordMovies);
console.log(countTotalNumber);
