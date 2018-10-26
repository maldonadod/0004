const SpeakStrategy = animalSound => message => {
    return message.split(" ")
        .map(token => `${token} ${animalSound}`)
        .join(" ")
}
module.exports = SpeakStrategy