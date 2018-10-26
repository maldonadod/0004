const Tiger = speakLikeTiger => {
    return {
        speak(message) {
            return speakLikeTiger(message)
        }
    }
}
module.exports = Tiger