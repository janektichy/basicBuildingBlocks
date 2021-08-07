for (let i = 0; i < 10; i++) {
console.log(i)
} 

for (let i = 1; i < 11; i++) {
    console.log(i)
} 
    
for (let i = 2; i < 21; i = i + 2) {
    console.log(i)
} 

let something = (a, b) => {
    return a + b;
};

console.log(something(5, 2))
        

function input(a) {
    for (let i = 1; i < a; i++) {
        console.log(i)
    } 
}

input(20);

function greet(name) {
    console.log("Hello " + name);
}

greet('John');

let printValues = [0, 3, 6, 7, 9];
    for (let i = 0; i < printValues.length; i++) {
      console.log(printValues[i]);
};

let myNumbers = [10, 20, 30, 50, 12];

myNumbers.forEach(element => 
    console.log(element));