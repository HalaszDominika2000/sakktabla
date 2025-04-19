
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