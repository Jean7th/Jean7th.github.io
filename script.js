// Dark mode Function
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Select the full-name from HTML
const fullName = document.querySelector('#full-name');

// Add eventListener to full-name
fullName.addEventListener('click', changeName);

//Change Name Language
function changeName() {
    if (fullName.innerText == "Jirat Innkaew")
        fullName.innerText = "จิรัฏฐ์ อินทร์แก้ว";
    else fullName.innerText = "Jirat Innkaew";
    
}



