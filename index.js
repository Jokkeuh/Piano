import keyBoard from "./DOM/keyBoard.js";
import pianoClicks from "./DOM/pianoClicks.js";
import pianoKeys from "./DOM/PianoScreen.js";

const normalKeys = pianoKeys()
const normalKeys2 = pianoKeys()
const normalKeys3 = pianoKeys()


const notesLow = pianoClicks(1)
const notesMedium = pianoClicks(2)
const notesHigh = pianoClicks(3)



normalKeys.fillKeys("low")
normalKeys2.fillKeys("medium")
normalKeys3.fillKeys("high")



const key = keyBoard()
console.log(key.Keybind());
    key.createButtonForEach()