var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

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

}
