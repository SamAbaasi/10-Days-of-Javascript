var btn = document.createElement('button')
btn.innerHTML = 0
document.body.appendChild(btn)
btn.onclick = function(){
    btn.innerHTML++
}