// // Flight booking fullname function

// function getFullName(firstname, surname, useFormalName) {
//   if (useFormalName === true) console.log("Lord " + firstname + " " + surname);
//   else console.log(firstname + " " + surname);
// }
// getFullName("Benjamin", "Hughes", true);

// // Event application

// function getEventWeekday(dayPresent) {
//   const weak = [
//     "Chủ nhật",
//     "Thứ hai",
//     "Thứ ba",
//     "Thứ tư",
//     "Thứ năm",
//     "Thứ 6",
//     "Thứ 7",
//   ];
//   const today = new Date();
//   const todayIndex = today.getDay();
//   const eventIndex = (todayIndex + dayPresent) % 7;
//   return weak[eventIndex];
// }
// console.log(getEventWeekday(2));

// Weather wear

// function wearClothes(temperature) {
//   if (temperature < 20) {
//     console.log("Mặc áo bông");
//   } else console.log("Mặc áo khoác");
// }

// wearClothes(5);

// Student manager

// const class07Students = [];
// function addStudentToClass(studentName) {
//   if (class07Students.includes(studentName))
//     console.log(`Student ${studentName} is already in the class`);
//   else if (class07Students.length < 6) class07Students.push(studentName);
//   else console.log("Cannot add more students to class 07");
//   return class07Students;
// }

// function getNumberOfStudents() {
//   return class07Students.length;
// }
// console.log(addStudentToClass("Ninh", "Nam"));

// Candy helper optional

// const boughtCandy = [];
// const amountToSpend = Math.random() * 100;
// function addCandy(candyType, weight) {
//   const candyPrices = {
//     Sweet: 0.5,
//     Chocolate: 0.7,
//     Toffee: 1.1,
//     Chewing_gum: 0.03,
//   };
//   const priceGram = candyPrices[candyType];
//   const totalPrice = priceGram * weight;
//   boughtCandy.push(totalPrice);
//   return boughtCandy;
// }

// addCandy("Sweet", 20);

// function canBuyMoreCandy() {
//   let total = 0;
//   for (let i = 0; i < boughtCandy.length; i++) {
//     total += boughtCandy[i];
//   }
//   return total < amountToSpend;
// }

// if (canBuyMoreCandy()) {
//   console.log("You can buy more, so please do!");
// } else {
//   console.log();
// }
