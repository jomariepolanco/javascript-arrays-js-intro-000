var chocolateBars = [
  'snickers',
  'hungred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
  return [element, array]
}
var destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray([],n) {
  var array = []
  return [n, ... array]
}
