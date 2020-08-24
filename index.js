function bruteForceTwoSum(array, sum){
  let result = [];
  array.forEach((first, index) => {
    let seconds = array.slice(index + 1, array.length)
    seconds.forEach(second => {
      if(first + second === sum){
        result.push([first, second]);
      }
    })
  })
  return result;
}


function binarySearch(array, complement, first = 0, last = array.length - 1){
  let middle = Math.floor(first+ (last - first) / 2)
}