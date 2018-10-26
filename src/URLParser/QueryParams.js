const extractQuery = url => {
    const queryStart = url.indexOf('?')
    return queryStart === -1 ? "" : url.slice(queryStart + 1)
}
const splitKeyValueArray = keyValue => keyValue.split('=')
const reduceToSingleObject = (a, b) => Object.assign({}, a, b)
const buildKeyValueHash = ([key, value]) => {
    return {
        [key]: Number.isNaN(parseInt(value)) ? value : parseInt(value)
    }
}

const QueryString = url => {
    const queryString = extractQuery(url)
    return {
        asHash() {
            return queryString.split("&")
            .map(splitKeyValueArray)
            .map(buildKeyValueHash)
            .reduce(reduceToSingleObject)
        }
    }
}

module.exports = QueryString