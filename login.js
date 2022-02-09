let newgame = document.getElementById('newgame')
let loadgame = document.getElementById('loadgame')
let exitgame = document.getElementById('exitgame')
let ngsel = document.getElementById('ngsel')
let lgsel = document.getElementById('lgsel')

function ngdo () {
    newgame.style.display = 'none'
    ngsel.style.display = 'block'
    loadgame.style.display = 'block'
    lgsel.style.display = 'none'
    //
    let managername = document.createElement('input')
    managername.type = 'text'
    managername.classList.add('boxlogin')
    managername.placeholder = "Please enter your name"
    managername.style.marginTop = "8%"
    //--
    ldb.rank = 2
    let rankinfo = document.createElement('p')
    rankinfo.classList.add('boxlogin')
    rankinfo.innerHTML = "Your manager rank is " + ldb.rank
    rankinfo.style.margin = '2%'
    //
    let teamlist = document.createElement('select')
    teamlist.style.width = '100%'
    teamlist.style.float = 'left'
    teamlist.size = '5'
    teamlist.id = 'teamlist'
    teamlist.style.overflow = 'auto'
    teamlist.style.verticalAlign = 'middle'
    let seekpat = ' ' + ldb.rank + ' '
    let teampick = Teams.filter(x => x.includes(seekpat)).sort(() => Math.random() - 0.5)
    //console.log(teampick)
    for (let i = 0;i < 5;i++) {
        let tp = teampick[i].split(' ')
        let option = document.createElement('option')
        option.style.backgroundColor = tp[6]
        option.style.color = tp[7]
        //option.style.height = '10%'
        option.style.textAlign = 'center'
        option.style.verticalAlign = 'middle'
        option.value = tp[0]
        option.innerHTML = tp[0] +' | '+ tp[4] +' | A:'+ tp[1] +' | M:'+ tp[2] +' | D:'+ tp[3]
        teamlist.appendChild(option)
    }
    //
    let startgame = document.createElement('button')
    startgame.innerHTML = "Start Game"
    startgame.classList.add('boxlogin')
    startgame.id = 'start_game'
    startgame.style.marginTop = "8%"
    //
    ngsel.innerHTML = ''
    ngsel.appendChild(managername)
    ngsel.appendChild(rankinfo)
    ngsel.appendChild(teamlist)
    ngsel.appendChild(startgame)
    //
    startgame.onclick = (m,t,r) => {
        m = managername.value
        t = teamlist.value
        r = ldb.rank
        document.getElementById('matchbox').style.display = 'none'
        assign_team(t);
        populate_tactics ()
        generate_season ()
        document.getElementById('settings').style.display = "none"
        ldb.Results = []
        ldb.Tables = []
        ldb.fxt = 0
        ldb.year = 2022
        ldb.manager = m
        document.getElementById('loginbox').style.display = 'none'
        document.getElementById('menubox').style.display = 'block'
        document.getElementById('infofield').style.display = 'block'
        document.getElementById('databox').style.display = 'block'
        generate_achievements ()
    }
}
//New Game button
window.addEventListener('keydown', function (e) {
    if ((e.key === "n") && (newgame.style.display !== "none")) {
        ngdo ()
    }
})
newgame.addEventListener('click', function (e) {
    if (newgame.style.display !== "none") {
        ngdo ()
    }
})

function lgdo () {
    newgame.style.display = 'block'
    ngsel.style.display = 'none'
    loadgame.style.display = 'none'
    lgsel.style.display = 'block'
}
//Load Game button
window.addEventListener('keydown', function (e) {
    if ((e.key === "l") && (loadgame.style.display !== "none")) {
        lgdo ()
    }
})
loadgame.addEventListener('click', function (e) {
    if (loadgame.style.display !== "none") {
        lgdo ()
    }
})
