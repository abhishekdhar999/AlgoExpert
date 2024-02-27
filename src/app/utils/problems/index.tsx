import { twoSum } from "./two-sum"
import { Problem } from "../types/problem"
import { searchInArray } from "./SearchInArray"
import { convertRomanToInteger } from "./ConverRomanToInteger"

interface problemMap {
    [key:string]:Problem
}
export const problems : problemMap = {
    "two-sum":twoSum,
    "searchInArray":searchInArray,
    "convertRomanToInteger":convertRomanToInteger
}