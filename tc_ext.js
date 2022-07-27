function tc_init () {
    if ((team1[0] == ldb.my_team[0]) && (tc_team1 == 0) ) {return}
    if ((team2[0] == ldb.my_team[0]) && (tc_team2 == 0) ) {return}
    document.getElementById('match_runner').style.display = 'none'
    document.getElementById('tactic_selection').style.display = 'block'
    document.getElementById('resume_match').style.display = 'block'
    if (ap_state == 1) {
    ap_stop ()
    }
    document.getElementById('tactic_selection').focus()
}

function tc_enem_tact () {
    if ((team1[0] == ldb.my_team[0]) && (tc_team2 == 0) ) {return}
    if ((team2[0] == ldb.my_team[0]) && (tc_team1 == 0) ) {return}
    var randtact = Math.floor(Math.random() * Tactics.length)
    enemtact = Tactics[randtact]
    tc_rerender ()
    if (team1[0] == ldb.my_team[0]) {tc_team2 = 0}
    if (team2[0] == ldb.my_team[0]) {tc_team1 = 0}
}

function tc_rand () {
    var rand = Math.floor(Math.random() * 30)
    if (rand == 0) {
        tc_enem_tact () 
    }
}

function tc_resume () {
    let my_tactics = document.getElementById('tactic_selection').value
    mytact = [ Number(my_tactics[0]), Number(my_tactics[1]), Number(my_tactics[2])]
    tc_rerender ()
    document.getElementById('match_runner').style.display = 'block'
    document.getElementById('tactic_selection').style.display = 'none'
    document.getElementById('resume_match').style.display = 'none'
    if (team1[0] == ldb.my_team[0]) {tc_team1 = 0}
    if (team2[0] == ldb.my_team[0]) {tc_team2 = 0}
}

function tc_rerender () {
    var matchfield = document.getElementById('matchfield')
    matchfield.innerHTML = ''
    matchfield.style.backgroundColor = 'lightgrey'
    for (let i = 0; i < 6; i++) {
        var div = document.createElement('div')
        div.classList.add('matchfield-div')
        div.id = 'sector' + i
        matchfield.appendChild(div)
    }
    for (let i = 0; i < 6; i++) {
        var div = document.getElementById('sector' + i)
        for (let x = 0; x < 5; x++) {
            var button = document.createElement('button')
            button.style.height = 100 / 5 + "%"
            div.appendChild(button)
        } 
    }
    var team1tact
    var team2tact   
    var team1fields = [4,2,0]
    var team2fields = [1,3,5]
    var renpat = [[],[2],[1,3],[0,2,4],[0,1,3,4],[0,1,2,3,4]]
    var teamrenpat = [1,2,1,2,1,2]
    if (ldb.my_team[0] == team1[0]) {
        team1pow = [ (mytact[0] + Number(team1[1])),(mytact[1] + Number(team1[2])),(mytact[2] + Number(team1[3]))]
        team2pow = [ (enemtact[0] + Number(team2[1])),(enemtact[1] + Number(team2[2])),(enemtact[2] + Number(team2[3]))]
        team1tact = mytact
        team2tact = enemtact
    }
    if (ldb.my_team[0] == team2[0]) {
        team2pow = [ (mytact[0] + Number(team2[1])),(mytact[1] + Number(team2[2])),(mytact[2] + Number(team2[3]))]
        team1pow = [ (enemtact[0] + Number(team1[1])),(enemtact[1] + Number(team1[2])),(enemtact[2] + Number(team1[3]))]
        team2tact = mytact
        team1tact = enemtact 
    }
    centerpow = team1pow[1] + team2pow[1]
    var rendermap = [team1tact[2],team2tact[0],team1tact[1],team2tact[1],team1tact[0],team2tact[2]]
    for (let i = 0; i < rendermap.length; i++) {
        var div =  document.getElementById('sector' + i)
        var val  = rendermap[i]
        var pat = renpat[val]
        var buttons = div.getElementsByTagName('button')
        var teamcolors
        if (teamrenpat[i] == 1) {
           teamcolors = [team1[6],team1[7]]
        }
        if (teamrenpat[i] == 2) {
           teamcolors = [team2[6],team2[7]]
            if (team1[6] == team2[6]) {
                teamcolors = [team2[7],team2[6]]   
            }
        }
        for (let x = 0; x < pat.length; x++) {
            buttons[pat[x]].style.backgroundColor = teamcolors[0]
            buttons[pat[x]].style.borderColor = teamcolors[1]
            buttons[pat[x]].style.opacity = 1
        }
    }
}