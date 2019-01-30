module.exports = onerror

function onerror (eb) {
  return function (cb) {
    return function (err) {
      if (err) return eb(err)
      var args = arguments
      var count = args.length - 1
      count === 1 ? cb(args[1]) :
      count === 2 ? cb(args[1], args[2]) :
      count === 3 ? cb(args[1], args[2], args[3]) :
      cb.apply(this, [].slice.call(args, 1))
    }
  }
}
