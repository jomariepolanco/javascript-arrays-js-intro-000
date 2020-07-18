var chocolateBars = [
  'snickers',
  'hungred grand',
  'kitkat',
  'skittles'
]

var addElementToBeginningOfArray
function addElementToBeginningOfArray([],n) {
  const array = ['foo']
  addElementToBeginningOfAray(array,n)
  return addElementToBeginningOfArray.unshift
}
var destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray([],n) {
  var array = []
  return [n, ... array]
}
