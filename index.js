module.exports = splitEvery

function splitEvery(size, list) {
    return list.reduce(intoList, [])

    function intoList(list, elem) {
        var lastElem = list[list.length - 1]
        if (lastElem && lastElem.length < size) {
            lastElem.push(elem)
        } else {
            list.push([elem])
        }
        return list
    }
}