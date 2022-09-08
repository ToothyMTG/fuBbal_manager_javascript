function mc_render () {
    var datatop = document.getElementById('datatop')
    var dataleft = document.getElementById('dataleft')
    var dataright = document.getElementById('dataright')
    datatop.innerHTML = ''
    datatop.style.display = 'block'
    dataleft.style.display = 'block'
    dataleft.innerHTML = ''
    dataright.innerHTML = ''
    document.getElementById('matchbox').style.display = 'none'
    document.getElementById('databox').style.height = "75%"

    var nc_gamesbut = document.createElement('button')
    nc_gamesbut.innerHTML = 'Match Analysis (7)'
    nc_gamesbut.classList.add('nc-top-but')
    nc_gamesbut.id = 'nc-gamesbut'
    nc_gamesbut.onclick = () => {mc_getresults()}
    datatop.appendChild(nc_gamesbut)

    var nc_tactbut = document.createElement('button')
    nc_tactbut.innerHTML = 'My Old Teams (8)'
    nc_tactbut.classList.add('nc-top-but')
    nc_tactbut.id = 'nc-tactbut'
    nc_tactbut.onclick = () => {mc_renderoldteams()}
    datatop.appendChild(nc_tactbut)

    //var nc_historybut = document.createElement('button')
    //nc_historybut.innerHTML = 'History (9)'
    //nc_historybut.classList.add('nc-top-but')
    //nc_historybut.id = 'nc-historybut'
    //datatop.appendChild(nc_historybut)
    //mc_getresults ()
}

function mc_getresults() {
    var datatop = document.getElementById('datatop')
    var dataleft = document.getElementById('dataleft')
    var dataright = document.getElementById('dataright')
    dataleft.innerHTML = ''
    dataright.innerHTML = ''
    for (let i = 0; i < ldb.mc.length; i++) {
        var teamdata = []
        teamdata[1] = Teams.filter(x => x.includes(ldb.mc[i][1].id))[0].split(' ')
        teamdata[2] = Teams.filter(x => x.includes(ldb.mc[i][2].id))[0].split(' ')
        var div = document.createElement('div')
        div.classList.add('mc-match-div')
        div.id = 'mc-div-' + i
        div.tabIndex = '-1'
        div.style.marginTop = '1%'
        var teamdiv = []
        for (let i = 1; i < 3; i++) {
            teamdiv[i] = document.createElement('div')
            teamdiv[i].innerHTML = teamdata[i][0]
            teamdiv[i].classList.add('mc-team-div')
            teamdiv[i].style.backgroundColor = teamdata[i][6]
            teamdiv[i].style.color = teamdata[i][7]    
        }
        var resultdiv = document.createElement('div')
        resultdiv.innerHTML = ldb.mc[i][1].g + ' : ' + ldb.mc[i][2].g
        resultdiv.classList.add('mc-result-div')
        if (ldb.mc[i][0].id == ldb.mc[i][0].w) {resultdiv.classList.add('good')}
        if (ldb.mc[i][0].id != ldb.mc[i][0].w) {
            if (ldb.mc[i][0].w == 0) {resultdiv.classList.add('neutral')} 
            else {resultdiv.classList.add('bad')}
        }
        div.appendChild(teamdiv[1])
        div.appendChild(resultdiv)
        div.appendChild(teamdiv[2])
        div.onclick = () => {mc_getresultdata('mc-div-'+i)}
        dataleft.appendChild(div)
    }
    dataleft.scrollTop = dataleft.scrollHeight
    mc_searchmachine ()
}

function mc_getresultdata(x) {
    var dataright = document.getElementById('dataright')
    dataright.innerHTML = ''
    mc_searchmachine ()
    dataright.style.color = 'white'
    var a = document.getElementById(x)
    var id = Number(a.id.split('-')[2])
    var data = ldb.mc[id]
    var team = []
    team[1] = Teams.filter(x => x.includes(ldb.mc[id][1].id))[0].split(' ')
    team[2] = Teams.filter(x => x.includes(ldb.mc[id][2].id))[0].split(' ')
    var color = []
    color[1] = [team[1][6],team[1][7]]
    if (team[1][6] == team[2][6]) {
        color[2] = [team[2][7],team[2][6]]
    } else {
        color[2] = [team[2][6],team[2][7]]
    }
    //console.log(data,team1,team2)
    if (data[0].t != undefined) {
        var gametypelabel = document.createElement('div')
        gametypelabel.innerHTML = 'Game type: ' + fn[data[0].t]
        gametypelabel.style.width = '100%'
        gametypelabel.classList.add('mc-results-box')
        dataright.appendChild(gametypelabel)    
    }
    var poslabel = document.createElement('div')
    poslabel.innerHTML = 'Posession'
    poslabel.style.width = '100%'
    poslabel.classList.add('mc-results-box')
    var posdata = document.createElement('div')
    posdata.style.height = '3%'
    posdata.style.width = '100%'
    posdata.classList.add('mc-results-box')
    var posdatax = []
    for (let i = 1; i < 3; i++) {
        posdatax[i] = document.createElement('div')
        posdatax[i].style.width = Math.floor(data[i].p / data[0].p * 100) + '%'
        posdatax[i].style.height = '100%'
        posdatax[i].classList.add('mc-results-box')
        posdatax[i].style.backgroundColor = color[i][0]
        posdatax[i].style.color = color[i][1]
        posdatax[i].innerHTML = data[i].pp + '%'
        posdata.appendChild(posdatax[i])    
    }
    var chanlabel = document.createElement('div')
    chanlabel.innerHTML = 'Chances'
    chanlabel.style.width = '100%'
    chanlabel.classList.add('mc-results-box')
    var chandata = document.createElement('div')
    chandata.style.height = '3%'
    chandata.style.width = '100%'
    chandata.classList.add('mc-results-box')
    var chandatax = []
    for (let i = 1; i < 3; i++) {
        chandatax[i] = document.createElement('div')
        chandatax[i].style.width = Math.floor(data[i].c / data[0].c * 100) + '%'
        chandatax[i].style.height = '100%'
        chandatax[i].classList.add('mc-results-box')
        chandatax[i].style.backgroundColor = color[i][0]
        chandatax[i].style.color = color[i][1]
        chandatax[i].innerHTML = data[i].cp + '%'
        chandata.appendChild(chandatax[i])    
    }
    dataright.appendChild(poslabel)
    dataright.appendChild(posdata)
    dataright.appendChild(chanlabel)
    dataright.appendChild(chandata)

    for (let i = 1; i < 3; i++) {
        var teamlabel = document.createElement('div')
        teamlabel.innerHTML = team[i][0]
        teamlabel.style.backgroundColor = color[i][0]
        teamlabel.classList.add('mc-results-box')
        teamlabel.style.color = color[i][1]
        teamlabel.style.width = '100%'
        teamlabel.style.height = '3%'
        dataright.appendChild(teamlabel)

        var grlabel = document.createElement('div')
        grlabel.innerHTML = 'Goal Rate'
        grlabel.style.width = '50%'
        grlabel.classList.add('mc-results-box')
        grlabel.style.float = 'left'
        dataright.appendChild(grlabel)
        var grdata = document.createElement('div')
        grdata.style.width = '50%'
        grdata.style.height = '3%'
        grdata.classList.add('mc-results-box')
        grdata.style.float = 'left'
        grdata.classList.add('bg_neutral')
        var grbar = document.createElement('div')
        grbar.classList.add('bg_good')
        grbar.style.height = '100%'
        grbar.style.width = (data[i].g / data[i].c * 100) + '%'
        grdata.appendChild(grbar)
        dataright.appendChild(grdata)

        var crlabel = document.createElement('div')
        crlabel.innerHTML = 'Chance Rate'
        crlabel.style.width = '50%'
        crlabel.classList.add('mc-results-box')
        crlabel.style.float = 'left'
        dataright.appendChild(crlabel)
        var crdata = document.createElement('div')
        crdata.style.width = '50%'
        crdata.classList.add('mc-results-box')
        crdata.style.height = '3%'
        crdata.style.float = 'left'
        crdata.classList.add('bg_neutral')
        var crbar = document.createElement('div')
        crbar.classList.add('bg_good')
        crbar.style.height = '100%'
        crbar.style.width = (data[i].c / data[i].p * 100) + '%'
        crdata.appendChild(crbar)
        dataright.appendChild(crdata)
        if (data[i].tc != undefined) {
            var tacticinit = document.createElement('div')
            tacticinit.innerHTML = 'Initial Tactics: ' + data[i].tc[0][0] + '-' + data[i].tc[0][1] + '-' +data[i].tc[0][2]
            tacticinit.classList.add('mc-results-box')
            tacticinit.style.width = '100%'
            dataright.appendChild(tacticinit)
            if (data[i].tc[1] != undefined) {
                var tacticnew = document.createElement('div')
                tacticnew.classList.add('mc-results-box')
                tacticnew.style.width = '100%'
                tacticnew.innerHTML = 'End Match Tactics: ' + data[i].tc[1][0] + '-' + data[i].tc[1][1] + '-' +data[i].tc[1][2]
                dataright.appendChild(tacticnew)
                var minutestate = document.createElement('div')
                minutestate.classList.add('mc-results-box')
                minutestate.style.width = '100%'
                minutestate.innerHTML = 'Result: ' + data[i].tc[3][0] + ' : ' + data[i].tc[3][1] + ' (' + data[i].tc[2] + ' minute)'
                dataright.appendChild(minutestate)
                
            }
        }
    }
}

function mc_init () {
    ldb.mc = []
    ldb.mch = []
}

function mc_gatherhistory () {
    //console.log(M.mf)   
    var gh = []
    gh[0] = {}
    gh[0].id = ldb.my_team[5]
    gh[0].g = M.mf.filter(x => x.includes('-g')).length
    gh[0].p = M.mf.filter(x => x.includes('-a')).length
    gh[0].c = M.mf.filter(x => x.includes('-c')).length
    gh[0].t = Schedule[ldb.fxt-1].split(' ')[0]
    for (let i = 1; i < 3; i++) {
        gh[i] = {}
        gh[i].id = M[i].i[5]
        var goals = M.mf.filter(x => x.includes(M[i].n + '-g')).length
        gh[i].g = goals
        //console.log(goals)
        var pos = M.mf.filter(x => x.includes(M[i].n + '-a')).length
        gh[i].p = pos
        var chances = M.mf.filter(x => x.includes(M[i].n + '-c')).length
        gh[i].c = chances
        gh[i].pp = Math.floor(gh[i].p / gh[0].p * 100)
        gh[i].cp = Math.floor(gh[i].c / gh[0].c * 100)
        gh[i].gr = Math.floor(gh[i].g / gh[i].c * 100)
        gh[i].cr = Math.floor(gh[i].c / gh[i].p * 100)
        gh[i].tc = M[i].tt
    }
    if (gh[1].g > gh[2].g) {gh[0].w = gh[1].id}
    if (gh[1].g < gh[2].g) {gh[0].w = gh[2].id}
    if (gh[1].g == gh[2].g) {gh[0].w = 0}

    var string = []
    string.push([gh[0].id,gh[0].w])
    //console.log(gh[1],gh[2],gh[0])
    string.push(gh[1],gh[2])
    //console.log(string)
    ldb.mc.push(gh)
}

function mc_gatherendseasonhistory () {
    var gh = {}
    gh.id = ldb.my_team[5]
    gh.lg = ldb.my_league
    var base = ldb.Tables.filter(x => x.includes(gh.lg))
    var uniq = [...new Set(base)].sort()
    var table = []
    for (let i = 0; i < uniq.length; i++) {
        let code = uniq[i].split('-')[0]
        let team = Teams.filter(x => x.includes(code))[0].split(' ')[0]
        let points = base.filter(x => x.includes(code)).length
        let teaminfo = [points,team]
        table.push(teaminfo)
    }
    //console.log(table)
    var sortedtable = table.sort(function(a, b) {return b[0] - a[0]})
    var solonames = []
    for (let i = 0; i < sortedtable.length; i++) {
        solonames.push(sortedtable[i][1])
    }
    gh.lgpos = solonames.indexOf(ldb.my_team[0]) + 1
    //console.log(gh.lgpos)
    if (gh.lgpos == 0) {
        gh.lgpos = 'n/d'
        gh.lgpts = 0
    } else {
        gh.lgpts = sortedtable[gh.lgpos - 1][0]
    }
    var to = ldb.teams_ordered.filter(x => x[1].includes(gh.id))
    //console.log(to)
    gh.lgs = []
    for (let i = 0; i < to.length; i++) {
        var name = to[i][0]
        var rounds = to[i][1].filter(x => x.includes(gh.id)).length 
        gh.lgs.push([name,rounds])
    }
    gh.yr = ldb.year
    var winbase = ldb.winners.filter(x => x.includes(gh.yr))
    var winfin = winbase.filter(x => x.includes(ldb.my_team[0]))
    gh.achs = winfin
    gh.res = ldb.Results.filter(x => x.includes(gh.id))

    //console.log(gh,sortedtable[gh.lgpos -1])
    if (ldb.mch == undefined) {
        ldb.mch = []
    }
    ldb.mch.push(gh)
}

function mc_searchmachine () {
    var seek = document.createElement('input')
    seek.type = 'text'
    seek.classList.add('mc-search')
    seek.placeholder = 'Start typing to search'
    seek.onkeydown = () => {
        event.stopPropagation()
        var dataleft = document.getElementById('dataleft')
        for (let i = 0; i < dataleft.children.length; i++) {
             if (dataleft.children[i].textContent.includes(seek.value) == true) {
                dataleft.children[i].style.display = 'block'
             } else {
                dataleft.children[i].style.display = 'none'
             }
        }
        dataleft.scrollTop = dataleft.scrollHeight
    }
    document.getElementById('dataright').appendChild(seek)

}

function mc_renderoldteams () {
    var dataleft = document.getElementById('dataleft')
    var dataright = document.getElementById('dataright')
    dataleft.innerHTML = ''
    dataright.innerHTML = ''
    if (ldb.mch == undefined) {
        return
    }
    for (let i = 0; i < ldb.mch.length; i++) {
        var data = ldb.mch[i]
        //console.log(data)
        var div = document.createElement('div')
        div.id = 'mcrot-' + i
        div.classList.add('mc-old-left')
        div.onclick = () => {mc_renderoldteamdata('mcrot-'+i)}
        div.tabIndex = '-1'
        dataleft.appendChild(div)
        var year = document.createElement('div')
        year.classList.add('mc-old-year')
        year.innerHTML = data.yr
        div.appendChild(year)
        var team = document.createElement('div')
        ix_t_code(data.id)
        //console.log(teamsrc)
        team.innerHTML = T.name
        team.classList.add('mc-old-team')
        team.style.backgroundColor = T.colors[0]
        team.style.color = T.colors[1]
        div.appendChild(team)
    }
}

function mc_renderoldteamdata (x) {
    dataright = document.getElementById('dataright')
    dataright.innerHTML = ''
    //console.log(x)
    var id = Number(x.split('-')[1])
    //console.log(id)
    var data = ldb.mch[id]
    ix_t_code(data.id)
    //console.log(data)
    var teamname = document.createElement('div')
    teamname.innerHTML = T.name
    teamname.classList.add('mc-old-right')
    teamname.style.backgroundColor = T.colors[0]
    teamname.style.color = T.colors[1]
    //teamname.onclick = () => {
    //    document.getElementById('showteam').click()
    //    var seek1 = document.getElementById('seek1')
    //    seek1.value = data.lg
    //    var seek2 = document.getElementById('seek2')
    //    seek2.value = data.id
    //}
    dataright.appendChild(teamname)
    var leaguename = document.createElement('div')
    leaguename.innerHTML = fn[data.lg]
    leaguename.classList.add('mc-old-right')
    dataright.appendChild(leaguename)
    var leaguepos = document.createElement('div')
    leaguepos.classList.add('mc-old-right')
    leaguepos.innerHTML = 'Position: ' + data.lgpos + ' (' + data.lgpts + ' pts}'
    dataright.appendChild(leaguepos)
    var leagueslabel = document.createElement('div')
    leagueslabel.classList.add('mc-old-right')
    leagueslabel.classList.add('bg_neutral')
    leagueslabel.innerHTML = 'Leagues and Cups'
    dataright.appendChild(leagueslabel)
    for (let i = 0; i < data.lgs.length; i++) {
        var leaguedata = document.createElement('div')
        leaguedata.classList.add('mc-old-right')
        leaguedata.innerHTML = fn[data.lgs[i][0]]
        if (data.lgs[i][1] > 1) {
            leaguedata.innerHTML += ' (' + data.lgs[i][1] + ' rounds)'
        }
        dataright.appendChild(leaguedata)
    }
    var winslabel = document.createElement('div')
    winslabel.classList.add('mc-old-right')
    winslabel.classList.add('bg_neutral')
    winslabel.innerHTML = 'Achievements'
    dataright.appendChild(winslabel)
    for (let i = 0; i < data.achs.length; i++) {
        var achs = data.achs[i].split('-')
        var achdata = document.createElement('div')
        achdata.classList.add('mc-old-right')
        achdata.innerHTML =  achs[2] + ' (' + fn[achs[1]] + ')'
        dataright.appendChild(achdata)
    }   
    var gameslabel = document.createElement('div')
    gameslabel.classList.add('mc-old-right')
    gameslabel.classList.add('bg_neutral')
    gameslabel.innerHTML = 'Games'
    dataright.appendChild(gameslabel)
    if (data.res == undefined) {
        return
    }
    for (let i = 0; i < data.res.length; i++) {
        var game = data.res[i].split('-')
        var match = document.createElement('div')
        match.style.fontSize = '60%'
        match.classList.add('mc-old-right')
        var tt1 = Teams.filter(x => x.includes(game[0]))[0].split(' ')
        var tt2 = Teams.filter(x => x.includes(game[2]))[0].split(' ')
        match.innerHTML = tt1[0] + ' ' + game[1] + ' : ' + game[3] + ' ' + tt2[0] + ' (' + fn[game[4]] + ')'
        dataright.appendChild(match)
        
    }
    
}