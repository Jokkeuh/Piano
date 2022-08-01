
const pianoKeys  =()=>{
    const KeyC = document.createElement("div")
    const KeyD = document.createElement("div")
    const KeyE = document.createElement("div")
    const KeyF = document.createElement("div")
    const KeyG = document.createElement("div")
    const KeyA = document.createElement("div")
    const KeyB = document.createElement("div")

    const KeyCsharp = document.createElement("div")
    const KeyDsharp = document.createElement("div")
    const KeyFsharp = document.createElement("div")
    const KeyGsharp = document.createElement("div")
    const KeyAsharp = document.createElement("div")

    const Keys = [KeyC, KeyD, KeyE, KeyF, KeyG, KeyA, KeyB]
    const blackKeys = [KeyCsharp, KeyDsharp, KeyFsharp, KeyGsharp, KeyAsharp]

    function fillKeys(inWhatKey){
        const pianoContainer = document.getElementById("pianoKeys")
        let i = 0
        Keys.forEach(key => {
            i++
            pianoContainer.appendChild(key)
            key.setAttribute("class", "key")
            key.setAttribute("id", `${i}`)
            key.setAttribute("data-set", `${inWhatKey}`)
        });
        
    } 
    function fillBlackKeys(inWhatKey){
        const pianoContainer = document.getElementById("pianoBlackKeys")
        let i = 0
        blackKeys.forEach(key => {
            i++
            pianoContainer.appendChild(key)
            key.setAttribute("class", "key")
            key.setAttribute("id", `Black${i}`)
            key.setAttribute("data-set", `${inWhatKey}`)
        });

    }
    
    
    
    
    
    
    return {fillKeys,fillBlackKeys}
}


export default pianoKeys