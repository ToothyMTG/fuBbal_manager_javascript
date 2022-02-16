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
    managername.id = 'ngdomag'
    managername.onkeydown = () => {
        event.stopPropagation()
    }
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
    teamlist.id = 'teamlist'
    teamlist.style.overflow = 'auto'
    teamlist.style.marginTop = '10%'
    teamlist.style.textAlign = 'center'
    let seekpat = ' ' + ldb.rank + ' '
    let teampick = Teams.filter(x => x.includes(seekpat)).sort(() => Math.random() - 0.5)
    //console.log(teampick)
    let blank = document.createElement('option')
    blank.style.display = "none"
    teamlist.appendChild(blank)
    for (let i = 0;i < 5;i++) {
        let tp = teampick[i].split(' ')
        let option = document.createElement('option')
        option.style.backgroundColor = tp[6]
        option.style.color = tp[7]
        option.style.height = '10%'
        option.style.textAlign = 'center'
        option.value = tp[0]
        option.innerHTML = tp[0] +' | '+ tp[4] +' | A:'+ tp[1] +' | M:'+ tp[2] +' | D:'+ tp[3]
        teamlist.appendChild(option)
    }
    teamlist.onchange = function() {
        let temp = Teams.filter(x => x.includes(teamlist.value))[0].split(' ')
        teamlist.style.color = temp[7]
        teamlist.style.backgroundColor = temp[6]
    }
    //
    let startgame = document.createElement('button')
    startgame.innerHTML = "Start Game"
    startgame.classList.add('boxlogin')
    startgame.id = 'start_game'
    startgame.style.marginTop = "8%"
    //
    ngsel.innerHTML = ''
    ngsel.appendChild(teamlist)
    ngsel.appendChild(managername)
    ngsel.appendChild(rankinfo)
    ngsel.appendChild(startgame)
    //
    startgame.onclick = (m,t,r) => {
        if (managername.value == '') {
            managername.placeholder = 'Name cannot be empty'
            return
        }
        if (teamlist.value == '') {
            teamlist.focus()
            return
        }
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
        ldb.winners = []
        document.getElementById('loginbox').style.display = 'none'
        document.getElementById('menubox').style.display = 'block'
        document.getElementById('infofield').style.display = 'block'
        document.getElementById('databox').style.display = 'block'
        document.getElementById('dataright').innerHTML = ''
        document.getElementById('dataleft').innerHTML = ''
        document.getElementById('datatop').innerHTML = ''
        document.getElementById('runfixture').style.display = 'block'
        generate_achievements (r,ldb.my_team[0],ldb.my_league,ldb.my_playoffs,'my')
        document.getElementById('season').innerHTML = "Year " + ldb.year + " | Fixture " + (ldb.fxt)
        document.getElementById('manager').innerHTML = ldb.manager
    }
}
//New Game button
window.addEventListener('keydown', function (e) {
    if ((e.key === "n") && (newgame.style.display !== "none")) {
        ngdo ()
        this.document.getElementById('teamlist').focus()
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
    lgsel.innerHTML = ''
    let ldsel = document.createElement('select')
    ldsel.style.width = '80%'
    ldsel.style.marginLeft = '10%'
    ldsel.style.marginTop = '5%'
    ldsaves = JSON.parse(localStorage.SAVES)
    let blank = document.createElement('option')
    blank.style.display = "none"
    ldsel.appendChild(blank)
    for (let i = 0; i < ldsaves.length; i++) {
        let ldopt = document.createElement('option')
        ldopt.innerHTML = ldsaves[i]
        ldopt.value = ldsaves[i]
        ldsel.appendChild(ldopt)
    }
    lgsel.appendChild(ldsel)
    ldsel.onchange = () => {
        lgsel.innerHTML = ''
        lgsel.appendChild(ldsel)
        ldsel.focus()
        let oper = ldsel.value
        let tempdet = JSON.parse(localStorage[oper])
        //console.log(tempdet)
        let ldtim = document.createElement('h3')
        ldtim.innerHTML = tempdet.my_team[0]
        ldtim.style.backgroundColor = tempdet.my_team[6]
        ldtim.style.color = tempdet.my_team[7]
        ldtim.style.textAlign = 'center'
        ldtim.style.width = '80%'
        ldtim.style.marginLeft = '10%'
        lgsel.appendChild(ldtim)
        let ldfix = document.createElement('h4')
        ldfix.innerHTML = 'Fixture ' + tempdet.fxt
        ldfix.style.textAlign = 'center'
        lgsel.appendChild(ldfix)
        let ldyr = document.createElement('h4')
        ldyr.innerHTML = 'Year ' + tempdet.year
        ldyr.style.textAlign = 'center'
        lgsel.appendChild(ldyr)
        let ldbut = document.createElement('button')
        ldbut.innerHTML = 'Load Game'
        ldbut.value = ldsel.value
        ldbut.classList.add('loadbut')
        ldbut.onclick = () => {
            load_game(ldbut.value)
        }
        lgsel.appendChild(ldbut)
    }
    ldsel.focus()
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

function load_game (s) {
    //console.log(s)
    ldb = JSON.parse(localStorage[s])
    document.getElementById('matchbox').style.display = 'none'
    populate_tactics ()
    document.getElementById('settings').style.display = "none"
    document.getElementById('loginbox').style.display = 'none'
    document.getElementById('menubox').style.display = 'block'
    document.getElementById('infofield').style.display = 'block'
    document.getElementById('databox').style.display = 'block'
    document.getElementById('dataright').innerHTML = ''
    document.getElementById('dataleft').innerHTML = ''
    document.getElementById('datatop').innerHTML = ''
    document.getElementById('runfixture').style.display = 'block'
    document.getElementById('new_season').style.display = 'none'
    document.getElementById('manager').innerHTML = ldb.manager
    let teamname = document.getElementById('teamname')
    teamname.innerHTML = ldb.my_team[0]
    teamname.style.backgroundColor = ldb.my_team[6]
    teamname.style.color = ldb.my_team[7]
    document.getElementById('pbox1').innerHTML = "Atk<br>" + ldb.my_team[1]
    document.getElementById('pbox2').innerHTML = "Mid<br>" + ldb.my_team[2]
    document.getElementById('pbox3').innerHTML = "Def<br>" + ldb.my_team[3]
    document.getElementById('season').innerHTML = "Year " + ldb.year + " | Fixture " + (ldb.fxt)
}
