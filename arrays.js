var chocolateBars = [
  'snickers',
  'hungred grand',
  'kitkat',
  'skittles'
]

var addElementToBeginningOfArray = []
function addElementToBeginningOfArray([1],'foo') {
  addElementToBeginningOfArray.unshift
  return addElementToBeginningOfArray
}

var destructivelyAddElementToBeginningOfArray = []
function destructivelyAddElementToBeginningOfArray([1],'foo') {
  destructivelyAddElementToBeginningOfArray = ['foo',...addElementToBeginningOfArray]
  return destructivelyAddElementToBeginningOfArray
}
