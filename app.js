function encrypt() {
    let text = document.getElementById("inputText").value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
}

function decrypt() {
    let text = document.getElementById("inputText").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}

function copyText() {
    let text = document.getElementById("outputText");
    text.select();
    text.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    alert("Texto copiado: " + text.value);
}

document.getElementById("inputText").addEventListener("focus", function() {
    if (this.value === "") {
        this.placeholder = "";
    }
});

document.getElementById("inputText").addEventListener("blur", function() {
    if (this.value === "") {
        this.placeholder = "Escribe tu texto aquí...";
    }
});
