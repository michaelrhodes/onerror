# proper
propagate callback errors

## install
```sh
pnpm install michaelrhodes/proper#1.0.0
```

## use
```js
// Suppose you have an async function that
// that might pass your callback an error:
function risky (arg, cb) {
  Math.round(Math.random()) ?
    cb(new Error) :
    cb(null)
}

// Provide `proper/pass` an error handler,
// and it gives you a function with which
// to wrap your callbacks
var pass = require('proper/pass')
var then = pass(console.error)

// Then you can go nuts without having
// to check litter your code with
// pesky error checks
risky('business', then(function () {
  riskier('business', then(function () {
    // And so on, ad infinitum
  }))
}))

// In circumstances where you’d rather
// throw the error, you can wrap your
// callbacks with `proper/throw`
var then = require('proper/throw')

risky('business', then(function () {

}))

> BOOM! (maybe)
```

## obey
[MIT](https://opensource.org/licenses/MIT)
