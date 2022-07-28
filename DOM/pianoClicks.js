import sounds from "./sounds.js"

const pianoClicks =()=>{
    const GetPiano = document.getElementById("pianoKeys")
    
    GetPiano.addEventListener("click", (e)=>{
        e.preventDefault()
        const low = 2
        const medium = 3
        const high = 4
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