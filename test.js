const mobile = document.getElementById("mobile-nav");
const header = document.getElementById("header");
const nav = document.getElementById("nav");

mobile.onclick = function() {
    header.style.height = '200px';
    nav.style.display = 'block';
}