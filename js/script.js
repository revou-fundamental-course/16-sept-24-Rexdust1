// ini javascript 

function replaceName () {
    let user = prompt("Silahkan diisi nama Anda!", "");
    document.getElementById("home-user").innerHTML = user
}

document.getElementById("CYN").addEventListener("click", function () {
    replaceName ();
})

document.getElementById

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