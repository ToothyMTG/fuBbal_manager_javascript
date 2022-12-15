set_ap = 200 
ap_state = 0

function ap_start () {
    ap_loop = setInterval(() => {
        if (document.getElementById('match_runner').style.display == 'block') {
            match_runner()
        } else
        ap_stop ()
    },set_ap)
    ap_state = 1
}

function ap_stop() {
    ap_state = 0
    clearInterval(ap_loop)
}

document.onkeydown = x => {
    if (x.key == 'v') {
        if (ap_state == 1) {
            ap_stop () 
        } else {
            ap_start() 
        }
    }
}