const form = document.getElementById ('form-validar');


function validaNumero(Valor_A, Valor_B) {
    return Valor_B > Valor_A;
    
}

form.addEventListener('submit', function(e) { 
    let formEValid 
    e.preventDefault();


    const Valor_A = document.getElementById ('campoA').value;
    const Valor_B = document.getElementById ("campoB").value;
    const MensagemSucesso = `É Valido, valor B: ${Valor_B} é maior que o valor A: ${Valor_A}`;

formEValid = validaNumero(Valor_A, Valor_B)
if (formEValid){
    alert (MensagemSucesso);

    Valor_A.value = " ";
    Valor_B.value - " ";
} else if (Valor_B == Valor_A){
    alert('Não é valido pois B é igual A!')
} else {
    alert('não é valido pois A é maior que B!')
}
})

console.log(form)