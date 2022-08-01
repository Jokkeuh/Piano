import sounds from "./sounds.js"
import soundsBlack from "./soundsBlack.js"
const pianoClicks =()=>{
    const GetPiano = document.getElementById("pianoKeys")
    const GetPianoBlack = document.getElementById("pianoBlackKeys")
    let getKey = document.getElementById("inputKey")
    getKey.addEventListener("change",()=>{
        if(getKey.value < 1){
            return whatKey = 1}
        if(getKey.value >= 6){
            return whatKey = 5
        }else{
            whatKey = getKey.value
        }
        
        return whatKey
    })
    let whatKey = 1
    
    GetPianoBlack.addEventListener("click", (e)=>{
        console.log(e)
        const low = whatKey                /*
        Db C# 1
        Eb D# 2
        Gb F# 3
        Ab G# 4
        Bb A# 5
        */
        
        //const medium = 4
        //const high = 5
        if(e.target.dataset.set == "low"){
            if(e.target.id == "Black1"){
                const note = soundsBlack(`Db${low}`)
                return note.getBlackSound()
            }
            if(e.target.id == "Black2"){
                const note = soundsBlack(`Eb${low}`)
            return note.getBlackSound()
                    // play KeyD
                }
                if(e.target.id == "Black3"){
                    const note = soundsBlack(`Gb${low}`)
                return note.getBlackSound()
                    // play KeyE
                }
                if(e.target.id == "Black4"){
                    const note = soundsBlack(`Ab${low}`)
                return note.getBlackSound()
                    // play KeyF
                }
                if(e.target.id == "Black5"){
                    const note = soundsBlack(`Bb${low}`)
                return note.getBlackSound()
                    // play KeyG
                }
        }
    })
    GetPiano.addEventListener("click", (e)=>{
        
        const low = whatKey
        const medium = parseInt(whatKey)+1
        console.log(medium);
        const high = parseInt(whatKey) +2
        if(e.target.dataset.set == "low"){
            if(e.target.id == 1){
                const note = sounds(`C${low}`)
                return note.getSound()
            }
            if(e.target.id == 2){
                const note = sounds(`D${low}`)
            return note.getSound()
                    // play KeyD
                }
                if(e.target.id == 3){
                    const note = sounds(`E${low}`)
                return note.getSound()
                    // play KeyE
                }
                if(e.target.id == 4){
                    const note = sounds(`F${low}`)
                return note.getSound()
                    // play KeyF
                }
                if(e.target.id == 5){
                    const note = sounds(`G${low}`)
                return note.getSound()
                    // play KeyG
                }
                if(e.target.id == 6){
                    const note = sounds(`A${low}`)
                return note.getSound()
                    // play KeyA
                }
                if(e.target.id == 7){
                    const note = sounds(`B${low}`)
                return note.getSound()
                    // play KeyB
                }
                
        }
        if(e.target.dataset.set == "medium"){
            if(e.target.id == 1){
                const note = sounds(`C${medium}`)
                return note.getSound()
                }
                if(e.target.id == 2){
                    const note = sounds(`D${medium}`)
                return note.getSound()
                    // play KeyD
                }
                if(e.target.id == 3){
                    const note = sounds(`E${medium}`)
                return note.getSound()
                    // play KeyE
                }
                if(e.target.id == 4){
                    const note = sounds(`F${medium}`)
                return note.getSound()
                    // play KeyF
                }
                if(e.target.id == 5){
                    const note = sounds(`G${medium}`)
                return note.getSound()
                    // play KeyG
                }
                if(e.target.id == 6){
                    const note = sounds(`A${medium}`)
                return note.getSound()
                    // play KeyA
                }
                if(e.target.id == 7){
                    const note = sounds(`B${medium}`)
                return note.getSound()
                    // play KeyB
                }
        }
        if(e.target.dataset.set == "high"){
            if(e.target.id == 1){
                const note = sounds(`C${high}`)
                return note.getSound()
                }
                if(e.target.id == 2){
                    const note = sounds(`D${high}`)
                return note.getSound()
                    // play KeyD
                }
                if(e.target.id == 3){
                    const note = sounds(`E${high}`)
                return note.getSound()
                    // play KeyE
                }
                if(e.target.id == 4){
                    const note = sounds(`F${high}`)
                return note.getSound()
                    // play KeyF
                }
                if(e.target.id == 5){
                    const note = sounds(`G${high}`)
                return note.getSound()
                    // play KeyG
                }
                if(e.target.id == 6){
                    const note = sounds(`A${high}`)
                return note.getSound()
                    // play KeyA
                }
                if(e.target.id == 7){
                    const note = sounds(`B${high}`)
                return note.getSound()
                    // play KeyB
                }
        }
            
       /*if(e.target.id !== Number){
        const note = sounds("B0")
        return note.getSound()
       }*/



    })
}

export default pianoClicks