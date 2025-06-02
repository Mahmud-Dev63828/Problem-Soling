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
  // const findLargest = (arr) => {
  //   return Math.max(...arr);
  // };

  // console.log(findLargest([3, 7, 2, 9, 22, 5]));
  //! Problem 5: Sum of Numbers in an Array
  /* Write a function sumArray(arr) that returns the sum of all numbers in an array.
   */
  //  ? Answer
  // const sumArray = (arr) => {
  //   return arr.reduce((accumulator, currentValue, currentIndex, array) => {
  //     return accumulator + currentValue;
  //   });
  // };
  // console.log(sumArray([1, 2, 3, 4]));
  //! Problem 6: Palindrome Checker
  /* Write a function isPalindrome(str) that checks if a string is a palindrome.
     (A palindrome reads the same backward as forward)
     Ignore case sensitivity and spaces.
   */
  //  ? Answer

  // const isPalindrome = (str) => {
  //   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  //   const reversedStr = cleanedStr.split("").reverse().join("");
  //   return cleanedStr === reversedStr;
  // };

  // console.log(isPalindrome("madam"));
  // console.log(isPalindrome("Racecar"));
  // console.log(isPalindrome("Race car"));
  // console.log(isPalindrome("hello"));

  //! Problem 7: Find the Longest Word in a Sentence
  /* Write a function findLongestWord(str) that returns the longest word in a sentence.
   */
  //  ? Answer
  const findLongestWord = (str) => {
    const words = str.split(" ");
    let longestWord = "";

    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }

    return longestWord;
  };
  const sentence = "The quick brown fox jumps over the lazy dog";
  const longest = findLongestWord(sentence);
  console.log("Longest word:", longest);
  // !  day 6
  return <div>Problem solving</div>;
};

export default ProblemSolving;
