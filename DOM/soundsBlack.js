
const soundsBlack =(note)=> {
    function getBlackSound(){
        const sound = new Howl({
            src: [`./piano-mp3/${note}.mp3`, "#/A0.mp3"]
        })
        sound.play()
    }
    return {getBlackSound}
}

export default soundsBlack

