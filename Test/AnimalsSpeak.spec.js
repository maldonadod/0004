const AssertEquals = (a, b) => expect(a).toEqual(b)

const SpeakStrategy = require('../src/SpeakStrategy')
const Tiger = require('../src/Tiger')
const Lion = require('../src/Lion')

describe('All animals talk to each other in a similar way', () => {

    describe("speak(string) behaves inserting a variable after each word", () => {

        it('insert sss', () => {
            const actual = "TDD can reduce bug density"
            const expected = "TDD xxx can xxx reduce xxx bug xxx density xxx"
            const speak = SpeakStrategy('xxx')
            AssertEquals(
                speak(actual), expected
            )
        })
        it('insert ah!', () => {
            const actual = "TDD can encourage more modular designs"
            const expected = "TDD ah! can ah! encourage ah! more ah! modular ah! designs ah!"
            const speak = SpeakStrategy('ah!')
            AssertEquals(
                speak(actual), expected
            )
        })
        it('insert ra ra', () => {
            const actual = "TDD can reduce code complexity"
            const expected = "TDD ra ra can ra ra reduce ra ra code ra ra complexity ra ra"
            const speak = SpeakStrategy('ra ra')
            AssertEquals(
                speak(actual), expected
            )
        })
    })

    describe('Tigers should "grrr"', () => {
        const speakLikeTiger = SpeakStrategy("grrr")
        const tiger = Tiger(speakLikeTiger)
    
        it('Lions suck', () => {
            const actual = "Lions suck"
            const expected = "Lions grrr suck grrr"
            AssertEquals(tiger.speak(actual), expected)
        })
        it('We came from Asia', () => {
            const actual = "We came from Asia"
            const expected = "We grrr came grrr from grrr Asia grrr"
            AssertEquals(tiger.speak(actual), expected)
        })
    })

    describe('Lions should "roar"', () => {
        const speakLikeLion = SpeakStrategy("roar")
        const lion = Lion(speakLikeLion)
    
        it("I'm a lion", () => {
            const actual = "I'm a lion"
            const expected = "I'm roar a roar lion roar"
            AssertEquals(lion.speak(actual), expected)
        })
        it("We have pride", () => {
            const actual = "We have pride"
            const expected = "We roar have roar pride roar"
            AssertEquals(lion.speak(actual), expected)
        })
    })
})