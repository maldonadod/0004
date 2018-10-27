const SpeakStrategy = require('./SpeakStrategy')
const SpeakingAnimal = require('./SpeakingAnimal')

class Tiger extends SpeakingAnimal {
    constructor(speakLikeLion) {
        super(speakLikeLion)
    }
}

module.exports = () => new Tiger(SpeakStrategy("grrr"))