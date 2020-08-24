function bruteForceTwoSum(array, sum){
  let result = [];
  array.forEach((first, index) => {
    let seconds = array.slice(index + 1, array.length)
    seconds.forEach(second => {
      if(first + second === sum){
        result.push([first, second])
      }
    })
  })
}
