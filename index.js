const imgClick = document.getElementById("linker")
let counter = 0
const imgArr = ["./winter.jpeg", "./lente.jpeg", "./zomer.jpeg", "./herfst.jpeg"]



imgClick.addEventListener("click", () => {
    
    const linker = document.getElementById("linker").src.split("/").pop();
    const lente = imgArr[0].split("/").pop()
    if (linker == lente) {
        document.getElementById("rechter").src = ("./lammetjes.jpeg");
        document.getElementById("linker").src = imgArr[++counter];
        if(counter === 4) {
        document.getElementById("linker").src = ("./winter.jpeg");
        counter = 0;
        }
    } else {
        document.getElementById("linker").src = imgArr[++counter];
    if(counter === 4) {
        document.getElementById("linker").src = ("./winter.jpeg");
        counter = 0;
    }
    }
    
} )


