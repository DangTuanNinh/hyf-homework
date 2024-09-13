// Item array removal

// const names = [
//   "Peter",
//   "Ahmad",
//   "Yana",
//   "kristina",
//   "Rasmus",
//   "Samuel",
//   "katrine",
//   "Tala",
// ];
// const nameToRemove = "Ahmad";

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === "Ahmad") {
//     names.splice(i, 1);
//     break;
//   }
// }
// console.log(names);

// When will we be there??

// const travelInformation = {
//   speed: 50,
//   destinationDistance: 432,
// };

// function caculateTravel() {
//   let time = travelInformation.destinationDistance / travelInformation.speed;
//   const hours = Math.floor(time);
//   const minutes = Math.round(time - hours) * 60;
//   return `${hours} hours and ${minutes} minutes`;
// }

// const travelTime = caculateTravel(travelInformation);
// console.log(travelTime);

// NOnoN0nOYes (Note taking app)

// const notes = [];

// function saveNote(content, id) {
//   notes.push({ content, id });
// }

// saveNote("Pick up groceries", 1);
// saveNote("Do laundry", 2);

// console.log(notes);

// function getNote(id) {
//   if (typeof id !== 'number') {
//     console.error('ID phải là một số');
//     return;
//   }

//   for (let note of notes) {
//     if (note.id === id) {
//       return note;
//     }
//   }

//   console.error('Ghi chú không tìm thấy');
// }

// const firstNote = getNote(1);
// console.log(firstNote);

// function logOutNotesFormatted() {
//   for (let note of notes) {
//     console.log(`Note với id: ${note.id}, có văn bản ghi chú: ${note.content}`);
//   }
// }

// logOutNotesFormatted();

// CactusIO-interactive (Smart phone usage app) optional

const activities = [];

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

addActivity("23/7-18", "Youtube", 30);

console.log(activities);

function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;
  activities.forEach((activity) => {
    totalDuration += activity.duration;
  });

  console.log(
    `You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`
  );
}

showStatus();
