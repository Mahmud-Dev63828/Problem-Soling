import React, { useState } from "react";

const ProblemSolving = () => {
  //! Problem 1: Reverse a String
  // todo: Write a function reverseString(str) that takes a string and returns it reversed.
  //  ? Answer
  //   const reverseString = (str) => {
  //     return str.split("").reverse().join("");
  //   };
  //   const result = reverseString("mahmud");
  //   console.log(result);

  //! Problem 2: FizzBuzz
  /* todo: Write a function fizzBuzz(n) that prints numbers from 1 to n. 
      For multiples of 3, print "Fizz"

      For multiples of 5, print "Buzz"

      For multiples of both 3 and 5, print "FizzBuzz"

      Otherwise, print the number
  */
  //  ? Answer
  //   const fizzBuzz = (n) => {
  //     for (let i = 1; i <= n; i++) {
  //       if (i % 3 == 0 && i % 5 == 0) {
  //         console.log("FizzBuzz");
  //       } else if (i % 3 == 0) {
  //         console.log("Fizz");
  //       } else if (i % 5 == 0) {
  //         console.log("Buzz");
  //       } else {
  //         console.log(i);
  //       }
  //     }
  //   };
  //   fizzBuzz(30);
  //! Problem 3: Count Vowels in a String
  /* Write a function countVowels(str) that returns the number of vowels in the given string.
(Vowels: a, e, i, o, u – both lowercase and uppercase)
  */
  //  ? Answer
  // function countVowels(str) {
  //   const vowels = "aeiouAEIOU";
  //   let count = 0;
  //   for (let char of str) {
  //     if (vowels.includes(char)) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }

  // console.log(countVowels("mahmudlhasanhaere"));

  //! Problem 4: Find the Largest Number in an Array
  /* Write a function findLargest(arr) that returns the largest number in an array.
   */
  //  ? Answer
  const findLargest = (arr) => {
    return Math.max(...arr);
  };

  console.log(findLargest([3, 7, 2, 9, 22, 5]));

  return <div>Problem solving</div>;
};

export default ProblemSolving;
