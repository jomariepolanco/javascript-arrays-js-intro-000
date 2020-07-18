var chocolateBars = [
  'snickers',
  'hungred grand',
  'kitkat',
  'skittles'
]

var addElementToBeginningOfArray
function addElementToBeginningOfArray([],n) {
  const array = ['foo']
  array.unshift(1)
  return array.unshift
}
var destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray([],n) {
  var array = []
  return [n, ... array]
}
