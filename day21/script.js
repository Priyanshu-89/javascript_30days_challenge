// Activity 1 : Two Sum 

// task 1 

function twoSum(nums, target){
    const numToIndex={}

    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i]
        if(numToIndex.hasOwnProperty(complement)){
            return [numToIndex[complement], i]
        }
        numToIndex[nums[i]]=i
    }
    return []
}

const nums=[2,5,4,6,7,9]
const target=11
console.log(twoSum(nums, target)) 



const testCases=[
    {nums:[2,7,11,15], target:9},
    {nums:[3,2,4], target:6},
    {nums:[3,3], target:6},
    {nums:[1,2,3,4,5], target:9},

]

testCases.forEach((testCases, i)=>{
    const { nums, target } = testCases;
    const result = twoSum(nums, target);
    console.log(`Test Case ${i+1}:`, twoSum(testCases.nums, result))
})

// Activity 2 : Reverse Integer 

// task 2 

function reverseInteger(num){
    const isNegative=num<0
    let numStr=Math.abs(num).toString()
    let reversedNumStr=numStr.split('').reverse().join('');
    let reversedNum=parseInt(reversedNumStr, 10)
    reversedNum=isNegative ? -reversedNum: reversedNum
    return reversedNum
}

console.log(reverseInteger(1234))
console.log(reverseInteger(-1234))

// Activity 3 : Palindrome Number

// task 3
function isPalindrome(num){
if(num<0)
    return false
let numStr=num.toString()
let reversedNumStr=numStr.split('').reverse().join('')
return numStr===reversedNumStr
}
 console.log(isPalindrome(12321))
 console.log(isPalindrome(123456))
 console.log(isPalindrome(-12321))
  console.log(isPalindrome(123456))


