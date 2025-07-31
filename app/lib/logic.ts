import { error } from "console";
import { RedirectType } from "next/navigation";

function sumTo(n: number): number {
    return n * (n + 1) / 2;
}

function average(arr: number[]): number {
    if (arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function minValue(arr: number[]): number {
    if (arr.length === 0) return 0;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function maxValue(arr: number[]): number {
    if (arr.length === 0) return 0;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}





function reverseArray(arr: number[]): number[] {
    // your code here
    return arr.reverse()
  }
  
  function sumArray(arr: number[]): number {
    // your code here
    return arr.reduce((item,sum)=>sum+item,0)
  }
  
  function filterOdd(arr: number[]): number[] {
    let odd :number[]=[];
      for (let i=0 ;i<arr.length; i++){
        if(arr[i]% 2!==0){
            odd.push(arr[i])
        }
      }
    // your code here
    return odd;
  }
  
  function countTarget(arr: number[], target: number): number {
    // your code here
    let count :number =0
     for(let i=0 ; i <arr.length; i++){
        if(arr[i]===target){
            count++
        }
     }
    
     return count 
  }   
  
  function secondMax(arr: number[]): number {
    // your code here

    if(arr.length < 2){
        throw new Error('the array must have two elements')
    }
   let maxNum:number = Math.max(arr[0], arr[1]);
   let  secondMax:number =Math.min(arr[0],arr[1])

   for(let i =2; i< arr.length; i++){
    if(arr[i]> maxNum){
        secondMax= maxNum;
        maxNum=arr[i]
    }

     else if(arr[i] > secondMax && arr[i]< maxNum){
        secondMax=arr[i]
     }

   }
      return secondMax;
  }
  






  function isPalindrome(str: string): boolean {
// your code here


   let reverseStr :string =str.split("").reverse().join("")
    
     return  reverseStr === str
  }
  
  function countVowels(str: string): number {
    // your code here
   let numOfVowel :number =0
   let vovwl =/[aeiou]/i
    for(let i =0; i <str.length; i++){
       if(vovwl.test(str[i])){
        numOfVowel++
       }
    }

   return numOfVowel
  }
  
  function capitalizeWords(str: string): string {
    // your code here

    const capitals = str.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");


    return capitals
  }
  
  function repeatString(str: string, count: number): string {

   
    // your code here

    return  str.repeat(count);
  }
  
  function longestWord(sentence: string): string {
    // your code here
    let splitWord = sentence.split(" ")
    let longest =splitWord[0]

    for (let i =1 ; i < splitWord.length; i++){
       if(splitWord[i].length > longest.length){
        longest = splitWord[i]
       }
    }
    

    return longest
  }
  




  function countLetters(str: string): Record<string, number> {
    const count: Record<string, number> = {};

    for (let char of str.toLowerCase()) {
      
      count[char] = (count[char] || 0) + 1;
    }

    return count;
  }

  
  function countLetterss(str: string): Record<string, number> {
    const count: Record<string, number> = {};

     for(let char of str){
        count[char] = count[char] ? count[char] + 1 : 1
     }
        
       

    return count;
  }


  
  function objectToArray(obj: Record<string, number>): [string, number][] {
    // your code here
     let arr:any=[]
     for(let key in obj){
        
       arr.push([key, arr[key]])
          
        
     }
     return arr

  }
  
  function mergeObjects(obj1: Record<string, number>, obj2: Record<string, number>): Record<string, number> {
    // your code here

     const result: Record<string, number> = { ...obj1 };

     for (const key in obj2) {
       result[key] = (result[key] || 0) + obj2[key]
     }
     return result
  }
  
  function invertObject(obj: Record<string, string>): Record<string, string> {
    // your code here

     const result: Record<string, string> = {};
     for(const key in obj){
        result[obj[key]] = key.toString()
     }
     return result

  }
  
  function mostFrequentChar(str: string): string {
let count :any={}
let max:string =""
    for(let char of str){
        count[char] = count[char] ? count[char] + 1 : 1
        if(count[char] > count[max]){
            max=char
        }
}
    // your code here

    return max
  }
  


  function findIndex(arr:number[], target:number):number{


    for(let i =0; i <arr.length; i++){
      if (arr[i]===target) return i
    }
    return -1
  } 

  function hasPairWithSum(arr :number[], target:number):boolean{
    let sum :number =0
    for(let i =0; i<arr.length; i ++){

      for(let j =1; j< arr.length; j++){
      sum = arr[i]+arr[j]
      if(sum === target) return true


      }
    }

    return false
  }



  function binarySearch(arr: number[], target: number): number {
    let left: number = 0;
    let right: number = arr.length - 1;
    
    while (left <= right) {
        const mid: number = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function isPalindromeTwoPointer(str:string):boolean{
    return str === str.split("").reverse().join();
}


function countPairsWithSum(arr: number[], target:number):number{
  let count :number=0;
 let sum :number =0
    for(let i =0; i<arr.length; i ++){

      for(let j =i+1; j< arr.length; j++){
      if(arr[i]+arr[j] === target) {
        count++
      }


      }
    }


  return count
}


function countSubarraysWithAvgAbove(arr: number[], k: number, target: number): number {
  if (arr.length < k) return 0;

  let count = 0;
  let windowSum = 0;

  // Initial window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  if (windowSum / k >= target) count++;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    if (windowSum / k >= target) count++;
  }

  return count;
}


function minSubArrayLen(target: number, arr: number[]): number {

let sub :number =0
let ar :number[]=[]
  // your code here
  for(let i =0; i<arr.length; i++){
     ar.push(arr[i])
     sub += arr[i]
    if(arr[i]===target) return 1
 
     else {
      for(let j=i+1; j<arr.length; j++){
        sub += arr[j]
        ar.push(arr[j])
        if(sub === target) return ar.length
      }
     }
  }


  return 0

}


function minSumSubarrayOfSizeK(arr: number[], k: number): number {
  let minSum = 0;
  let windowSum = 0;

  // first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  minSum = windowSum;

  // slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - k];
    minSum = Math.min(minSum, windowSum);
  }

  return minSum;
}





function searchRange(nums: any, target: any) {
  // Helper function to find leftmost (first) index
  function findFirst(nums: string | any[], target: number) {
    let left = 0, right = nums.length - 1, result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        result = mid;
        right = mid - 1; // search on the left side
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }

  // Helper function to find rightmost (last) index
  function findLast(nums: string | any[], target: number) {

    let result = -1,  left = 0, right = nums.length - 1;

    while(left <=right){
      const mid = Math.floor((left + right)/2)

      if(nums[mid] === target){
        result =mid
        left = mid + 1
      }
      else if(nums[mid] < target){
        left = mid + 1

      }
      else{
        right = mid - 1
      }
    }
    return result;
  }

  return [findFirst(nums, target), findLast(nums, target)];
}



function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
