var chocolateBars = [
  'snickers',
  'hungred grand',
  'kitkat',
  'skittles'
]

var addElementToBeginningOfArray
function addElementToBeginningOfArray([],n) {
  const array = []
  addElementToBeginningOfArray === array.unshift(n)
  return addElementToBeginningOfArray()
}
var destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray([],n) {
  var array = []
  return [n, ... array]
}
