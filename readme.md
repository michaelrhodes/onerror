# proper
propagate callback errors

## install
```sh
pnpm install michaelrhodes/proper#1.0.0
```

## use
```js
// Suppose there’s an async function that
// might pass an error to your callback
function risky (arg, cb) {
  Math.round(Math.random()) ?
    cb(new Error) :
    cb(null)
}

// Provide `proper/handle` an error handler
// and it gives you a function with which
// to wrap your callbacks
var handle = require('proper/handle')
var then = handle(console.error)

// Then you can go nuts without having to
// litter your code with error checks
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

// BOOM! (maybe)
```

## obey
[MIT](https://opensource.org/licenses/MIT)
