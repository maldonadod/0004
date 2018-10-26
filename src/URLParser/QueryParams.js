const asHash = require('./utils/asHash')

const extractQuery = url => {
    const queryStart = url.indexOf('?')
    return queryStart === -1 ? "" : url.slice(queryStart + 1)
}

const QueryString = url => {
    const queryString = extractQuery(url)
    return {
        asHash() {
            return asHash(queryString.split("&").map(keyValue => keyValue.split('=')))
        }
    }
}

module.exports = QueryString