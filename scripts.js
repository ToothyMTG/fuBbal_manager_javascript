ldb = {}

function set_matchbox (t1, t2) {
    team1 = Teams.filter(x => x.includes(t1))[0].split(' ')
    team2 = Teams.filter(x => x.includes(t2))[0].split(' ')
    //console.log(team1)
    //console.log(team2)
    let t1name = document.getElementById('team1name')
    t1name.innerHTML = team1[0]
    t1name.style.backgroundColor = team1[6]
    t1name.style.color = team1[7]
    document.getElementById('team1stars').innerHTML = "D:" + team1[3] + "|M:" + team1[2] + "|A:" + team1[1]
    let t2name = document.getElementById('team2name')
    t2name.innerHTML = team2[0]
    t2name.style.backgroundColor = team2[6]
    t2name.style.color = team2[7]
    document.getElementById('team2stars').innerHTML = "A:" + team2[1] + "|M:" + team2[2] + "|D:" + team2[3]
    document.getElementById('teamnames').innerHTML = team1[0] + " 0 : 0 " + team2[0]
    color1 = team1[6]
    if (team1[6] == team2[6]) {
        color2 = team2[7]
    } else {
        color2 = team2[6]
    }
    let fieldleft1 = document.getElementById('fieldleft1')
    fieldleft1.style.height = ( Number(team1[3]) / ( Number(team1[3]) + Number(team2[1]) ) * 100 ) + "%"
    fieldleft1.style.backgroundColor = color1
    document.getElementById('fieldleft').style.backgroundColor = color2
    let fieldcenter1 = document.getElementById('fieldcenter1')
    fieldcenter1.style.height = ( Number(team1[2]) / ( Number(team1[2]) + Number(team2[2]) ) * 100 ) + "%"
    fieldcenter1.style.backgroundColor = color1
    document.getElementById('fieldcenter').style.backgroundColor = color2
    let fieldright1 = document.getElementById('fieldright1')
    fieldright1.style.height = ( Number(team1[1]) / ( Number(team1[1]) + Number(team2[3]) ) * 100 ) + "%"
    fieldright1.style.backgroundColor = color1
    document.getElementById('fieldright').style.backgroundColor = color2
    document.getElementById('start_match').style.display = 'block'
    document.getElementById('tactic_selection').style.display = 'block'
}

function assign_team (a) {
ldb.my_team = Teams.filter(x => x.includes(a))[0].split(' ')
let league = ldb.my_team[4]
ldb.my_league = Leagues.filter(x => x.includes(league))[0].split(' ')[4]
let teamname = document.getElementById('teamname')
teamname.innerHTML = ldb.my_team[0]
teamname.style.backgroundColor = ldb.my_team[6]
teamname.style.color = ldb.my_team[7]
document.getElementById('pbox1').innerHTML = "Atk<br>" + ldb.my_team[1]
document.getElementById('pbox2').innerHTML = "Mid<br>" + ldb.my_team[2]
document.getElementById('pbox3').innerHTML = "Def<br>" + ldb.my_team[3]
}

function populate_tactics () {
    for (let i = 0; i < Tactics.length; i++) {
        let option = document.createElement('option')
        option.innerHTML = Tactics[i][0] + '-' + Tactics[i][1] + '-' + Tactics[i][2]
        option.value = String(Tactics[i][0]) + String(Tactics[i][1]) + String(Tactics[i][2])
        document.getElementById('tactic_selection').appendChild(option)
    }
}

function start_match () {
    let my_tactics = document.getElementById('tactic_selection').value
    mytact = [ Number(my_tactics[0]), Number(my_tactics[1]), Number(my_tactics[2])]
    enemtact = Tactics[Math.floor(Math.random() * 7)]   
    if (ldb.my_team[0] == team1[0]) {
        team1pow = [ (mytact[0] + Number(team1[1])),(mytact[1] + Number(team1[2])),(mytact[2] + Number(team1[3]))]
        team2pow = [ (enemtact[0] + Number(team2[1])),(enemtact[1] + Number(team2[2])),(enemtact[2] + Number(team2[3]))]
    }
    if (ldb.my_team[0] == team2[0]) {
        team2pow = [ (mytact[0] + Number(team2[1])),(mytact[1] + Number(team2[2])),(mytact[2] + Number(team2[3]))]
        team1pow = [ (enemtact[0] + Number(team1[1])),(enemtact[1] + Number(team1[2])),(enemtact[2] + Number(team1[3]))]
    }
    document.getElementById('team1stars').innerHTML = "D:" + team1pow[2] + "|M:" + team1pow[1] + "|A:" + team1pow[0]
    document.getElementById('team2stars').innerHTML = "A:" + team2pow[0] + "|M:" + team2pow[1] + "|D:" + team2pow[2]
    leftpow = team1pow[2] + team2pow[0]
    centerpow = team1pow[1] + team2pow[1]
    rightpow = team1pow[0] + team2pow[2]
    document.getElementById('fieldleft1').style.height = (team1pow[2] / leftpow * 100) + "%"
    document.getElementById('fieldcenter1').style.height = (team1pow[1] / centerpow * 100) + "%"
    document.getElementById('fieldright1').style.height = (team1pow[0] / rightpow * 100) + "%"
    document.getElementById('start_match').style.display = 'none'
    document.getElementById('tactic_selection').style.display = 'none'
    let group1 = document.getElementsByClassName('ebgroup1')
    for (let x = 0;x < group1.length; x++) {
        group1[x].style.display = "block"
    }
    document.getElementById('minutebox').innerHTML = "0 Minute:"
    match_minute = 0
    total_minutes = 95
    turn_stage = 1
    matchfacts = []
    let posesion = document.getElementById('posbar')
    posesion.style.width = '50%'
    posesion.style.backgroundColor = color1;
    document.getElementById('posbox').style.backgroundColor = color2;
    let chances = document.getElementById('chanbar')
    chances.style.width = '50%'
    chances.style.backgroundColor = color1;
    document.getElementById('chanbox').style.backgroundColor = color2;
    goals1 = 0
    goals2 = 0
    pen_mode = 0
}

function generate_season () {
    ldb.teams_ordered = []
    let i = 0
    // Leagues
    while (i < 8) {
        let searchterm = Leagues[i].split(' ')[1] + ' ' + Leagues[i].split(' ')[2]
        let lgcode = Leagues[i].split(' ')[1]
        let tms = Teams.filter(x => x.includes(searchterm))
        tms = tms.sort(() => Math.random() - 0.5)
        //console.log(tms)
        let temp = []
        for (let i = 0; i < tms.length; i++) {
            temp.push(tms[i].split(' ')[5])
        }
        ldb.teams_ordered[i] = []
        ldb.teams_ordered[i][0] = lgcode
        ldb.teams_ordered[i][1] = temp
        i++
    }
    // World Cup Eliminations
    let nat_pot = []
    let eur_pot = Teams.filter(x => x.includes("eur n"))
    let ame_pot = Teams.filter(x => x.includes("ame n"))
    let afr_pot = Teams.filter(x => x.includes("afr n"))
    let apj_pot = Teams.filter(x => x.includes("apj n"))
    nat_pot = eur_pot + ',' + ame_pot + ',' + afr_pot + ',' + apj_pot
    let temp_pot = nat_pot.split(',')
    temp = []
    for (let z = 0; z < temp_pot.length; z++) {
        temp.push(temp_pot[z].split(' ')[5])        
    }
    temp = temp.sort(() => Math.random() - 0.5)
    //console.log(temp)
    let gcode = "wce"
    let r = 0
    for (let t = 0; t < 10; t++) {
        let ggcode = gcode + t
        //console.log(ggcode)
        ldb.teams_ordered[i] = []
        ldb.teams_ordered[i][0] = ggcode
        ldb.teams_ordered[i][1] = []
        for (let h = 0; h < 5; h++) {
            ldb.teams_ordered[i][1][h] = temp[r]
            r++
        }
        i++
    }
    // Euro Eliminations
    let euro_pot = Teams.filter(x => x.includes("eur n"))
    euro_pot = euro_pot.sort(() => Math.random() - 0.5)
    let gkode = "ee"
    let y = 0
    for (let t = 0; t < 6; t++) {
        let ggcode = gkode + (t + 1)
        ldb.teams_ordered[i] = []
        ldb.teams_ordered[i][0] = ggcode
        ldb.teams_ordered[i][1] = []
        for (let h = 0; h < 5; h++) {
            ldb.teams_ordered[i][1][h] = euro_pot[y].split(' ')[5]
            y++ 
        }
        i++
    }
    // Club Cup
    let temp_clubs = []
    let l = 0
    while (l < 8) {
        let searchterm = Leagues[l].split(' ')[1] + ' ' + Leagues[l].split(' ')[2]
        //console.log(searchterm)
        for (let g = 0; g < 16; g++) {
            let tim = Teams.filter(x => x.includes(searchterm))[g]
            tim = tim.split(' ')[5]
            //console.log(tim)
            temp_clubs.push(tim)
        }
        l++
    }
    temp_clubs = temp_clubs.sort(() => Math.random() - 0.5)
    ldb.teams_ordered[i] = []
    ldb.teams_ordered[i][0] = "club"
    ldb.teams_ordered[i][1] = temp_clubs
}

function run_fixture () {
    document.getElementById('datatop').style.display = 'none'
    document.getElementById('databox').style.height = "40%"
    //document.getElementById('season').innerHTML = "Season 1 (" + ldb.year + ") | Fixture " + (ldb.fxt + 1)  
    document.getElementById('matchbox').style.display = "none"
    let fxt_var = Schedule[ldb.fxt].split(' ')
    fixture(fxt_var[0],fxt_var[1])
    document.getElementById('season').innerHTML = "Season 1 (" + ldb.year + ") | Fixture " + (ldb.fxt + 1) + " | " + fxt_var[0] + ' - ' + fxt_var[1] 
    //console.log(fxt_var)
    ldb.fxt++
}

function make_table (t) {
    let base = ldb.Tables.filter(x => x.includes(t))
    var uniq = [...new Set(base)].sort()
    let table = []
    for (let i = 0; i < uniq.length; i++) {
        let code = uniq[i].split('-')[0]
        let team = Teams.filter(x => x.includes(code))[0].split(' ')[0]
        let color1 = Teams.filter(x => x.includes(code))[0].split(' ')[6]
        let color2 = Teams.filter(x => x.includes(code))[0].split(' ')[7]
        let points = base.filter(x => x.includes(code)).length
        let teaminfo = [points,team,color1,color2]
        table.push(teaminfo)
    }
    //console.log(table)
    var sortedtable = table.sort(function(a, b) {return b[0] - a[0]})
    //console.log(sortedtable)
    let box = document.getElementById('dataright')
    box.innerHTML = ''
    for (let i = 0; i < sortedtable.length; i++) {
        let p = document.createElement('div')
        p.style.height = "5%"
        p.style.width = "100%"
        p.style.float = "left"
        let pos = document.createElement('p')
        pos.innerHTML = (i + 1)
        pos.style.width = "20%"
        pos.style.textAlign = "center"
        pos.style.marginleft = "10%"
        pos.style.color = "white"
        pos.style.float = "left"
        if (sortedtable[i][1] == ldb.my_team[0]) {
            pos.classList.add('bg_good')
            pos.style.color = "black"
        }
        let pts = document.createElement('p')
        pts.innerHTML = sortedtable[i][0]
        pts.style.width = "20%"
        pts.style.textAlign = "center"
        pts.style.marginRight = "10%"
        pts.style.color = "white"
        pts.style.float = "left"
        let team = document.createElement(["p"])
        team.innerHTML = sortedtable[i][1]
        team.style.backgroundColor = sortedtable[i][2]
        team.style.width = "40%"
        team.style.color = sortedtable[i][3]
        team.style.float = "left"
        p.appendChild(pos)
        p.appendChild(team)
        p.appendChild(pts)
        box.appendChild(p)
    }
}

function make_results (r) {
    let base = ldb.Results.filter(x => x.includes(r))
    let div = document.getElementById('dataleft')
    div.innerHTML = ""
    for (let i = 0; i < base.length; i++) {
        let data = base[i].split('-')
        let team1 = Teams.filter(x => x.includes (data[0]))[0].split(' ')[0]
        let goals1 = data[1]
        let team2 = Teams.filter(x => x.includes (data[2]))[0].split(' ')[0]
        let goals2 = data[3]
        let league = data[4]
        let p = document.createElement('p')
        p.innerHTML = team1 + " : " + goals1 + " - " + goals2 + " : " + team2 + " (" + league + ")"
        if ((team1 == ldb.my_team[0]) || (team2 == ldb.my_team[0])) {
            p.classList.add('good')
        }
        div.appendChild(p)
    }
    div.scrollTop = div.scrollHeight
}

function myleague (n) {
    document.getElementById('datatop').style.display = 'none'
    document.getElementById('matchbox').style.display = 'none'
    document.getElementById('databox').style.height = "85%"
    make_table (n)
    make_results (n)
}

function res_list () {
    document.getElementById('matchbox').style.display = 'none'
    let datatop = document.getElementById('datatop')
    datatop.style.display = 'block'
    datatop.innerHTML = ''
    document.getElementById('databox').style.height = "75%"
    let sel = document.createElement('select')
    sel.style.width = "50%"
    sel.style.height = "60%"
    sel.style.textAlign = "center"
    sel.style.fontSize = "150%"
    sel.id = 'teamsel'
    let opts = []
    opts += "wce,"
    opts += "ee,"
    for (let i = 0; i < GameTypes.length; i++) {
        let type = GameTypes[i].split('|')[1].split(',')
        opts += type + ','
    }
    let types = opts.split(',')
    for (let i = 0; i < types.length; i++) {
        let option = document.createElement('option')
        option.innerHTML = types[i]
        option.value = types[i]
        sel.appendChild(option)
    }
    datatop.appendChild(sel)
    let init = document.getElementById('teamsel').value
    make_table (init)
    make_results (init)
    sel.onchange = function(){
        let value = sel.value
        make_table (value)
        make_results (value)
    }
    window.addEventListener('keydown', function (e) {
        if ((e.key === "z") && (sel.style.display !== "none")) {
            sel.focus()
            //console.log('pressed')
        }
    })
}

function gather_team_info (t) {
    let dataleft = document.getElementById('dataleft')
    dataleft.innerHTML = ''
    let dataright = document.getElementById('dataright')
    dataright.innerHTML = ''
    let datatop = document.getElementById('datatop')
    //datatop.style.display = "block"
    document.getElementById('databox').style.height = "75%"
    team_info (t)
    let teaminfo = Teams.filter(x => x.includes(t))[0].split(' ')
    let teamresults = ldb.Results.filter(x => x.includes(teaminfo[5]))
    for (let i = 0; i < teamresults.length; i++) {
        //console.log(teamresults[i])
        let team1 = Teams.filter(x => x.includes(teamresults[i].split('-')[0]))[0].split(' ')
        let golas1 = Number(teamresults[i].split('-')[1])
        let team2 = Teams.filter(x => x.includes(teamresults[i].split('-')[2]))[0].split(' ')
        let golas2 = Number(teamresults[i].split('-')[3])
        let gmtype = teamresults[i].split('-')[4]
        let colorclass = ''
        if (((golas1 > golas2) && (team1[0] == teaminfo[0])) || ((golas2 > golas1) && (team2[0] == teaminfo[0]))) {
            colorclass = "good"   
        } else {colorclass = "bad"}
        if (golas1 == golas2){colorclass = "neutral"}
        //console.log(team1[0],golas1,team2[0],golas2,gmtype,colorclass)
        let p = document.createElement('p')
        p.classList.add(colorclass)
        p.innerHTML = team1[0] + " : " + golas1 + " - " + golas2 + " : " + team2[0] + " (" + gmtype + ")"
        dataleft.appendChild(p)
    }
    dataleft.scrollTop = dataleft.scrollHeight
    // Right panel info
    dataright.style.color = "white"
    dataright.style.textAlign = "center"
    let r0 = document.createElement('p')
    r0.innerHTML = "Statistics"
    r0.style.fontSize = "150%"
    dataright.appendChild(r0)
    let r1 = document.createElement('p')
    r1.innerHTML = teamresults.length + " matches"
    dataright.appendChild(r1)
    let thegood = dataleft.getElementsByClassName('good').length
    let r2 = document.createElement('p')
    r2.innerHTML = thegood + " wins (" + Math.floor(thegood / teamresults.length * 100) + "%)"
    r2.classList.add('good')
    dataright.appendChild(r2)
    let thebad = dataleft.getElementsByClassName('bad').length
    let r3 = document.createElement('p')
    r3.innerHTML = thebad + " defeats (" + Math.floor(thebad / teamresults.length * 100) + "%)"
    r3.classList.add('bad')
    dataright.appendChild(r3)
    let theugly = dataleft.getElementsByClassName('neutral').length
    let r4 = document.createElement('p')
    r4.innerHTML = theugly + " draws (" + Math.floor(theugly / teamresults.length * 100) + "%)"
    r4.classList.add('neutral')
    dataright.appendChild(r4)
    let teampoints = ldb.Tables.filter(x => x.includes(teaminfo[5]))
    let uniq = [...new Set(teampoints)].sort()
    //console.log(uniq)
    for (let i = 0; i < uniq.length; i++) {
        let count = teampoints.filter(x => x.includes(uniq[i])).length
        //console.log(count)
        let p = document.createElement('p')
        p.innerHTML = count + " points in " + uniq[i].split('-')[1]
        dataright.appendChild(p)
    }
}

function showteam() {
    document.getElementById('matchbox').style.display = "none"
    document.getElementById('databox').style.height = "75%"
    let datatop = document.getElementById('datatop')
    datatop.innerHTML = ''
    let dataleft = document.getElementById('dataleft')
    dataleft.innerHTML = ''
    let dataright = document.getElementById('dataright')
    dataright.innerHTML = ''
    datatop.style.display = "block"
    let seek1 = document.createElement('select')
    seek1.id = 'seek1'
    seek1.classList.add("seek")
    datatop.appendChild(seek1)   
    let blank = document.createElement('option')
    blank.style.display = "none"
    seek1.appendChild(blank)
    for (let i = 0; i < Leagues.length; i++) {
        let inner = Leagues[i].split(' ')[0]
        let value = Leagues[i].split(' ')[1]
        //console.log(inner,value)
        let option = document.createElement('option')
        option.innerHTML = inner
        option.value = value
        seek1.appendChild(option)
    }
    seek1.default = ""
    let seek2 = document.createElement('select')
    seek2.id = 'seek2'
    seek2.classList.add('seek')
    datatop.appendChild(seek2)
    seek1.onchange = function() {
        seek2.innerHTML = ''
        let source = seek1.value
        let things = Teams.filter(x => x.includes(' ' + source))
        seek2.appendChild(blank)
        seek2.style.backgroundColor = "white"
        seek2.style.color = "black"
        for (let i = 0; i < things.length; i++) {
            let option = document.createElement('option')
            option.innerHTML = things[i].split(' ')[0]
            option.value = option.innerHTML
            seek2.appendChild(option)
            seek2.focus()
        }
    }
    seek2.onchange = function() {
        let fancy = Teams.filter(x => x.includes(seek2.value))[0].split(' ')
        seek2.style.backgroundColor = fancy[6]
        seek2.style.color = fancy[7]
        gather_team_info(seek2.value)
    }
    window.addEventListener('keydown', function (e) {
        if ((e.key === "z") && (seek1.style.display !== "none")) {
            seek1.focus()
            //console.log('pressed')
        }
    })
}

function team_info (t) {
    let the_team = Teams.filter(x => x.includes(t))[0].split(' ')
    let the_atk = Number(the_team[1])
    let the_mid = Number(the_team[2])
    let the_def = Number(the_team[3])
    let the_powtot = the_atk + the_def + the_mid
    let div = document.getElementById('dataright')
    let p_atk = document.createElement('p')
    p_atk.innerHTML = "Atk: " + the_atk
    p_atk.classList.add('bg_bad')
    p_atk.style.float = 'left'
    p_atk.id = 'patk'
    p_atk.style.width = (the_atk / the_powtot * 100) + '%'
    p_atk.style.textAlign = 'center'
    div.appendChild(p_atk) 
    let p_mid = document.createElement('p')
    p_mid.innerHTML = "Mid: " + the_mid
    p_mid.classList.add('bg_good')
    p_mid.style.float = 'left'
    p_mid.id = 'pmid'
    p_mid.style.width = (the_mid / the_powtot * 100) + '%'
    p_mid.style.textAlign = 'center'
    div.appendChild(p_mid) 
    let p_def = document.createElement('p')
    p_def.innerHTML = "Def: " + the_def
    p_def.classList.add('bg_neutral')
    p_def.style.float = 'left'
    p_def.id = 'pdef'
    p_def.style.width = (the_def / the_powtot * 100) + '%'
    p_def.style.textAlign = 'center'
    div.appendChild(p_def) 
}

function source_table (t, n) {
    let base = ldb.Tables.filter(x => x.includes(t))
    var uniq = [...new Set(base)].sort()
    let table = []
    for (let i = 0; i < uniq.length; i++) {
        let code = uniq[i].split('-')[0]
        let team = Teams.filter(x => x.includes(code))[0].split(' ')[0]
        let points = base.filter(x => x.includes(code)).length
        let teaminfo = [points,code]
        table.push(teaminfo)
    }
    let sortedtable = table.sort(function(a, b) {return b[0] - a[0]})
    //console.log(sortedtable)
    for (let i = 0; i < n; i++) {
        drawteams.push(sortedtable[i][1])
    }
}

function draw_tournament(b) {
    drawteams = [] 
    let t = ''
    let n = ''
    let drawsource = []
    if (b == "EURO") {
        t = "-ee";n = 16
        source_table(t, n)
    }
    if (b == "WORLD_CUP") {
        t = "-wce";n = 32
        source_table(t, n)
    }
    if (b == "COPA") {
        t = " ame"; n = 12
        for (let i = 0; i < n; i++) {
            drawsource.push(Teams.filter(x => x.includes(t))[i].split(' ')[5])
        }
        drawteams = drawsource
    }
    if (b == "APJCUP") {
        t = " apj"; n = 4
        for (let i = 0; i < n; i++) {
            drawsource.push(Teams.filter(x => x.includes(t))[i].split(' ')[5])
        }
        drawteams = drawsource
    }
    if (b == "AFRICUP") {
        t = " afr"; n = 4
        for (let i = 0; i < n; i++) {
            drawsource.push(Teams.filter(x => x.includes(t))[i].split(' ')[5])
        }
        drawteams = drawsource
    }
    drawteams = drawteams.sort(() => Math.random() - 0.5)
    //console.log(drawteams)
    let g = n / 4
    let nn = 0
    //console.log(g)
    for (let i = 0; i < g; i++) {
        let to = []
        if (g == 1) {to[0] = b}
        if (g !== 1) {to[0] = b + (i+1)}
        to[1] = []
        for (let x = 0; x < 4; x++) {
            to[1][x] = drawteams[nn]
            nn++
        }
        //console.log(to) 
        ldb.teams_ordered.push(to)
    }
}

function draw_playoffs(b) {
    drawteams = []
    let t
    if (b == 'EUROpo') {
        let to = []
        to[0] = b
        to[1] = []
        for (let i = 0; i < 4; i++) {
            drawteams = []
            t = "EURO" + (i + 1)
            source_table(t, 2)
            to[1].push(drawteams[0])
            to[1].push(drawteams[1])
        }
        to[1] = to[1].sort(() => Math.random() - 0.5)
        ldb.teams_ordered.push(to)
    }
    if (b == 'WORLD_CUPpo') {
        let to = []
        to[0] = b
        to[1] = []
        for (let i = 0; i < 8; i++) {
            drawteams = []
            t = "WORLD_CUP" + (i + 1)
            source_table(t, 2)
            to[1].push(drawteams[0])
            to[1].push(drawteams[1])
        }
        to[1] = to[1].sort(() => Math.random() - 0.5)
        ldb.teams_ordered.push(to)
    }
    if (b == 'COPApo') {
        let to = []
        to[0] = b
        to[1] = []
        t = "COPA"
        source_table(t, 8)
        to[1] = drawteams
        to[1] = to[1].sort(() => Math.random() - 0.5)
        ldb.teams_ordered.push(to)
    }
    if (b == 'AFRICUPpo') {
        let to = []
        to[0] = b
        to[1] = []
        t = 'AFRICUP'
        source_table(t, 2)
        to[1] = drawteams
        to[1] = to[1].sort(() => Math.random() - 0.5)
        ldb.teams_ordered.push(to)
    }
    if (b == 'APJCUPpo') {
        let to = []
        to[0] = b
        to[1] = []
        t = 'APJCUP'
        source_table(t, 2)
        to[1] = drawteams
        to[1] = to[1].sort(() => Math.random() - 0.5)
        ldb.teams_ordered.push(to)
    }
}