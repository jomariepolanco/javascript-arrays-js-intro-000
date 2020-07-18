var chocolateBars = [
  'snickers',
  'hungred grand',
  'kitkat',
  'skittles'
]

var addElementToBeginningOfArray
function addElementToBeginningOfArray([],n) {
  var array = []
  array.unshift(n)
  return array.unshift
}
var destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray([],n) {
  var array = []
  return [n, ... array]
}
