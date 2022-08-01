import activecolor from "./ActiveColor.js"

const keyBoard =()=>{
    const keyContainer = document.getElementById("pianoKeys")
    const BlackKeyContainer = document.getElementById("pianoBlackKeys")

    let keys = keyContainer.childNodes
    let blackKeys = BlackKeyContainer.childNodes
    const keyNote =["C","D","E","F","G","A","B"]
    
    const keyboard = document
    let keyPress = null
    function Keybind(){
        keyboard.addEventListener("keydown", (e)=>{
            keyPress = e.key
            playNote(keyPress)
            

            console.log(keyPress);
            return keyPress
        })
        

    }
    
    function createButtonForEach(){

        let i = 0;
        keys.forEach(key => {
            if(i >= 7){
               i = 0   
            }

            const keyButton = document.createElement("button")
            keyButton.setAttribute("id", "b" + key.id)
            key.appendChild(keyButton)
            key.innerHTML = keyNote[i]
            i++
        });

        
        return keys
    }
    

    function playNote(keyPress){
        

        const keyBindings = {"q":0,"s":1,"d":2,"f":3,"g":4,"h":5,
                              "j":6,"k":7,"l":8,"m":9,"ù":10,"<":11,
                              "w":12,"x":13,"c":14,"v":15,"b":16,
                              "n":17,",":18,";":19,":":20,"!":21}

        const blackKeyBindings = {"a":1,"z":2,"r":3,"t":4,"y":5}
        if(keyPress !== null){
            
            if(keyPress){


                for(let Bkey of Object.keys(blackKeyBindings)){
                    if(Bkey === keyPress){
                        blackKeys[blackKeyBindings[Bkey]].click()
                        blackKeys[blackKeyBindings[Bkey]].style.backgroundColor ="red";
                        blackKeys[blackKeyBindings[Bkey]].dataset.status ="active"
                        activecolor(blackKeys[blackKeyBindings[Bkey]])

                    }
                    
                }
                
                for(let key of Object.keys(keyBindings)){
                    if(key === keyPress){
                        
                        keys[keyBindings[key]].click()
                        keys[keyBindings[key]].style.backgroundColor ="red";
                        keys[keyBindings[key]].dataset.status ="active";
                        activecolor(keys[keyBindings[key]])

                    }
                    
                }
                
            }
    /*
            if(keyPress == "q"){
                
                keys[0].click()
                keys[0].style.backgroundColor ="red";
                console.log(keys[0])
            }
            if(keyPress == "s"){
                keys[1].click()
                keys[1].style.backgroundColor ="red";
                console.log(keys[1])
                
            }
            if(keyPress == "d"){
                keys[2].click()
                keys[2].style.backgroundColor ="red";
                console.log(keys[2])
                
            }
            if(keyPress == "f"){
                keys[3].click()
                keys[3].style.backgroundColor ="red";
                console.log(keys[3])
                
            }
            if(keyPress == "g"){
                keys[4].click()
                keys[4].style.backgroundColor ="red";
                console.log(keys[4])
                
            }
            if(keyPress == "h"){
                keys[5].click()
                keys[5].style.backgroundColor ="red";
                console.log(keys[5])
                
            }
            if(keyPress == "j"){
                keys[6].click()
                keys[6].style.backgroundColor ="red";
                console.log(keys[6])
                
            }
            if(keyPress == "k"){
                keys[7].click()
                keys[7].style.backgroundColor ="red";
                console.log(keys[7])
                
            }
            if(keyPress == "l"){
                keys[8].click()
                keys[8].style.backgroundColor ="red";
                console.log(keys[8])
                
            }
            if(keyPress == "m"){
                keys[9].click()
                keys[9].style.backgroundColor ="red";
                console.log(keys[9])
                
            }*/
        }
        
    }
    
    return {Keybind, createButtonForEach}
}

export default keyBoard