class SpeakingAnimal {
    constructor(speakStrategy) {
        this.speakStrategy = speakStrategy
    }
    speak(message) {
        return this.speakStrategy(message)
    }
}

module.exports = SpeakingAnimal