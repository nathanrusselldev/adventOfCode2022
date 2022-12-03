// Reduce the Arrays to Find the Most Calories

const sortMe = require('./output')


const findBiggestSum = (array) => {
    // console.log(array)
    const reducedArray = []
    for(const item of array) {
        let currentEle = item.reduce((a, b) => a + b)
        reducedArray.push(currentEle)
    }
    console.log(reducedArray.sort((a, b) => a-b).pop())
    return reducedArray.sort((a, b) => a-b).pop()
} 

findBiggestSum(sortMe)

const findBiggestThree = (array) => {
    // console.log(array)
    const reducedArray = []
    for(const item of array) {
        let currentEle = item.reduce((a, b) => a + b)
        reducedArray.push(currentEle)
    }
    const sorted = reducedArray.sort((a, b) => a-b)
    console.log(sorted[sorted.length-1] + sorted[sorted.length-2] + sorted[sorted.length-3])
} 

findBiggestThree(sortMe)
