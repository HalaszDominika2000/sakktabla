
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
                KEP.src="./feherparasztbabu.png"
                KEP.alt="feherbabu"
                KEP.style.height="100%"
                KEP.style.width="100%"
                BABUK.appendChild(KEP)
            }
        })
    });
    

    
}