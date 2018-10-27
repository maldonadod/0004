const SpeakStrategy = require('./SpeakStrategy')
const SpeakingAnimal = require('./SpeakingAnimal')

class Lion extends SpeakingAnimal {
    constructor(speakLikeLion) {
        super(speakLikeLion)
    }
}

module.exports = () => new Lion(SpeakStrategy("roar"))