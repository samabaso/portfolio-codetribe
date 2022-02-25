const countdown = () => {
    const countDate = new Date("March 25, 2022 20:25:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;


    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minutes);
    const textSecond = Math.floor((gap % minutes) / seconds);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);


// const emailVal = document.getElementById("emailVal");
// const formButton = document.querySelector(".form__btn")
// const preText = document.querySelector(".preText");

// const validateIcon = document.querySelector(`.validateIcons`)
// console.log("here", validateIcon)

// //event listeners and keyup//
// emailVal.addEventListener("keyup", (e)=>{
//     const isValidEmail = emailVal.checkValidity()

//     if(isValidEmail){
//         preText.textContent = "Correct Email!"
//         preText.style.color ="green"
//         validateIcon.innerHTML = `<i class ='fas fa-check-circle'></i>`;
//         console.log( validateIcon.innerHTML)
//         validateIcon.style.color="green";

//     }else{
//         preText.textContent = " please provide a valid email!"
//         preText.style.color = "red"
//         validateIcon.innerHTML = `<i class = 'fas fa-exclamation-circle'></i>`;
//         validateIcon.style.color="red";
//         console.log('this is disabled', formButton.disabled)
//         formButton.classList.add('.invalidBtn')
//     }
// })



var hero = document.getElementById("hero");
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png"
        hero.src = "images/hero-desktop(2).jpg"
    }else{
        icon.src = "images/moon.png"
        hero.src = "images/hero-desktop.jpg"
    }
}

const toggle = document.getElementById('toggle');

const brandName = document.querySelector('.brand');

 toggle.addEventListener('click' , ()=>{
    toggle.classList.toggle('show');
    brandName.classList.toggle('show');
 });



