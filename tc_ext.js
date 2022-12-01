function tc_init () {
    if ((M[1].i[0] == ldb.my_team[0]) && (M[1].tc == 0) ) {return}
    if ((M[2].i[0] == ldb.my_team[0]) && (M[2].tc == 0) ) {return}
    document.getElementById('match_runner').style.display = 'none'
    document.getElementById('tactic_selection').style.display = 'block'
    document.getElementById('resume_match').style.display = 'block'
    document.getElementById('tactic_change').style.display = 'none'
    if (ap_state == 1) {
    ap_stop ()
    }
    document.getElementById('tactic_selection').focus()
}

function tc_enem_tact () {
    if ((M[1].i[0] == ldb.my_team[0]) && (M[2].tc == 0) ) {return}
    if ((M[2].i[0] == ldb.my_team[0]) && (M[1].tc == 0) ) {return}
    var randtact = Math.floor(Math.random() * Tactics.length)
    M.enemtact = Tactics[randtact]
    tc_who = 0
    tc_rerender ()
    if (M[1].i[0] == ldb.my_team[0]) {M[2].tc = 0}
    if (M[2].i[0] == ldb.my_team[0]) {M[1].tc = 0}
}

function tc_rand () {
    var rand = Math.floor(Math.random() * 30)
    if (rand == 0) {
        tc_enem_tact () 
    }
}

function tc_resume () {
    let my_tactics = document.getElementById('tactic_selection').value
    M.mytact = [ Number(my_tactics[0]), Number(my_tactics[1]), Number(my_tactics[2])]
    tc_who = 1
    tc_rerender ()
    document.getElementById('match_runner').style.display = 'block'
    document.getElementById('tactic_selection').style.display = 'none'
    document.getElementById('resume_match').style.display = 'none'
    if (M[1].i[0] == ldb.my_team[0]) {M[1].tc = 0}
    if (M[2].i[0] == ldb.my_team[0]) {M[2].tc = 0}
}

function tc_rerender () {
    var matchfield = document.getElementById('matchfield')
    matchfield.innerHTML = ''
    for (let i = 0; i < 6; i++) {
        var div = document.createElement('div')
        div.classList.add('matchfield-div')
        div.id = 'sector' + i
        //div.tabIndex = '-1'
        matchfield.appendChild(div)
    }
    for (let i = 0; i < 6; i++) {
        var div = document.getElementById('sector' + i)
        for (let x = 0; x < 5; x++) {
            var button = document.createElement('button')
            div.appendChild(button)
        } 
    }
    var team1tact
    var team2tact   
    var team1fields = [4,2,0]
    var team2fields = [1,3,5]
    var renpat = [[],[2],[1,3],[0,2,4],[0,1,3,4],[0,1,2,3,4]]
    var teamrenpat = [1,2,1,2,1,2]
    if (ldb.my_team[0] == M[1].i[0]) {
        M[1].pow = [ (M.mytact[0] + Number(M[1].i[1])),(M.mytact[1] + Number(M[1].i[2])),(M.mytact[2] + Number(M[1].i[3]))]
        M[2].pow = [ (M.enemtact[0] + Number(M[2].i[1])),(M.enemtact[1] + Number(M[2].i[2])),(M.enemtact[2] + Number(M[2].i[3]))]
        team1tact = M.mytact
        team2tact = M.enemtact
        if (tc_who == 1) {tc_whoc = 1}
        if (tc_who == 0) {tc_whoc = 2}
    }
    if (ldb.my_team[0] == M[2].i[0]) {
        M[2].pow = [ (M.mytact[0] + Number(M[2].i[1])),(M.mytact[1] + Number(M[2].i[2])),(M.mytact[2] + Number(M[2].i[3]))]
        M[1].pow = [ (M.enemtact[0] + Number(M[1].i[1])),(M.enemtact[1] + Number(M[1].i[2])),(M.enemtact[2] + Number(M[1].i[3]))]
        team2tact = M.mytact
        team1tact = M.enemtact 
        if (tc_who == 1) {tc_whoc = 2}
        if (tc_who == 0) {tc_whoc = 1}
    }
    var tc_tacts = [team1tact,team2tact]
    for (let i = 1; i < 3; i++) {
        if (tc_whoc == i) {
            M[i].tt.push(tc_tacts[i-1])
            M[i].tt.push(M.minute)
            M[i].tt.push([M[1].g,M[2].g])
        }
    }
    M.centerpow = M[1].pow[1] + M[2].pow[1]
    var rendermap = [team1tact[2],team2tact[0],team1tact[1],team2tact[1],team1tact[0],team2tact[2]]
    for (let i = 0; i < rendermap.length; i++) {
        var div =  document.getElementById('sector' + i)
        var val  = rendermap[i]
        var pat = renpat[val]
        var buttons = div.getElementsByTagName('button')
        var teamcolors
        if (teamrenpat[i] == 1) {
           teamcolors = [M[1].i[6],M[1].i[7]]
        }
        if (teamrenpat[i] == 2) {
           teamcolors = [M[2].i[6],M[2].i[7]]
            if (M[1].i[6] == M[2].i[6]) {
                teamcolors = [M[2].i[7],M[2].i[6]]   
            }
        }
        for (let x = 0; x < pat.length; x++) {
            buttons[pat[x]].style.backgroundColor = teamcolors[0]
            buttons[pat[x]].style.borderColor = teamcolors[1]
            buttons[pat[x]].style.opacity = 1
        }
    }
}