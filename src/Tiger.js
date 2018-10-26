class Tiger {
    constructor(speakLikeTiger) {
        this.speakLikeTiger = speakLikeTiger
    }
    speak(message) {
        return this.speakLikeTiger(message)
    }
}
module.exports = speakLikeTiger => new Tiger(speakLikeTiger)