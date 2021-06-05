/*---------------------메뉴바-----------------------*/

const Btn = document.querySelector('.navbar_btn');
const menu = document.querySelector('.navbar_menu');
const link = document.querySelector('.navbar_link');
const bgi =document.querySelector('.navbar');

Btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  link.classList.toggle('active');
  bgi.classList.toggle('active');
});

//-----------------------시계----------------------// 
function clock() {
  var time = new Date(),
      hours = time.getHours(),
      minutes = time.getMinutes(),
      seconds = time.getSeconds();
  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    
  function harold(standIn) {
      if (standIn < 10) {
        standIn = '0' + standIn
      }
      return standIn;
    }
}
setInterval(clock, 1000);

// 커서

let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove', cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}


window.addEventListener('click', () => {
  mouseCursor.style.animation = "clickevent 0.7s";
})

mouseCursor.addEventListener('animationend', () => {
  mouseCursor.style.animation = "none";
})