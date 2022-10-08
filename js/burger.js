const humburgerMenu = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu')
const menuList = document.querySelectorAll('.menu-list__item')

humburgerMenu.addEventListener('click',()=>{
    menu.classList.add('menu-active')
})
console.log(menuList)
menuList.forEach((link)=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('menu-active')
})
})
document.addEventListener('click', (event) =>{
   if( !(event.target.closest('.menu')||event.target.closest('.humburger-menu'))){
    menu.classList.remove('menu-active')
   }
})