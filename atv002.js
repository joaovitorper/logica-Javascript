function calcularMedia() {
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
    } else {
        let media = (numero1 + numero2) / 2;
        document.getElementById("resultado").textContent = `A média é: ${media.toFixed(2)}`;
    }    
}