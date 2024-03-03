import { twoSum } from "./two-sum"
import { Problem } from "../types/problem"
import { searchInArray } from "./SearchInArray"
import { convertRomanToInteger } from "./ConverRomanToInteger"
import { ReverseWordsInString } from "./ReverseWordsInString"
interface problemMap {
    [key:string]:Problem
}
export const problems : problemMap = {
    "two-sum":twoSum,
    "searchInArray":searchInArray,
    "convertRomanToInteger":convertRomanToInteger,
    "ReverseWordsInString":ReverseWordsInString
}