// function printArray(arr){
//    return arr.join()
// }
//
// console.log(printArray(["h","o","l","a"]))
//

const ar = [1,2,3,4]

function redu(arrr) {
   return arrr.reduce((acc, item) => acc * item, 1)
}

console.log(redu(ar))