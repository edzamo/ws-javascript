let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers[i] = i + 1;
}

console.log(numbers);

let limit = 3;

do {
  console.log(limit--);
} while (limit >= 0);

let objectName = {
  name: "edwin",
  lastName: "zamora",
  address: "Manta",
};

for (let obj in objectName) {
  console.log("date of object", obj);
}
for (let element in numbers) {
  console.log("date of numbers", element);
}

let fruits = new Set(["orange", "apple", "apple", "banana", "orange"]);
for (let element of fruits) {
  console.log("date of set:", element);
}
