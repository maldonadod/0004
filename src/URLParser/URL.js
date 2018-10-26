const QueryParams = require('./QueryParams')

class URL {
    constructor(format, queryParams, values) {
        this.format = format
        this.queryParams = queryParams
        this.values = values
    }
    atIndex(index) {
        const {values} = this
        return Number.isNaN(parseInt(values[index])) ? values[index] : parseInt(values[index])
    }
    paramsAsHash() {
        const {format,queryParams} = this
        return Object.assign({}, format.parse(this), queryParams)
    }
}

const createURL = ({url, format}) => {

    const parts = url.split('?')
    const values = parts[0].split('/')
    const queryParams = QueryParams(url).asHash()

    return new URL(format, queryParams, values)
}

module.exports = createURL