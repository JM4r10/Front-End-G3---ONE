import { valida } from "./validaciones.js";

// blur: quitar foco de el espacio o input
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
    input.addEventListener('blur',(input)=>{
        valida(input.target);
    });
});