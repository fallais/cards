$('document').ready(function(){
    new QRCode(document.getElementById("qrcode"),{ 
        text: "https://www.nextcard.fr/vcard/rhp56chb",
        width: 110,
        height: 110,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});