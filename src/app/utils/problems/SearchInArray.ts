import { Problem } from "../types/problem";
import assert from "assert";

const starterCodeSearchInArray = `function searchInArray(nums,target){
    // Write your code here
  };`;
  
  const handleSearchInArray = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[2, 7, 11, 15],
			[3,8,23,56,99],
			[3,3,6,9,12,34,56,67,89,90],
		];

		const targets = [15, 23, 39];
		const answers = [
			true,true,false
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i], targets[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("twoSum handler function error");
		throw new Error(error);
	}
};
export {handleSearchInArray };

export const searchInArray: Problem = {
id:"searchInArray",
title:"1. Search Element In Array",
problemStatement:`<p class='mt-3'>
Given an array of integers <code>nums</code> and an integer <code>target</code>, return
<em>indices of the two numbers such that they add up to</em> <code>target</code>.
</p>
<p class='mt-3'>
You may assume that each input would have <strong>exactly one solution</strong>, and you
may not use thesame element twice.
</p>
<p class='mt-3'>You can return the answer in any order.</p>`,
examples:[
    {
        id: 1,
        inputText: "nums = [2,7,11,15], target = 15",
        outputText: "true",
        explanation: "Because nums[3] =  15, we return true",
    },
    {
        id: 2,
        inputText: "nums = [3,8,23,56,99], target = 23",
        outputText: "true",
        explanation: "Because nums[2] = 23, we return true.",
    },
    {
        id: 3,
        inputText: " nums = [3,3,6,9,12,34,56,67,89,90], target = 39",
        outputText: "false",
    },
],
constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,

	handlerFunction: handleSearchInArray ,
	starterCode: starterCodeSearchInArray,
	order: 1,
	starterFunctionName: "function searchInArray(",
}