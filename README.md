# split-every [![build status][1]][2]

split a list in length-n pieces

## Example

    var splitEvery = require("split-every")
        , assert = require("assert")

    var listOfTuples = splitEvery(2, [1,2,3,4,5,6])

    assert.equal(listOfTuples, [[1,2], [3,4], [5,6]])

## Installation

`npm install split-every`

## Tests

`make test`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Colingo/split-every.png
  [2]: http://travis-ci.org/Colingo/split-every