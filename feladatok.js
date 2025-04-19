
export function tablaKinezet(){
    const TABLAELEMEK=document.querySelector(".tarolo")
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const MEZO=document.createElement("div") /*Elemet hoz létre ami egy div*/
            MEZO.className=(i+j)%2===0 ? "vilagos":"sotet" /*Termális operátor*/
            TABLAELEMEK.appendChild(MEZO) /*Beletesszük az adatokat*/
             
        }
        
    }
}
export function babukBeszurasa() {
    const BABUK=document.querySelectorAll(".tarolo>div")
    BABUK.forEach((BABUK) => {
        BABUK.addEventListener("click", function(){
            if (!BABUK.querySelector("img")) { /*megnézzük hogy a bábukban van e kép diven belül*/
                const KEP=document.createElement("img")
                if (BABUK.classList.contains("sotet")) { /*Ebben az estben a diveket nézi. classList: megnézi a bábunak a classanak hogy mi van rajta hogy világos vagy sötét. contains: doboz tároló: ennek a tárolónak milyen classa van*/
                    KEP.src="./feherparasztbabu.png"
                    KEP.alt="feherbabu"
                } else {
                    KEP.src="./feketeparasztbabu.jpg"
                    KEP.alt="feketebabu"
                }
                /*KEP.src="./feherparasztbabu.png"
                KEP.alt="feherbabu"*/
                KEP.style.height="70%"
                KEP.style.width="70%"
                BABUK.appendChild(KEP)
            }
        })
    });
    

    
}