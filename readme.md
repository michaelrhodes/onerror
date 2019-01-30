# onerror
propagate callback errors

## install
```sh
npm install michaelrhodes/onerror#3.0.0
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

// Provide `onerror` an error handler
// and it gives you a function with which
// to wrap your callbacks
var onerror = require('onerror')
var then = onerror(console.error)

// Then you can go nuts without having to
// litter your code with error checks
risky('business', then(function () {
  riskier('business', then(function () {
    // And so on, ad infinitum
  }))
}))

// In circumstances where you’d rather
// throw the error, you can wrap your
// callbacks with `onerror/throw`
var then = require('onerror/throw')

risky('business', then(function () {

}))

// BOOM! (maybe)
```

## obey
[MIT](https://opensource.org/licenses/MIT)
