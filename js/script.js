// ini javascript 
// untuk change name js
function replaceName () {
    let user = prompt("Silahkan diisi nama Anda!", "");
    document.getElementById("home-user").innerHTML = user
}

document.getElementById("CYN").addEventListener("click", function () {
    replaceName ();
})

// untuk page home images slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("photo-banner");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000);

// untuk message us form
function validateForm () {
    const name = document.forms["message-form"]["form-nama"].value;
    const birthDate = document.forms["message-form"]["form-tgllahir"].value;
    const gender = document.forms["message-form"]["jk"].value;
    const messages = document.forms["message-form"]["pesan"].value;

    if (name == ""|| birthDate == "" || gender == "" || messages == "") {
        alert("Required to fill in");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI (name, birthDate, gender, messages) {
    document.getElementById("div-nama").innerHTML = name;
    document.getElementById("div-tgllahir").innerHTML = birthDate;
    document.getElementById("div-jk").innerHTML = gender;
    document.getElementById("div-pesan").innerHTML = messages;
}
