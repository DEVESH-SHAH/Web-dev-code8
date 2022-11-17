function showModal() {
    document.querySelector('.background').classList.add('showbackground');
    document.querySelector('.Loginform').classList.add('showLoginform');
}
var btnlogin = document.querySelector(".btn-login");
btnlogin.addEventListener("click", showModal);
function closeModal() {
    document.querySelector('.background').classList.remove('showbackground');
    document.querySelector('.Loginform').classList.remove('showLoginform');
}
var close = document.querySelector('.Loginform span');
close.addEventListener("click", closeModal); 