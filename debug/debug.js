function debug(x) {
    var div = document.createElement('div')
    div.style.width = '50vw'
    div.style.height = '100vh'
    div.style.backgroundColor = 'blue'
    div.style.color = 'white'
    div.style.opacity = '0.5'
    div.style.position = 'absolute'
    div.style.top = '0'
    div.style.left = '0'
    div.style.zIndex = 100
    div.innerHTML = JSON.stringify(x)
    document.body.appendChild(div)
}