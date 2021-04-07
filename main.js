const _ = {}

_.each = (array, iteratee) => {
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], i, array)
  }
}

_.map = (array, iteratee) => {
  let output = []
  for (let i = 0; i < array.length; i++) {
    output.push(iteratee(array[i], i, array))
  }
  return output
}

_.filter = (array, predicate) => {
  let output = []
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array) == true) {
      output.push(array[i])
    }
  }
  return output
}

_.find = (array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return array[i]
    } 
    } 
}

//Inclusive means that you "include" the end values.
//able to use math.random, per Evan!
_.random = (min, max) => {
  let output = Math.random(max)
  if (output < min){
    output = Math.random(max)
  }
  return output
}


_.range = (start, stop, step) => {
  let output = []
  let mystep = step
  if (mystep == undefined){
    mystep = 1
  }
  let x = start
  while (x < stop){
    output.push(x)
    x += mystep
  }
  return output
}




export default _