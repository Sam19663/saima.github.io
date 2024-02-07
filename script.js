/**
 * Code for sticky header
 */
const header  = document.querySelector("header");

window.addEventListener ("scroll", function() {

    header.classList.toggle ("sticky", window.scrollY > 120);

});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

/** About us section */

const skillTab = document.getElementById('Skills');
const EduTab = document.getElementById('Education');
const ExpTab = document.getElementById('Experience');
skillTab.addEventListener('click',function(){
    EduTab.style.add('hidden');
    ExpTab.style.add('hidden')
})