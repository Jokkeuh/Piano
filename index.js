import keyBoard from "./DOM/keyBoard.js";
import pianoClicks from "./DOM/pianoClicks.js";
import pianoKeys from "./DOM/PianoScreen.js";

const startPiano = () =>{

    //set whitekeys
    const normalKeys = pianoKeys()
    const normalKeys2 = pianoKeys()
    const normalKeys3 = pianoKeys()
    //set blackkeys
    const blackKeys = pianoKeys()
    //initialise keyboard controls
    const key = keyBoard()
    
    // fill normal keys with their respected noteq
    normalKeys.fillKeys("low")
    normalKeys2.fillKeys("medium")
    normalKeys3.fillKeys("high")
     // fill black keys with their respected noteq
    blackKeys.fillBlackKeys("low")
    
    //bind keys to notes
    key.Keybind()
    // append note names to key
    key.createButtonForEach()
    //
    pianoClicks()
}
startPiano()

const moonlightSonata = ["D", "F", "D", "F", "D", "F", "D", "F", "D", "F", "D", "F", "D", "F", "D", "F", "D#", "G", "D#", "G", "C#", "G", "D", "F", "D", "E","C#", "E", "D"]