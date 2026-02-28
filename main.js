const search = document.querySelector('.search-box input');
const container = document.querySelector('.images');

search.addEventListener('keyup', () => {
    let searchValue = search.value.trim().toLowerCase();
    const boxes = document.querySelectorAll('.image-box');

    boxes.forEach((image) => {
        let imageName = image.dataset.name.toLowerCase();
        
        if (imageName.includes(searchValue)) {
            image.removeAttribute('data-status');
        } else {
            image.setAttribute('data-status', 'hidden');
        }
    });
});

function autoShuffle() {
    const boxes = Array.from(document.querySelectorAll('.image-box'));
    for (let i = boxes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
    }
    boxes.forEach(box => container.appendChild(box));
}

window.addEventListener('DOMContentLoaded', autoShuffle);

// Navbar logic
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Add this to the bottom of main.js
function copyPinLink(fileName) {
    // 1. Change 'yourusername' and 'your-repo' to your actual GitHub info
    const baseUrl = "https://yourusername.github.io/your-repo/plain%20colors/";
    
    const fullLink = baseUrl + fileName;

    // This part actually copies the text
    navigator.clipboard.writeText(fullLink).then(() => {
        alert("Copied for Pinterest: " + fullLink);
    });
}



function copyPinLink(fileName) {
    // 1. YOUR GITHUB URL (Ensure it ends with /plain%20colors/)
    const baseUrl = "https://yourusername.github.io/your-repo/plain%20colors/";
    const fullLink = baseUrl + fileName;

    // 2. Copy to clipboard
    navigator.clipboard.writeText(fullLink).then(() => {
        showToast(fileName + " copied!");
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}









