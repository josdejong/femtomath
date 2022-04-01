export const number = {
  'number': function (a) {
    return a
  },
  'string': function (a) {
    return parseFloat(a)
  }
}

export const add = {
  'number, number': function (a, b) {
    return a + b
  },
  'Array': function (values) {
    // TODO: this is problematic, referencing to `this` is tricky
    //  you cannot "just" use it in nested functions, you must either
    //  create a shortcut beforehand, or make sure you use arrow functions
    const femtomath = this

    return values.reduce(function (total, value) {
      return femtomath.add(total, value)
    })
  }
}

export const negate = {
  'number': function (a) {
    return -a
  }
}

export { subtract } from '../generic/subtract.js'
