// create the given elements of the array
const arr = [2, 7, 11, 15] // more elements can be added

// create the target to be met
const target = 26 // the target value can be changed

// initialize an empty array to store elements that meet up the array
let targetArray = []

// the below function adds up elements needed to find the targets
function calculateTarget(value1, value2){
    return value1 + value2
}


// loop through the array to calculate the traget
for(let i= 0; i<arr.length; i++){
    if(calculateTarget(arr[i], arr[i+1]) == target){
        targetArray.push(arr[i])
        targetArray.push(arr[i+1])

        break
    }
}

if(targetArray.length == 0){
    console.log("There are no elements that meets up the target")
}else{
    console.log(targetArray)
}

