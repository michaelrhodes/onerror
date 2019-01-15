var assert = require('assert')
var handler = require('./')
var thrower = require('./throw')
var then

function good (cb) {
  cb(null, true)
}

function bad (cb) {
  cb(new Error)
}

then = handler(function (err) {
  assert.ok(err instanceof Error)
})

good(then(function (result) {
  assert.equal(result, true)
}))

bad(then(function (result) {
  assert.fail('This should never run')
}))

then = thrower

assert.doesNotThrow(function () {
  good(then(function (result) {
    assert.equal(result, true)
  }))
})

assert.throws(function () {
  bad(then(function (result) {
    assert.fail('This should never run')
  }))
})
