let panels=document.querySelectorAll('.panel');
panels.forEach((item)=>{
    item.addEventListener('click',()=>{
        removeActive()
        item.classList.add('active');
    })
})
function removeActive(){
    panels.forEach((panel)=>{
       panel.classList.remove('active')
    })
}