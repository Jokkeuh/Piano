
const activecolor = (key) =>{
   setTimeout(() => {
    let id = key.id
    if(id.includes("Black")){
        key.style.backgroundColor = "black"
    }else{
        key.style.backgroundColor = "white"
    }
    
    key.dataset.status = "inactive"
    
   }, 500);
   
}

export default activecolor