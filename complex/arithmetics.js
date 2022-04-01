import Complex from 'complex.js'

export const complex = {
  'number, number': function (re, im) {
    return new Complex(re, im)
  }
}

export const add = {
  'Complex, Complex': function (a, b) {
    return a.add(b)
  }
}

export const negate = {
  'Complex': function (a) {
    return a.neg()
  }
}

export { subtract } from '../generic/subtract.js'
