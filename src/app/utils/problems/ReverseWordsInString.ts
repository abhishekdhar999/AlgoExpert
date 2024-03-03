import { Problem } from "../types/problem";
import assert from "assert";

const starterCodeReverseWordsInString = `function ReverseWordsInString(string){
    // Write your code here
  };`;
  
  const handleReverseWordsInString = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const strings = [
			"geeks quiz practice code","i love programming very much",
		];

		// const targets = [15, 23, 39];
		const answers = [
			"code practice quiz geeks","much very programming love i",
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < strings.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(strings[i]);
            console.log("result",result)
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("convert roman to integer handler function error");
		throw new Error(error);
	}
};
export {handleReverseWordsInString };

export const ReverseWordsInString: Problem = {
id:"ReverseWordsInString",
title:"1. Reverse Words In A String",
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
        inputText: "string = geeks quiz practice code",
        outputText: "code practice quiz geeks",
        // explanation: "Because ix in roman numeral is 9",
    },
    {
        id: 2,
        inputText: "string = i love programming very much",
        outputText: "much very programming love i",
        // explanation: "Because xl in roman is 40 as x=10 and l=50.",
    },
    // {
    //     id: 3,
    //     inputText: " string = mcmiv",
    //     outputText: "1904",
    // },
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

	handlerFunction: handleReverseWordsInString ,
	starterCode: starterCodeReverseWordsInString,
	order: 4,
	starterFunctionName: "function ReverseWordsInString(",
}