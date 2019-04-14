


// debug:
// function rollFuncTester(cb) {
//
//   const resultsArray = []
//   const iterations = [...Array(1000).keys()]
//   iterations.forEach(num => {
//     resultsArray.push(cb())
//   })
//
//   console.log("% true for 1000: ", resultsArray.filter(res => {
//     return res === true
//   }).length / 10)
//
// }

function percentify(number) {
  if (number > 100) {
    return 100
  }else if (number < 0) {
    return 0
  } else {
    return Math.round(number)
  }
}

export function luckRoll(luck, returnChance=false){

  let higherLuckChance = -(0.6 * luck) + 50.0
  let lowerLuckChance = -(2.6 * luck) + 90.0

  if (higherLuckChance >= lowerLuckChance) {
    return returnChance ? percentify(higherLuckChance) : Math.floor(Math.random() * 101) < higherLuckChance
  }else{
    return returnChance ? percentify(lowerLuckChance) : Math.floor(Math.random() * 101) <= lowerLuckChance
  }
}

export function shakedownRoll(streetcred, xmercs, returnChance=false){

  const chance = -(0.6 * streetcred) + (40.0 - xmercs)

  return returnChance ? percentify(chance) : Math.floor(Math.random() * 101) < chance
}

export function karmaRoll(karma1, karma2, returnChance=false) {
  const karmaDiff = Math.abs(karma1 - karma2)

  if (returnChance) {
    return percentify(karmaDiff)
  }else if (karmaDiff === 0) {
    return true
  }else{
    return Math.floor(Math.random() * 101) > karmaDiff
  }
}

export function heatRoll(heat, returnChance=false) {

  const higherHeatChance = (1.5 * heat) - 85.0
  const lowerHeatChance = (0.5 * heat) - 5

  if (higherHeatChance >= lowerHeatChance) {
    return returnChance ? percentify(higherHeatChance) : Math.floor(Math.random() * 101) < higherHeatChance
  }else{
    return returnChance ? percentify(lowerHeatChance) : Math.floor(Math.random() * 101) <= lowerHeatChance
  }

  if (returnChance) {
    return higherHeatChance >= lowerHeatChance ? higherHeatChance : lowerHeatChance
  }else if (lowerHeatChance >= higherHeatChance){
    return Math.floor(Math.random() * 101) < lowerHeatChance
  }else{
    return Math.floor(Math.random() * 101) <= higherHeatChance
  }

}

//
