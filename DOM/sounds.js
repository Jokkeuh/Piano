"./piano-mp3/A0.mp3"
const sounds =(note)=> {
    function getSound(){
        const sound = new Howl({
            src: [`./piano-mp3/${note}.mp3`, "#/A0.mp3"]
        })
        sound.play()
    }
    return {getSound}
}

export default sounds