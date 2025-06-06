let qrcode = new QRCode(
    document.querySelector(".qrcode")
);
qrcode.makeCode("I'm gonna make him an offer he can't refuse.");
function generateQr() {
    if(document.querySelector("input").value === "" ||document.querySelector("input").value === " "){
        alert("Input field can not be blank!");
    }
    else{
        qrcode.makeCode(document.querySelector("input").value);
    }
}
