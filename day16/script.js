// Activity 1 : Basic Recursion 

// task 1 

function factorial(n){
    if(n == 0 ){
        return 1;
    }
    else{
        return n * factorial(n-1);
        }
        
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))

// task 2 

function fibonacci(n)
{
    if(n == 0){
        return 0
    }else if(n==1){
        return 1
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(5))
console.log(fibonacci(10))

// Activity 2 : Recursion with Arrays

// task 3 

function sumArray(arr){
    if(arr.length === 0){
        return 0;
    }else{
        return arr[0] + sumArray(arr.slice(1));
    }
}

console.log(sumArray([]))
console.log(sumArray([1]))
console.log(sumArray([1, 2, 3]))
console.log(sumArray([5, 10, -2, 4]))
console.log(sumArray([-1, -1, -1, -1])) 

// task 4 

function findMax(arr){
    if(arr.length === 1){
        return arr[0];
        }else{
            let max = findMax(arr.slice(1));
            return arr[0] > max ? arr[0] : max;
            }
}
console.log(findMax([1]))
console.log(findMax([1, 2, 3]))
console.log(findMax([5, 10, -2, 4]))


// Activity 3 : String Manipulation with recursion

// task 5 

function reverseString(str){
    if(str === "" || str.length===1){
        return str
    }else{
        return reverseString(str.slice(1)) + str[0];
    }
}
console.log(reverseString(""))
console.log(reverseString("a"))
console.log(reverseString("hello"))
console.log(reverseString("python"))

// taask 6 

function isPalindrome(str){
    if(str.length === 0 || str.length === 1){
        return true
        }

        if(str[0] === str[str.length - 1]){
            return isPalindrome(str.slice(1, str.length - 1))
        }else{
            return false
        }
}
console.log(isPalindrome(""))
console.log(isPalindrome("a"))
console.log(isPalindrome("radar"))
console.log(isPalindrome("python"))