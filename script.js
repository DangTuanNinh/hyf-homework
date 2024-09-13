// Problem solving cardio

// const danishString = "Jeg har en blå bil";
// const danishString2 = "Blå grød med røde bær";

// function countDanishString(str) {
//   const danishLetters = ["å", "æ", "ø"];
//   let result = {
//     total: 0,
//   };
//   for (let i of str) {
//     if (danishLetters.includes(i)) {
//       result.total++;
//       if (result[i]) result[i]++;
//       else result[i] = 1;
//     }
//   }
//   return result;
// }
// console.log(countDanishString(danishString));
// console.log(countDanishString(danishString2));

// 2. Spirit animal name generator

// const nameUser = document.getElementById("nameUser").value;

// const spiritAnimals = [
//   "The Fullmoon Wolf",
//   "The Crying Butterfly",
//   "The Brave Lion",
//   "The Wise Owl",
//   "The Swift Falcon",
//   "The Gentle Deer",
//   "The Fierce Tiger",
//   "The Playful Dolphin",
//   "The Majestic Eagle",
//   "The Mysterious Fox",
// ];

// const randomValue = Math.floor(Math.random() * spiritAnimals.length);
// document.getElementById("generateName").addEventListener("click", () => {
//   let spiritAnimal = spiritAnimals[randomValue];
//   document.getElementById("result").innerHTML = spiritAnimal;
// });
