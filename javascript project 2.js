//reverse a string
function reverseString(str) {
    
    return str.split('').reverse().join('');
}
console.log(reverseString("hello world"));

 //count characters//
 function counts(string){
    const characters={};
    for(let i in string)
    characters[string[i]]=characters[string[i]]+1||1;
    return characters;
    }
    console.log(counts("hello world"));
    
    
//capitalize first letter of each word in a sentence//
   
const capitalize = function(sentence){
    let str = sentence.split(" ");
    for(let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}

console.log(capitalize("hello my world"));

//finding maximum and minimum value in an array
let arr=[17,10,20,20,40,50,60];

let min=arr[0];
let max=0;
let len= arr.length;
for(let i=0;i<len -1;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
}
      //find the largest number in an array
      console.log("maximum values in an array is" +max);
      //find the second largest number in an array
      console.log("minimum values in an array is" +min);

      
      //Filter Array: Implement a function that filters out elements from an array based on a given condition.
      function filterArray(arr, condition) {
        return arr.filter(condition);
      }
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const isEven = (num) => num % 2 === 0;
      
      const evenNumbers = filterArray(numbers, isEven);
      
      console.log(evenNumbers);
      //Factorial: Write a function to calculate the factorial of a given number.
      function factorial(n) {
        if (n === 0) {
          return 1;
        }
        return n * factorial(n - 1);
      }
      console.log(factorial(5));
      //Prime Number Check: Create a function to check if a number is prime or not.
      function isPrime(n) {
        if (n <= 1) {
          return false;
        }
        for (let i = 2; i * i <= n; i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
      }
      console.log(isPrime(25)); 
console.log(isPrime(23));

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function Fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence.slice(0, n);
  }
  console.log(Fibonacci(5));