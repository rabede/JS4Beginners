// Event Handler für Button
function fText() {
  document.getElementById("test").innerHTML = "Some new text appeared!";
}

function fCompany() {
  let company = prompt("Firma?");
  printCompany(company);
  compare(company);
  mySimpleFunction(company);
  console.log(mySumFunction(company));
}

function fArray(){
  let petArray = ["Dog", "Cat", "Bird", "Fish", "Reptile"];
  let numberArray = [1, 32, 63, 4, 75, 76, 347, 84];
  sortArray(petArray, numberArray);
}

// -------------------------------------------------------------------------------------- //
// Ternärer Operator:
function compare(number) {
  let a = number;
  let output =
    a < 5
      ? `${a} is definitely less than 5`
      : a >= 5
      ? `${a} is simply not less than 5`
      : `${a} is just not a number`;
  console.log(output);
}

// -------------------------------------------------------------------------------------- //
// Switch:
function printCompany(company) {
  // let company = "SAP";
  switch (company) {
    case "Microsoft":
      console.log("Something about Microsoft");
      break;
    case "Google":
      console.log("Something about Google");
      break;
    case "SAP":
      console.log("Something about SAP");
      break;
    default:
      console.log("No company here :(");
  }
}

// -------------------------------------------------------------------------------------- //
function loop() {
  let iLoops = prompt("Anzahl Loops?");
  let count = 0;

  console.log(`count = ${count}, iLoops = ${iLoops}`);
  console.log("for (count; count <= iLoops; count++)");
  for (count; count <= iLoops; count++) {
    compare(count);
  }
  console.log("");

  console.log(`count = ${count}, iLoops = ${iLoops}`);
    console.log(`Do count -= 1 while count >= 0`);
  do {
    compare(count);
    count -= 1;
  } while (count >= 0);
  console.log("");

  console.log(`count = ${count}, iLoops = ${iLoops}`);
  console.log(`While count <= iLoops count++`)
  while (count <= iLoops) {
    compare(count);
    count++;
  }
  console.log("");
}

// -------------------------------------------------------------------------------------- //
function testArrowFunctions() {
  // Arrow function (params) => {logic}
  const mySimpleFunction = (param1) => {
    console.log(
      `My arrow function () => {} was invoked with param1 as ${param1} type ${typeof param1}`
    );
  };
  // Arrow function mit mehreren Parametern und return
  const mySumFunction = (param1, param2) => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return "Mind. 1 Parameter ist nicht numerisch!";
    }
  };
  let param1 = parseInt(prompt("Parameter 1"));
  mySimpleFunction(param1);
  
  let param2 = parseInt(prompt("Parameter 2"));
  console.log(mySumFunction(param1, param2));
}

// -------------------------------------------------------------------------------------- //
// Parent function "scope" wrapper
const flexiSumCalculator = (param1) => {
  let valueToAdd = param1; // our new "private" variable
  // Function that returns the calculation
  return (calculator = (param2) => {
    return (param2 += valueToAdd);
  });
};

const flexiSumCalculator5 = flexiSumCalculator(5);
// Invoking the new version with param2
// console.log(flexiSumCalculator5(1)); // 6
// console.log(flexiSumCalculator5(2)); // 7
// console.log(flexiSumCalculator5(3)); // 8


// -------------------------------------------------------------------------------------- //
function sortArray(petArray, numberArray) {
  // Stringarrays sortieren
  petArray.sort();
  showArray(petArray);
  petArray.reverse();
  showArray(petArray);
  let sAnimal = "Reptile";
  let iPosition = petArray.indexOf(sAnimal) + 1;
  let animalExists = petArray.some((element) => element === sAnimal);
  console.log(
    `${sAnimal} ${
      animalExists ? "steht an  ${iPosition} . Stelle" : "nicht enthalten"
    }`
  );
  sAnimal = "Dog";
  animalExists = petArray.some((element) => element === sAnimal);
  console.log(`${sAnimal} steht an ${iPosition}. Stelle`);

  // nummerische Arrays sortieren
  numberArray.sort((a, b) => a - b); // Sort ascending
  showArray(numberArray);

  numberArray.sort((a, b) => b - a); // Sort descending
  showArray(numberArray);

  // For element of iterable loop
  function showArray(aArray) {
    console.log(`Die ${aArray.length} Elemente von ${aArray} sind: `);
    for (let element of aArray) {
      console.log(element);
    }
    console.log("------------------");
  }
}