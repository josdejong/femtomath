import Complex from 'complex.js'
import { allComplexFunctions } from './complex/all.js'
import { isComplex } from './complex/isComplex.js'
import { createFemtoMath } from './createFemtoMath.js'
import { allNumberFunctions } from './number/all.js'

export const femtomath = createFemtoMath()

femtomath.importType({
  name: 'Complex',
  test: isComplex
})

femtomath.importConversion({
  from: 'number',
  to: 'Complex',
  convert: function (x) {
    return new Complex(x, 0)
  }
})

femtomath.importConversion({
  from: 'string',
  to: 'number',
  convert: function (x) {
    return parseFloat(x)
  }
})

femtomath.import(
  allNumberFunctions,
  allComplexFunctions
)
