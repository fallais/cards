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


$.notify.defaults({
  autoHide: true
});

function copyToClipboard(value){
    console.log(value)
    navigator.clipboard.writeText(value).then(function() {
        $(".contact").notify("Copié !", { position:"top center", className:"success" });
        console.log(value, "has been copied");
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}