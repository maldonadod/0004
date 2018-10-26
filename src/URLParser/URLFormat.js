class URLFormat {
    constructor(format) {
        this.parts = format.split('/')
    }
    parse(url) {
        const params = {}
        
        this.parts.forEach((key, index) => {
            
            if (key.indexOf(':') === 0) {
                params[key.replace(':', '')] = url.atIndex(index)
            }
        })

        return params
    }
}

const createURLFormat = format => {
    return new URLFormat(format)
}

module.exports = createURLFormat