const AssertEquals = (a, b) => expect(a).toEqual(b)

const URLFormat = require('../src/URLParser/URLFormat')
const URL = require('../src/URLParser/URL')

describe('URL Parser Exercise', () => {

    it('should parse path params without query string', () => {

        const url = "/9/api/listings/3"
        const format = URLFormat("/:version/api/:collection/:id")
        const actual = URL({url, format}).paramsAsHash()
        
        const expected = {
            "version": 9,
            "collection": "listings",
            "id": 3
        }
        
        AssertEquals(actual, expected)
    })

    it('should parse path params plus query string params', () => {

        const url = "/6/api/listings/3?sort=desc&limit=10"
        const format = URLFormat("/:version/api/:collection/:id")
        const actual = URL({url, format}).paramsAsHash()

        const expected = {
            version: 6,
            collection: "listings",
            id: 3,
            sort: "desc",
            limit: 10
        }
        
        AssertEquals(actual, expected)
    })
})
