const numbers: number[] = Array.from({ length: 100 }, (_, index) => index + 1);

for(const number of numbers ) {
    if(number % 3 === 0 && number % 5 === 0) {
        console.log(`${number} = FizzBuzz`);
    } else if (number % 3 === 0) {
        console.log(`${number} = Fizz`);
    } else if (number % 5 === 0) {
        console.log(`${number} = Buzz`);
    } else {
        console.log(number);
    }
}