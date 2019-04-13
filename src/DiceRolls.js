



function rollFuncTester(cb) {

  const resultsArray = []
  const iterations = [...Array(1000).keys()]
  iterations.forEach(num => {
    resultsArray.push(cb())
  })

  console.log("% true for 1000: ", resultsArray.filter(res => {
    return res === true
  }).length / 10)

}

export function luckRoll(luck){

  const higherLuckChance = -(0.6 * luck) + 50.0
  const lowerLuckChance = -(2.6 * luck) + 90.0

  if (higherLuckChance >= lowerLuckChance){
    return Math.floor(Math.random() * 101) < higherLuckChance
  }else{
    return Math.floor(Math.random() * 101) <= lowerLuckChance
  }

}

export function shakedownRoll(streetcred, xmercs){

  const chance = -(0.6 * streetcred) + (40.0 - xmercs)

    return Math.floor(Math.random() * 101) < chance

}

export function karmaRoll(karma1, karma2) {
  const karmaDiff = Math.abs(karma1 - karma2)
  if (karmaDiff === 0) {
    return true
  }
  return Math.floor(Math.random() * 101) > karmaDiff
}

export function heatRoll(heat) {

  const higherHeatChance = (1.5 * heat) - 85.0
  const lowerHeatChance = (0.5 * heat) - 5

  if (lowerHeatChance >= higherHeatChance){
    return Math.floor(Math.random() * 101) < lowerHeatChance
  }else{
    return Math.floor(Math.random() * 101) <= higherHeatChance
  }

}


//
