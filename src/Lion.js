const Lion = speakLikeLion => {
    return {
        speak(message) {
            return speakLikeLion(message)
        }
    }
}
module.exports = Lion