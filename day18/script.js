// Activity 1 : Sorting Algorithms 

// task 1 

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
    }
    return arr;
}

let num = [34, 65, 12, 98, 9, 34, 43]
console.log("Without Sorting :", num)
let sortedNumbers = bubbleSort(num)
console.log("Sorted Array :", sortedNumbers)

// task 2 

function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr;
}

let num1 = [12, 23, 45, 56, 67, 78, 89, 9, 54]
console.log("Without Selection Sort :", num1)
console.log("Sorted Array :", selectionSort(num1))

// task 3 

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    let equal = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else if (arr[i] > pivot) {
            right.push(arr[i])
        }
        else {
            equal.push(arr[i])
        }
    }
    return quickSort(left).concat(equal).concat(quickSort(right))
}
let num2 = [12, 23, 45, 56, 67, 78, 89, 9, 62]
console.log("Without Quick Sort :", num2)
console.log("Sorted Array :", quickSort(num2))

// Activity 2 : Searching Algorithms

// task 4 

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
let num3 = [12, 23, 45, 56, 67, 78, 89, 9];
console.log("Array:", num3);

let target = 67;
let index = linearSearch(num3, target);

if (index !== -1) {
    console.log("Target found at index:", index, "with value:", num3[index]);
} else {
    console.log("Target value not found in the array");
}


