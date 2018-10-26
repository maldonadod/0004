const asHash = keyValueArr => {
    return keyValueArr.map(([key, value]) => {
        return {
            [key]: Number.isNaN(parseInt(value)) ? value : parseInt(value)
        }
    })
    .reduce((a, b) => Object.assign({}, a, b))
}
module.exports = asHash