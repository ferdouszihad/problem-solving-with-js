function calculateSleepTime(times) {
  // 1. find sum of array
  let sum = 0;
  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    sum = sum + time;
  }

  // calculate sleepTime
  let sleepSecond = sum;
  let hour = Math.floor(sleepSecond / 3600);
  sleepSecond = sleepSecond % 3600;
  let minute = Math.floor(sleepSecond / 60);
  sleepSecond = sleepSecond % 60;

  let result = {
    hour: hour,
    minute: minute,
    second: sleepSecond,
  };
  return result;
}



