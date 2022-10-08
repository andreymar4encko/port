const acardeonBtn =document.querySelectorAll('.feature__link ')
console.log(acardeonBtn)


acardeonBtn.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{

        acardeonBtn.forEach((button)=>{
            button.classList.remove('feature__link_active')
            button.nextElementSibling.classList.add('hidden')
        })
       btn.classList.toggle('feature__link_active')
       btn.nextElementSibling.classList.toggle('hidden')
    })
})