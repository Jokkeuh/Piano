
const pianoKeys  =()=>{
    const KeyC = document.createElement("div")
    const KeyD = document.createElement("div")
    const KeyE = document.createElement("div")
    const KeyF = document.createElement("div")
    const KeyG = document.createElement("div")
    const KeyA = document.createElement("div")
    const KeyB = document.createElement("div")

    const Keys = [KeyC, KeyD, KeyE, KeyF, KeyG, KeyA, KeyB]

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
        
    } return {fillKeys}
}


export default pianoKeys