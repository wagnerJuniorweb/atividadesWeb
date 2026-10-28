const parametrosUrl = new URLSearchParams(window.location.search)
const n1 = parametrosUrl.get("numero1");
const n2 = parametrosUrl.get("numero2");
const operacao = parametrosUrl.get("operacao");

const divResultado = document.getElementById("painel-resultado");

if(n1 === null || n2 === null || operacao === null || n1 === '' || n2 === '' || operacao === ''){
    console.error("null values");
    divResultado.innerHTML = '<strong>Error: null value received</strong>';
    divResultado.style.borderLeftColor = "red";
}else if(isNaN(n1) || isNaN(n2)) {
    console.error("Not a number");
    divResultado.innerHTML = '<strong>Error: Not a number</strong>';
    divResultado.style.borderLeftColor = "red";
}else{
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    let resultado = 0;
    //let simbolo = ''; ?

    switch(operacao){
        case "soma":
            resultado = num1 + num2;
            divResultado.innerHTML = `<strong>${num1} + ${num2} = ${resultado}</strong>`;
            break;

        case "subtracao":
            resultado = num1 - num2;
            divResultado.innerHTML = `<strong>${num1} - ${num2} = ${resultado}</strong>`;
            break;

        case "multiplicacao":
            resultado = num1 * num2;
            divResultado.innerHTML = `<strong>${num1} x ${num2} = ${resultado}</strong>`;
            break;
        
        case "divisao":
            if(num1 == 0 || num2 == 0){
                divResultado.innerHTML = '<strong>Division by zero</strong>';
                divResultado.style.borderLeftColor = "red";
                console.error("Zero division");
            } else {
                resultado = num1 / num2;
                divResultado.innerHTML = `<strong>${num1} / ${num2} = ${resultado}</strong>`;
            }
            break;

        default:
            console.error("invalid operation");
            divResultado.innerHTML = '<strong>Error: invalid operation</strong>';
            divResultado.style.borderLeftColor = "red";
    }
}