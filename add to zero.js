
//Given an array of numbers, console.log True if any two numbers in the array add to zero, otherwise log False.

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let value = "False"
for (i = 0; i < array.length; i++){
        for (j = 0; j < array.length; j++){
            if (i !== j){
             if(array[i] + array[j] === 0){
                value = "True"
            }
        }
    }     
}

console.log(value)


