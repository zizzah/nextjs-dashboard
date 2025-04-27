

/*************  ✨ Windsurf Command 🌟  *************/

import { truncate } from "fs";
import { array } from "zod";

/**
 * Function to find the largest number in an array
 * @param arr - Array of numbers
 */
function findTheLargestAndSmallest(arr: number[]): [number, number] | number {
    let largest = arr[0];
    let smallest = arr[0];

    // loop through the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    else{
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    }

    return [ largest,smallest];
/*******  ede3c763-bf5d-4569-bc02-053b280154d1  *******/}


/**
 * Function to calculate the sum of even and odd numbers in an array.
 * @param arr - Array of numbers
 * @returns The sum of even and odd numbers
 */
function theSumOfEvenAndoddNumbers(arr: number[]): [number, number] {
    let evenSum: number = 0;
    let oddSum: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    return [evenSum, oddSum];
}

function countFrequenOfCharacter(str:string, char:string): number {
  return str.split(char).length - 1
}


function reverseString(str :string): string{
let reverseString = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseString += str[i];
}
return reverseString
}

/*************  ✨ Windsurf Command 🌟  *************/
/**
 * Prints the numbers from 1 to the given number, but for multiples of 3 prints 'fizz'
 * and for multiples of 5 prints 'buzz' instead of the number.
 * @param {number} number - The number of iterations
 * @returns {void}
 */
function fizzBuzz(number: number): void {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

function duplicate(arrr:number[]): number[] {
   let duplicate = new Set<number>();
   let seen =  new Set<number>();

   for(let i = 0; i < arrr.length; i++){
    if(seen.has(arrr[i])){
        duplicate.add(arrr[i])
    }
    else{
        seen.add(arrr[i])
    }
    }

    return Array.from(duplicate);
}

function isPrimes(number: number): boolean {
    // Handle edge cases
    if (number <= 1) return false;
    if (number <= 3) return true;  // 2 and 3 are prime
    
    // If number is divisible by 2 or 3, it's not prime
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    // Check all possible divisors of form 6k±1 up to sqrt(number)
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

function sumEven(arr:number[]):number{
     let sum :number =0
     for(let i = 0; i <arr.length; i++){
        if(arr[i]%2 === 0){
            sum += arr[i]
     }
    }
    return sum
}

function maxNum(arr:number[]):number{

    let max =arr[0]

    for(let i =1; i< arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }




    return max
}

function numberOfString(str :string , char:string ):number{

let num :number =0;

for(let i =0; i<str.length; i++){
    if(str[i] === char){
        num ++;
    }
}
return num;

}




function countFrequencies(arr: any[]): { [key: string]: number } {
    // Your code here
let obj: { [key: string]: number } = {};
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      }
    }

    return obj
  }
  

  function isPrime(n: number): boolean {
    // Your code 
    
    if(n <=1) return false;
    if(n === 2) return true;
    if(n % 2=== 0) return false;

    for(let i = 3; i *i<= n; i+=2){
        if(n % i === 0) return false;
    }
    return true
  }
  

  function reverseWords(sentence: string): string {
    

   return  sentence.split(' ').reverse().join(' ')
  }
  

  function removeDuplicates(arr: any[]): any[] {
    // Your code here
    let unique = new Set(arr);
    return Array.from(unique);
  }

  function reverseNumber(n: number): number {
    // Your code here

    return Number(String(n).split('').reverse().join(''))
  }

  function capitalizeWords(sentence: string): string {
    // Your code here

    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }
  
  