const imgClick = document.getElementById("linker")
let counter = 0
const imgArr = ["./winter.jpeg", "./lente.jpeg", "./zomer.jpeg", "./herfst.jpeg"]



imgClick.addEventListener("click", () => {
    
    const linker = document.getElementById("linker").src;
    const lente = imgArr[1]
    
    if (linker === lente) {
        console.log("gelukt")
        document.getElementById("rechter").src = ("./lammetjes.jpeg");
        document.getElementById("linker").src = imgArr[++counter];
        if(counter === 4) {
        document.getElementById("linker").src = ("./winter.jpeg");
        counter = 0;
        }
    } else {
        console.log(linker)
        document.getElementById("linker").src = imgArr[++counter];
    if(counter === 4) {
        document.getElementById("linker").src = ("./winter.jpeg");
        counter = 0;
    }
    }
    
} )


