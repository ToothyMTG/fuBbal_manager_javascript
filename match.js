function match_runner() {
    
    let g1 = goals1
    let g2 = goals2
    var team1sector = document.getElementById('team1-sector')
    var team1result = document.getElementById('team1result')
    var team2sector = document.getElementById('team2-sector')
    var team2result = document.getElementById('team2result')
    var minuteboxprog = document.getElementById('minutebox-prog')
    document.getElementById('matchbox').style.backgroundColor = 'white'
    if (pen_mode == 1) {
    document.getElementById('what').innerHTML = "Round " + (pens_round + 1)
        rand_pen = Math.floor(Math.random() * 4)
        if (rand_pen !== 0) {
            var field = document.createElement('div')
            field.classList.add('bg_good')
            field.classList.add('pen_graph')
            document.getElementById('who').appendChild(field)
            goals1++
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
            goals2++
        } else {
            var field = document.createElement('div')
            field.classList.add('bg_bad')
            field.classList.add('pen_graph')
            document.getElementById('who').appendChild(field)
        }
        team1result.innerHTML = goals1
        team2result.innerHTML = goals2
        pens_round++
        if (pens_round < 5) {
            return
        }
        if (goals1 == goals2) {
            return
        }
        g1 = goals1
        g2 = goals2
        pen_mode = 0
    }
    if ((g1 == g2) && (md == "po") && (total_minutes == 125) && (match_minute >= total_minutes)) {
        pen_mode = 1
        return
    }
    if ((md =="po") && (g1 == g2) && (match_minute >= total_minutes)) {
        total_minutes = 125
        pens_round = 0
        rand_pen = ''
    }
    if (match_minute >= total_minutes) {
        document.getElementById('match_runner').style.display = "none"
        turn_stage = -5
        document.getElementById('dummybutton').style.display = 'none'
        document.getElementById('runfixture').style.display = 'block'
        t_1 = team1[5]
        g_1 = goals1
        t_2 = team2[5]
        g_2 = goals2
        result = t_1 + "-" + g_1 + '-' + t_2 + '-' + g_2 + '-' + cnt
        ldb.Results.push(result)
        let p = document.createElement('p')
        p.innerHTML = team1[0] + " : " + g_1 + " - " + g_2 + " : " + team2[0] + " (" + fn[cnt] + ")"
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
    if (turn_stage == 1) {
        let randminute = Math.floor((Math.random() * 9) + 1)
        match_minute += randminute
        minuteboxprog.style.width = match_minute / total_minutes * 100 + '%'
        if (match_minute > total_minutes) {
            minuteboxprog.style.width = '100%'
        }
        team1sector.style.width = '50%'
        team2sector.style.width = '50%'
    }
    if (turn_stage == 2) {
        let randwho = Math.floor((Math.random() * centerpow) + 1)
        //console.log(randwho)
        if (randwho <= team1pow[1]) {
            teamsel = team1
            atkval = team1pow[0]
            defval = team2pow[2]
            teamdef = team2
            sectdef = team2sector
            sectatk = team1sector
        } else {
            teamsel = team2
            atkval = team1pow[2]
            defval = team2pow[0]
            teamdef = team1
            sectdef = team1sector
            sectatk = team2sector
        }
        //document.getElementById('who').innerHTML = teamsel[0] + " takes the ball." 
        sectdef.style.width = '40%'
        sectatk.style.width = '60%'
        totalval = atkval + defval
        //console.log(teamsel)
        matchfacts.push(teamsel[0] + "-a")
        let posesionvar = matchfacts.filter(x => x.includes(team1[0] + '-a')).length
        let posesiontotal = matchfacts.filter(x => x.includes('-a')).length
        let posesionwidth = (posesionvar / posesiontotal) * 100
        document.getElementById('posbar').style.width = posesionwidth + "%"
    }
    if (turn_stage == 3) {
        let randwhat = Math.floor((Math.random() * totalval) + 1)
        //console.log(randwhat)
        if (randwhat <= atkval) {
            //document.getElementById('what').innerHTML = "There's a chance..."
            sectdef.style.width = '20%'
            sectatk.style.width = '80%'
            matchfacts.push(teamsel[0] + "-c")
            goalval = Number(teamsel[1]) + Number(teamdef[3]) + 10
        } else {
            //document.getElementById('what').innerHTML = teamsel[0] + " lost the ball."
            sectdef.style.width = '45%'
            sectatk.style.width = '55%'
            turn_stage = 0
        }
        let chanvar = matchfacts.filter(x => x.includes(team1[0] + '-c')).length
        let chantotal = matchfacts.filter(x => x.includes('-c')).length
        let chanwidth = (chanvar / chantotal) * 100
        document.getElementById('chanbar').style.width = chanwidth + "%"
    }
    if (turn_stage == 4) {
        let randgoal = Math.floor((Math.random() * goalval) + 1)
        //console.log(randgoal)
        if ( randgoal <= Number(teamsel[1]) ) {
            //document.getElementById('what').innerHTML += " GOAL!"
            sectdef.style.width = '0%'
            sectatk.style.width = '100%'
            document.getElementById('matchbox').style.backgroundColor = 'gold'
            matchfacts.push(teamsel[0] + "-g")
            goals1 = matchfacts.filter(x => x.includes(team1[0] + "-g")).length
            if (goals1 < 1) {goals1 = 0}
            goals2 = matchfacts.filter(x => x.includes(team2[0] + "-g")).length
            if (goals2 < 1) {goals2 = 0}
            let tmnms = document.getElementById('teamnames')

            team1result.innerHTML = goals1
            team2result.innerHTML = goals2
        } else {
            //document.getElementById('what').innerHTML += " and there's a miss!"
            sectdef.style.width = '30%'
            sectatk.style.width = '70%'
        } 
        turn_stage = 0
    }
    turn_stage++
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