import { date2ms } from "./date2ms";

export default (array) => {
  const MaxMachines = 8;
  const keys = array.shift();
  let days = [];
  let hours = [];

  let convertedArray = []; //convert each row into an object
  for (let i = 0; i < array.length; i++) {
    let tempObj = {};
    for (let j = 0; j < keys.length; j++) {
      if (array[i][j] && keys[j]) tempObj[keys[j]] = array[i][j];
      //tempObj.keys[j] = array[i][j];
    }
    convertedArray.push(tempObj);
  }
  console.log(JSON.stringify(convertedArray));
  // for (let i = 1; i < array.length; i++) {
  //   let newObj = {};
  //   for (let j = 0; j < keys.length; j++) {
  //     if (array[i][j] && j === 0 && i === 1) {
  //       // newObj[keys[j]] = array[i][j];

  //       newObj[keys[j]] = date2ms(array[i][j]);
  //     } else if (
  //       keys[j] === "Hour" ||
  //       keys[j] === "TotalInPlay" ||
  //       (keys[j] === "DOW" && array[i][j])
  //     ) {
  //       newObj[keys[j]] = array[i][j];
  //     }
  //   }
  //   hours.push(newObj);
  // }
  // const tempDate = hours.shift();
  // const date = tempDate["Business Date"];
  // const maxPlayed = tempDate["TotalInPlay"];
  // const dayOfWeek = tempDate.DOW;

  // hours.pop();
  // hours.pop();
  // array.pop();
  // const max = array.pop()[MaxMachines];

  return days;
};
