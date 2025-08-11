function countVowels(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let count = 0;

  //   str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }

  return count;
}

let result = countVowels("108");
console.log(result);
