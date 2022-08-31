function match_runner() {
    
    let g1 = M[1].g
    let g2 = M[2].g
    var team1sector = document.getElementById('team1-sector')
    var team1result = document.getElementById('team1result')
    var team2sector = document.getElementById('team2-sector')
    var team2result = document.getElementById('team2result')
    var minuteboxprog = document.getElementById('minutebox-prog')
    document.getElementById('matchbox').style.backgroundColor = 'white'
    if (M.pen_mode == 1) {
    document.getElementById('what').innerHTML = "Round " + (pens_round + 1)
        rand_pen = Math.floor(Math.random() * 4)
        if (rand_pen !== 0) {
            var field = document.createElement('div')
            field.classList.add('bg_good')
            field.classList.add('pen_graph')
            document.getElementById('who').appendChild(field)
            M[1].g++
        } else {
            var field = document.createElement('div')
            field.classList.add('bg_bad')
            field.classList.add('pen_graph')
            document.getElementById('who').appendChild(field)
        }
        rand_pen = Math.floor(Math.random() * 4)
        if (rand_pen !== 0) {
            var field = document.createElement('div')
            field.classList.add('bg_good')
            field.classList.add('pen_graph')
            document.getElementById('who').appendChild(field)
            M[2].g++
        } else {
            var field = document.createElement('div')
            field.classList.add('bg_bad')
            field.classList.add('pen_graph')
            document.getElementById('who').appendChild(field)
        }
        team1result.innerHTML = M[1].g
        team2result.innerHTML = M[2].g
        pens_round++
        if (pens_round < 5) {
            return
        }
        if (M[1].g == M[2].g) {
            return
        }
        g1 = M[1].g
        g2 = M[2].g
        M.pen_mode = 0
    }
    if ((g1 == g2) && (md == "po") && (M.totalminutes == 125) && (M.minute >= M.totalminutes)) {
        M.pen_mode = 1
        return
    }
    if ((md =="po") && (g1 == g2) && (M.minute >= M.totalminutes)) {
        M.totalminutes = 125
        pens_round = 0
        rand_pen = ''
    }
    if (M.minute >= M.totalminutes) {
        document.getElementById('match_runner').style.display = "none"
        document.getElementById('tactic_change').style.display = "none"
        M.stage = -5
        document.getElementById('dummybutton').style.display = 'none'
        document.getElementById('runfixture').style.display = 'block'
        t_1 = M[1].i[5]
        g_1 = M[1].g
        t_2 = M[2].i[5]
        g_2 = M[2].g
        result = t_1 + "-" + g_1 + '-' + t_2 + '-' + g_2 + '-' + cnt
        ldb.Results.push(result)
        let p = document.createElement('p')
        p.innerHTML = M[1].i[0] + " : " + g_1 + " - " + g_2 + " : " + M[2].i[0] + " (" + fn[cnt] + ")"
        p.classList.add('good')
        document.getElementById('dataleft').appendChild(p)
        if (md == "po") {
            if (g_1 > g_2) {ldb.teams_ordered[pondum][1].push(t_1)}
            if (g_2 > g_1) {ldb.teams_ordered[pondum][1].push(t_2)}
        } else {
            if (g_1 > g_2) {
                for (let i = 0; i < 3; i++) {ldb.Tables.push(t_1 + "-" + cnt)}
            }
            if (g_2 > g_1) { 
                for (let i = 0; i < 3; i++) {ldb.Tables.push(t_2 + "-" + cnt)}
            }
            if (g_1 == g_2) {
                ldb.Tables.push(t_1 + '-' + cnt)
                ldb.Tables.push(t_2 + '-' + cnt)
            }
        }
        make_table(cnt)
        document.getElementById("dataleft").scrollTop = document.getElementById('dataleft').scrollHeight
    }
    if (M.stage == 1) {
        let randminute = Math.floor((Math.random() * 9) + 1)
        M.minute += randminute
        minuteboxprog.style.width = M.minute / M.totalminutes * 100 + '%'
        if (M.minute > M.totalminutes) {
            minuteboxprog.style.width = '100%'
        }
        team1sector.style.width = '50%'
        team2sector.style.width = '50%'
    }
    if (M.stage == 2) {
        let randwho = Math.floor((Math.random() * M.centerpow) + 1)
        //console.log(randwho)
        if (randwho <= M[1].pow[1]) {
            teamsel = M[1].i
            atkval = M[1].pow[0]
            defval = M[2].pow[2]
            teamdef = M[2].i
            sectdef = team2sector
            sectatk = team1sector
        } else {
            teamsel = M[2].i
            atkval = M[1].pow[2]
            defval = M[2].pow[0]
            teamdef = M[1].i
            sectdef = team1sector
            sectatk = team2sector
        }
        //document.getElementById('who').innerHTML = teamsel[0] + " takes the ball." 
        sectdef.style.width = '40%'
        sectatk.style.width = '60%'
        totalval = atkval + defval
        //console.log(teamsel)
        M.mf.push(teamsel[0] + "-a")
        let posesionvar = M.mf.filter(x => x.includes(M[1].i[0] + '-a')).length
        let posesiontotal = M.mf.filter(x => x.includes('-a')).length
        let posesionwidth = (posesionvar / posesiontotal) * 100
        document.getElementById('posbar').style.width = posesionwidth + "%"
    }
    if (M.stage == 3) {
        let randwhat = Math.floor((Math.random() * totalval) + 1)
        //console.log(randwhat)
        if (randwhat <= atkval) {
            //document.getElementById('what').innerHTML = "There's a chance..."
            sectdef.style.width = '20%'
            sectatk.style.width = '80%'
            M.mf.push(teamsel[0] + "-c")
            goalval = Number(teamsel[1]) + Number(teamdef[3]) + 10
        } else {
            //document.getElementById('what').innerHTML = teamsel[0] + " lost the ball."
            sectdef.style.width = '45%'
            sectatk.style.width = '55%'
            M.stage = 0
        }
        let chanvar = M.mf.filter(x => x.includes(M[1].i[0] + '-c')).length
        let chantotal = M.mf.filter(x => x.includes('-c')).length
        let chanwidth = (chanvar / chantotal) * 100
        document.getElementById('chanbar').style.width = chanwidth + "%"
    }
    if (M.stage == 4) {
        let randgoal = Math.floor((Math.random() * goalval) + 1)
        //console.log(randgoal)
        if ( randgoal <= Number(teamsel[1]) ) {
            //document.getElementById('what').innerHTML += " GOAL!"
            sectdef.style.width = '0%'
            sectatk.style.width = '100%'
            document.getElementById('matchbox').style.backgroundColor = 'gold'
            M.mf.push(teamsel[0] + "-g")
            M[1].g = M.mf.filter(x => x.includes(M[1].i[0] + "-g")).length
            //if (M[2].g < 1) {M[1].g = 0}
            M[2].g = M.mf.filter(x => x.includes(M[2].i[0] + "-g")).length
            //if (M[1].g < 1) {M[2].g = 0}
            let tmnms = document.getElementById('teamnames')
            //console.log(M[1].g,M[2].g)
            team1result.innerHTML = M[1].g
            team2result.innerHTML = M[2].g
        } else {
            //document.getElementById('what').innerHTML += " and there's a miss!"
            sectdef.style.width = '30%'
            sectatk.style.width = '70%'
        } 
        M.stage = 0
    }
    M.stage++
    tc_rand()
}

//document.addEventListener('keydown', x => {if (x.keyCode === 13){mrun.click()} })

function simulate_match(t1, t2) {
    let tm1 = Teams.filter(x => x.includes(t1))[0].split(' ')
    let tm2 = Teams.filter(x => x.includes(t2))[0].split(' ')
    let randtact1 = Tactics[Math.floor(Math.random() * 7)] 
    let tm1pow = [Number(tm1[1]) + randtact1[0], Number(tm1[2]) + randtact1[1], Number(tm1[3]) + randtact1[2]]
    let gls1 = 0
    let gls2 = 0
    //console.log(tm1)
    //console.log(randtact1)    
    //console.log(tm1pow)
    let randtact2 = Tactics[Math.floor(Math.random() * 7)] 
    let tm2pow = [Number(tm2[1]) + randtact2[0], Number(tm2[2]) + randtact2[1], Number(tm2[3]) + randtact2[2]]
    //console.log(tm2)
    //console.log(randtact2)    
    //console.log(tm2pow)
    let mid_tot = tm1pow[1] + tm2pow[1]
    //console.log(mid_tot)
    let m_len = 95
    let m = 0
    while (m <= m_len) {
        m += Math.floor((Math.random() * 9) + 1)
        //console.log(m)
        let rand_who = Math.floor((Math.random() * mid_tot) + 1)
        //console.log(rand_who)
        if (rand_who <= tm1pow[1]) {
            s_atk = tm1pow[0]
            s_def = tm2pow[2]
            s_tot = s_atk + s_def
            c_atk = Number(tm1[1])
            c_def = Number(tm2[3]) + 10
            c_tot = c_atk + c_def
            s_who = tm1
            //console.log(s_who)
        } else {
            s_atk = tm2pow[0]
            s_def = tm1pow[2]
            s_tot = s_atk + s_def
            c_atk = Number(tm2[1])
            c_def = Number(tm1[3]) + 10
            c_tot = c_atk + c_def
            s_who = tm2
            //console.log(s_who)
        }
        let rand_what = Math.floor((Math.random() * s_tot) + 1)
        if (rand_what <= s_atk) {
            let rand_goal = Math.floor((Math.random() * c_tot) + 1)
            if (rand_goal <= c_atk) {
                if (tm1[0] == s_who[0]) {
                    gls1++
                    //console.log("Goal - " + tm1[0])
                } else {
                    gls2++
                    //console.log("Goal - " + tm2[0])
                }       
            }
        }       
        if ((gls1 == gls2) && (md == "po") && (m > m_len)) {
            m_len = 125
        }
    }
    if ((gls1 == gls2) && (md =="po") && (m_len == 125)) {
        let rand_pen
        let pens = 5
        for (let i = 0; i < pens; i++) {
            //console.log("Round " + (i + 1))
            rand_pen = Math.floor(Math.random() * 4)
            if (rand_pen !== 0 ) {
                //console.log(tm1[0] + " - GOAL!")
                gls1++
            } else {
                //console.log(tm1[0] + " - MISS!")
            }
            rand_pen = Math.floor(Math.random() * 4)
            if (rand_pen !== 0 ) {
                //console.log(tm2[0] + " - GOAL!")
                gls2++
            } else {
                //console.log(tm2[0] + " - MISS!")
            }
            if ((gls1 == gls2) && (i >= 4)) {pens++}
        }
    }
    //console.log(tm1[0] + ' ' + gls1 + " : " + gls2 + ' ' + tm2[0] )
    //console.log(tm1[5]+'-'+gls1+'-'+tm2[5]+'-'+gls2)
    t_1 = tm1[5]
    g_1 = gls1
    t_2 = tm2[5]
    g_2 = gls2
}

function match_init (a,b) {
    var o = [a,b]
    M = {}
    M.pen_mode = 0
    M.minute = 0
    M.totalminutes = 95
    M.add_time = 0
    M.mf = []
    M.centerpow = 0
    M.stage = 1
    for (let x  = 0; x < o.length; x++) {
        var v = x+1
        M[v] = {} 
        M[v].i = Teams.filter(xx => xx.includes(o[x]))[0].split(' ')
        M[v].n = M[v].i[0]
        M[v].g = 0
        M[v].p = 0
        M[v].tc = 1
    }
    M[1].color = [M[1].i[6],M[1].i[7]]

    M[2].color = [M[2].i[6],M[2].i[7]]
    if (M[1].color[0] == M[2].color[0]) {
        M[2].color = [M[2].i[7],M[2].i[6]]
    }
    
    //console.log(M)
    let posesion = document.getElementById('posbar')
    posesion.style.width = '50%'
    posesion.style.backgroundColor = M[1].color[0];
    document.getElementById('posbox').style.backgroundColor = M[2].color[0];
    let chances = document.getElementById('chanbar')
    chances.style.width = '50%'
    chances.style.backgroundColor = M[1].color[0];
    document.getElementById('chanbox').style.backgroundColor = M[2].color[0];
}

function matchbox_init () {
    var pitchbox = document.getElementById('pitchbox')
    document.getElementById('who').innerHTML = ''
    document.getElementById('what').innerHTML = ''
    for (let i = 1; i < 3; i++) {
        var id = 'team' + i + 'name'
        //console.log(id)
        var item = document.getElementById(id)
        item.innerHTML = M[i].n
        item.style.backgroundColor = M[i].color[0]
        item.style.color = M[i].color[1]
    }

    var team1def = document.getElementById('team1def')
    team1def.innerHTML = ''
    var left1 = document.createElement('div')
    left1.style.width = Number(M[1].i[3]) / (Number(M[1].i[3]) + Number(M[2].i[1])) * 100 + "%"
    left1.style.backgroundColor = M[1].color[0]
    team1def.style.backgroundColor = M[2].color[0]
    team1def.appendChild(left1)
    var pitchcenter = document.getElementById('pitchcenter')
    pitchcenter.innerHTML = ''
    var left2 = document.createElement('div')
    left2.style.width = Number(M[1].i[2]) / (Number(M[1].i[2]) + Number(M[2].i[2])) * 100 + "%"
    left2.style.backgroundColor = M[1].color[0]
    pitchcenter.style.backgroundColor = M[2].color[0]
    pitchcenter.appendChild(left2)
    var team2def = document.getElementById('team2def')
    team2def.innerHTML = ''
    var left3 = document.createElement('div')
    left3.style.width = Number(M[1].i[1]) / (Number(M[1].i[1]) + Number(M[2].i[3])) * 100 + "%"
    left3.style.backgroundColor = M[1].color[0]
    team2def.style.backgroundColor = M[2].color[0]
    team2def.appendChild(left3)

    for (let i = 1; i < 3; i++) {
        var id = 'team' + i + '-sector' 
        var item = document.getElementById(id)
        item.style.backgroundColor = M[i].color[0]
        item.style.width = '50%'
    }
}

function match_powerset () {
    let my_tactics = document.getElementById('tactic_selection').value
    M.mytact = [ Number(my_tactics[0]), Number(my_tactics[1]), Number(my_tactics[2])]
    M.enemtact = Tactics[Math.floor(Math.random() * 7)]
    //tc_team1 = 1
    //tc_team2 = 1
    //var team1tact
    //var team2tact   
    var team1fields = [4,2,0]
    var team2fields = [1,3,5]
    var renpat = [[],[2],[1,3],[0,2,4],[0,1,3,4],[0,1,2,3,4]]
    var teamrenpat = [1,2,1,2,1,2]
    var team1 = M[1].i
    var team2 = M[2].i
    if (ldb.my_team[0] == M[1].i[0]) {
        M[1].pow = [ (M.mytact[0] + Number(team1[1])),(M.mytact[1] + Number(team1[2])),(M.mytact[2] + Number(team1[3]))]
        M[2].pow = [ (M.enemtact[0] + Number(team2[1])),(M.enemtact[1] + Number(team2[2])),(M.enemtact[2] + Number(team2[3]))]
        M[1].tact = M.mytact
        M[2].tact = M.enemtact
    }
    if (ldb.my_team[0] == M[2].i[0]) {
        M[2].pow = [ (M.mytact[0] + Number(team2[1])),(M.mytact[1] + Number(team2[2])),(M.mytact[2] + Number(team2[3]))]
        M[1].pow = [ (M.enemtact[0] + Number(team1[1])),(M.enemtact[1] + Number(team1[2])),(M.enemtact[2] + Number(team1[3]))]
        M[2].tact = M.mytact
        M[1].tact = M.enemtact 
    }
    M.centerpow = M[1].pow[1] + M[2].pow[1]
    var rendermap = [M[1].tact[2],M[2].tact[0],M[1].tact[1],M[2].tact[1],M[1].tact[0],M[2].tact[2]]
    for (let i = 0; i < rendermap.length; i++) {
        var div =  document.getElementById('sector' + i)
        var val  = rendermap[i]
        var pat = renpat[val]
        var buttons = div.getElementsByTagName('button')
        var teamcolors
        if (teamrenpat[i] == 1) {
           teamcolors = M[1].color
        }
        if (teamrenpat[i] == 2) {
           teamcolors = M[2].color
        }
        for (let x = 0; x < pat.length; x++) {
            buttons[pat[x]].style.backgroundColor = teamcolors[0]
            buttons[pat[x]].style.borderColor = teamcolors[1]
            buttons[pat[x]].style.opacity = 1
        }
    }
}