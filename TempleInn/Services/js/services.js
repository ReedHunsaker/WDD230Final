const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};




let form = document.getElementById("submitbtn")
form.addEventListener('click', function (e) {
    confirm("Thanks for contacting Us!");
    e.preventDefault()
    document.location.href = "missionary.html"
})