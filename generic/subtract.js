
export const subtract = {
  'any, any': function (a, b) {
    // here we reference to functions on `this`,
    // which is the femtomath instance with all functions
    return this.add(a, this.negate(b))
  }
}
