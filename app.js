function criptografartexto() {
    let texto = document.getElementById("texto__para__criptografar").value;


    let textoCriptografado = texto
        .replace(/a/g, "pqs")
        .replace(/e/g, "kgl")
        .replace(/i/g, "wtg")
        .replace(/o/g, "pqb")
        .replace(/u/g, "fxz");

    document.getElementById("output_texto").innerHTML = '<textarea readonly class = "saidadetexto" id="texto__criptografado">' + textoCriptografado + '</textarea>' + '<button class="button_copiar" id="copiar" onclick="copiar()"> Copiar </button>'; 
}

function descriptografar() {
    let texto = document.getElementById("texto__para__criptografar").value;

    let textoCriptografado = texto
        .replace(/pqs/g, "a")
        .replace(/kgl/g, "e")
        .replace(/wtg/g, "i")
        .replace(/pqb/g, "o")
        .replace(/fxz/g, "u");

        document.getElementById("output_texto").innerHTML = '<textarea readonly class = "saidadetexto" id="texto__criptografado">' + textoCriptografado + '</textarea>' + '<button class="button_copiar" id="copiar" onclick="copiar()"> Copiar </button>';     
}

function copiar() {
    let textocopiado = document.getElementById("texto__criptografado");

    textocopiado.select();
    document.execCommand('copy');
    alert("Texto copiado com sucesso");
}