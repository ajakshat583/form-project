function back(color) {
    document.body.style.backgroundColor = color;
}

function submit() {
    alert("Registered successfully!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";
}

function lgn() {
    alert("Welcome to the login page!");
    document.getElementById("form2").style.display = 'block';
    document.getElementById("form1").style.display = 'none';
}

function loy() {
    alert("Logged in successfully!");
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
}

function su() {
    alert("Please register yourself!");
    document.getElementById("form1").style.display = "block";
    document.getElementById("form2").style.display = "none";
}