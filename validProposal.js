function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }

  if (person1.gender == person2.gender) {
    // You have to write your code here
    return false;
  } else if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  } else return true;
}
console.log(validProposal(1, { name: "bjoy", gender: "male", age: 32 }));
