function expressAsync (fn) {
  return async function (...expressArgs) {
    const [req, res, next] = expressArgs

    try {
      await fn(...expressArgs)
    } catch (ex) {
      next(new Error(ex))
    }
  }
}


exports = module.exports = expressAsync

