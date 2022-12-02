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
