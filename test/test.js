var test = require("testling")
    , splitEvery = require("..")

var mocks = {
    data: [1,2,3,4,5,6]
}

test("split into two", function (t) {
    var result = splitEvery(2, mocks.data)

    t.deepEqual(result, [[1,2], [3,4], [5,6]])

    t.end()
})

test("split into three", function (t) {
    var result = splitEvery(3, mocks.data)

    t.deepEqual(result, [[1,2,3], [4,5,6]])

    t.end()
})

test("split into four", function (t) {
    var result = splitEvery(4, mocks.data)

    t.deepEqual(result, [[1,2,3,4], [5,6]])

    t.end()
})