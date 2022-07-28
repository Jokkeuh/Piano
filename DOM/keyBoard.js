import pianoClicks from "./pianoClicks.js"

const keyBoard =()=>{
    const keyContainer = document.getElementById("pianoKeys")
    let keys = keyContainer.childNodes
    const keyNote =["C","D","E","F","G","A","B"]
    
    const keyboard = document
    let keyPress = ""
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
                              "j":6,"k":7,"l":8,"m":9,"<":10,
                              "w":11,"x":12,"c":13,"v":14,"b":15,
                              "n":16,",":17,";":18,":":19,"!":20}
        if(keyPress !== null){
            
            if(keyPress){
                
                for(let key of Object.keys(keyBindings)){
                    if(key === keyPress){
                        
                        keys[keyBindings[key]].click()
                        keys[keyBindings[key]].style.backgroundColor ="red";
                        console.log(keys[keyBindings[key]])
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
        let delay = 0
        console.log(delay)
        while(delay < 1){
            setTimeout(() => {
                keys.forEach(element => {
                element.style.backgroundColor ="white"
                });
                console.log(delay)
            }, 280);
            delay++
        }
        
    }
    
    return {Keybind, createButtonForEach}
}

export default keyBoard