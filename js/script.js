document.getElementById("contact-button").addEventListener("click", tampilkanContact);
document.getElementById("backtotop-button").addEventListener("click", scrollKeAtas);
document.getElementById("submit-button").addEventListener("click", cekInputForm);

function scrollKeAtas(){
    document.getElementById("top").scrollIntoView({behavior: "smooth", block: "start"});
};

function cekNama() {
    let nama = document.getElementById("form-nama").value;
    if (nama.length < 1) {
        window.alert("Mohon isi nama Anda.");
        return false;
    } else if (nama.length > 10) {
        window.alert("Mohon tuliskan nama tidak lebih dari 10 karakter.");
        return false;
    }

    return true;
};

function cekEmail() {
    let email = document.getElementById("form-email").value;
    if (email.length < 1) {
        window.alert("Mohon isi E-mail.");
        return false;
    } else if (email.indexOf("@") == -1) {
        window.alert("Mohon isi E-mail dengan format yang benar");
        return false;
    }

    return true;
};

function cekMessage() {
    let message = document.getElementById("form-message").value;
    if (message.length < 1) {
        window.alert("Mohon isi pesan Anda.");
        return false;
    }

    return true;
};

function tombolGagalSubmit() {
    let tombol = document.getElementById("submit-button");
    tombol.style.backgroundColor = "red";
    tombol.style.boxShadow = "0 5px #8C2828";
    tombol.value = "Mohon cek form kembali";
}

function tombolBerhasilSubmit() {
    let tombol = document.getElementById("submit-button");
    tombol.style.backgroundColor = "#63BD6E";
    tombol.style.boxShadow = "0 5px #218613";
    tombol.value = "Berhasil submit";
}

function tutupContact() {
    $("#contact").fadeOut("slow");
};

function bersihkanContact() {
    document.getElementById("form-nama").value = "";
    document.getElementById("form-email").value = "";
    document.getElementById("form-message").value = "";
};

function cekInputForm() {
    let ceknama = cekNama();
    let cekemail = cekEmail();
    let cekmess = cekMessage();

    if (ceknama == false || cekemail == false || cekmess == false) {
        tombolGagalSubmit();
    } else {
        tombolBerhasilSubmit();
        window.setTimeout(tutupContact(),1000);
        bersihkanContact();
    }
};

function tampilkanContact() {
    $("#contact").fadeIn("slow");
    document.getElementById("contact-button").addEventListener("click", hilangkanContact);
    document.getElementById("contact-button").removeEventListener("click", tampilkanContact);
};

function hilangkanContact() {
    $("#contact").fadeOut("slow");
    document.getElementById("contact-button").addEventListener("click", tampilkanContact);
    document.getElementById("contact-button").removeEventListener("click", hilangkanContact);
}