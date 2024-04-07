const drapDown = document.querySelectorAll(".drop-down-li"),
  arrow = document.querySelectorAll(".arrow"),
  listDrapdown = document.querySelectorAll(".drop-down-nav");
for (let i = 0; arrow.length > i; i++) {
    drapDown[i].addEventListener("click", () => {
      if (
        listDrapdown[i].classList.contains("play")
      ) {
        arrow[i].classList.remove("act");
        listDrapdown[i].classList.remove("play");
        console.log('3')
      } else {
        arrow[i].classList.add("act");
        listDrapdown[i].classList.add("play");
        console.log('4')
      }
    }
);
  }
const menu=document.querySelector('.menu'),
closeMenu = document.querySelector('.closes'),
list= document.querySelector('nav'),
bg= document.querySelector('.bg');

menu.addEventListener('click' , ()=>{
  list.classList.toggle('close')
  bg.classList.add('act')
})
closeMenu.addEventListener('click' , ()=>{
  list.classList.toggle('close')
  bg.classList.remove('act')
})