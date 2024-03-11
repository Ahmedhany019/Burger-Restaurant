let btn = document.querySelector('.btn')
window.addEventListener('scroll', ()=>{
    if (window.scrollY >= 600){
        btn.style.display="block"
    }
    else{
        btn.style.display="none"
    }
})
btn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
