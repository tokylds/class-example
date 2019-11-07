// FOR LOOP version

for (let i = 0; i <= 100; i++) {
  let result = "";
  if (i % 3 === 0) {
    result += "FIZZ";
  }
  if (i % 5 === 0) {
    result += "BUZZ";
  }
  if (i % 3 !== 0 && i % 5 !== 0) {
    result = i;
  }
  console.log(result);
}

// ternary operator version
for (let i = 0; i < 100; i++) {
  console.log(
    i % 15 === 0 ? "FIZZBUZZ" : i % 3 === 0 ? "FIZZ" : i % 5 === 0 ? "BUZZ" : i
  );
}

// Switch version
for (var x = 0; x <= 20; x++) {
  switch (true) {
    case x % 5 === 0 && x % 3 === 0:
      console.log("FizzBuzz");
      break;
    case x % 3 === 0:
      console.log("Fizz");
      break;
    case x % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(x);
      break;
  }
}
