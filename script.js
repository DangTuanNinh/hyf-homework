// 1. Warmup
// 1.2 functions!

// function log(delay, stringToLog) {
//   const delayInMilliseconds = delay * 1000;
//   setTimeout(() => {
//     console.log(stringToLog);
//   }, delayInMilliseconds);
// }
// log(2.5, "Called after 2.5 seconds");

// function Click() {
//   logAfterDelay(5, "Called after 5 seconds");
// }
// const EarthLogger = () => {
//   console.log("Earth");
// };
// const saturnLogger = () => {
//   console.log("Saturn");
// };
// function planetLogFunction(planetLogFunction) {
//   planetLogFunction();
// }
// planetLogFunction(EarthLogger);
// planetLogFunction(saturnLogger);

// function logLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       (error) => {
//         console.error("Lỗi không nhận được vị trí:", error.message);
//       }
//     );
//   } else {
//     console.error("Định vị vị trí địa lý không được hỗ trợ");
//   }
// }

// function logMessage() {
//   console.log("Tin nhắn được log ra sau độ trễ");
// }

// function runAfterDelay(delay, callback) {
//   const delayInMilliseconds = delay * 1000;

//   setTimeout(() => {
//     callback();
//   }, delayInMilliseconds);
// }

// runAfterDelay(2, logMessage);

// const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
//   if (shouldTellFunnyJoke === true) logFunnyJoke();
//   else logBadJoke();
// };
// const logFunnyJoke = () => {
//   console.log("logFunnyJoke ");
// };
// const logBadJoke = () => {
//   console.log("logBadJoke ");
// };
// jokeCreator(true, logFunnyJoke, logBadJoke);

// 2. Function as a variable

// const myArray = [
//   () => console.log("Function 1"),
//   () => console.log("Function 2"),
//   () => console.log("Function 3"),
// ];
// myArray.forEach((item) => {
//   item();
// });

// const constFunction = () => {
//   console.log("Đây là hàm được tạo bởi const");
// };

// function normalFunction() {
//   console.log("Đây là hàm bình thường được tạo");
// }
// constFunction();
// normalFunction();

// const myObject = {
//   keyFunction: () => {
//     console.log("Đây là 1 key function được khởi tạo!");
//   },
// };
// myObject.keyFunction();

// 3. The fastest presser in this realm

let sCount = 0;
let lCount = 0;
let gameRunning = false;
let timeOut;

let PressS = document.getElementsByClassName("score")[0];
let PressL = document.getElementsByClassName("score")[1];
let inputField = document.getElementById("inputField");
let startButton = document.getElementById("start-button");
let result = document.getElementById("result");

startButton.addEventListener("click", () => {
  const duration = parseInt(inputField.value, 10) * 1000;
  if (duration <= 0 || isNaN(duration)) {
    alert("Vui lòng nhập số giây cụ thể");
    return;
  }
  gameRunning = true;
  timeOut = setTimeout(endGame, duration);
});

document.addEventListener("keydown", (event) => {
  if (!gameRunning) return;
  if (event.key === "s") {
    sCount++;
    PressS.textContent = `Press S: ${sCount}`;
  } else if (event.key === "l") {
    lCount++;
    PressL.textContent = `Press L: ${lCount}`;
  }
});

const endGame = () => {
  if (!gameRunning) return;
  gameRunning = false;
  if (sCount > lCount) result.textContent = "S WIN";
  else if (lCount > sCount) result.textContent = "L WIN";
  else result.textContent = "Hòa";
};
