
export function isComplex(any) {
  return typeof any.re === 'number' && typeof any.im === 'number'
}
