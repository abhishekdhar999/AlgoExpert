import { twoSum } from "./two-sum"
import { Problem } from "../types/problem"

interface problemMap {
    [key:string]:Problem
}
export const problems : problemMap = {
    "two-sum":twoSum
}