class Lion {
    constructor(speakLikeLion) {
        this.speakLikeLion = speakLikeLion
    }
    speak(message) {
        return this.speakLikeLion(message)
    }
}
module.exports = speakLikeLion => new Lion(speakLikeLion)