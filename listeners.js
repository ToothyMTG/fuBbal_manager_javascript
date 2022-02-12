// match_runner
let ELmrun = document.getElementById('match_runner')
ELmrun.addEventListener('click', match_runner)
window.addEventListener('keydown', function (e) {
    if ((e.key === "p") && (ELmrun.style.display == "block")) {
        match_runner ()
    }
})
// expand tactics_menu
let ELtsel = document.getElementById('tactic_selection')
window.addEventListener('keydown', function (e) {
    if ((e.key === "m") && (ELtsel.style.display == "block")) {
        ELtsel.focus()
    }
})
// begin match
let ELbmat = document.getElementById('start_match')
window.addEventListener('keydown', function (e) {
    if ((e.key === "s") && (ELbmat.style.display == "block")) {
        start_match ()
    }
})
// run_fixture
let ELrfix = document.getElementById('runfixture')
window.addEventListener('keydown', function (e) {
    if ((e.key === "r") && (ELrfix.style.display !== "none")) {
        run_fixture ()
    }
})
ELrfix.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        run_fixture ()
    }
})
// focus on dataleft div
let ELdataleft = document.getElementById('dataleft')
window.addEventListener('keydown', function (e) {
    if ((e.key === "q") && (ELdataleft.style.display !== "none")) {
        ELdataleft.focus()
    }
})
// focus on dataright div
let ELdataright = document.getElementById('dataright')
window.addEventListener('keydown', function (e) {
    if ((e.key === "w") && (ELdataright.style.display !== "none")) {
        ELdataright.focus()
    }
})
//My League button
let ELmyleague = document.getElementById('myleague')
window.addEventListener('keydown', function (e) {
    if ((e.key === "2") && (ELrfix.style.display !== "none")) {
        myleague(ldb.my_league)
    }
})
ELmyleague.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        myleague(ldb.my_league)
    }
})
//Results button
let ELshowleague = document.getElementById('showleague')
window.addEventListener('keydown', function (e) {
    if ((e.key === "3") && (ELrfix.style.display !== "none")) {
        res_list ()
        document.getElementById('teamsel').focus()
    }
})
ELshowleague.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        res_list ()
    }
})
//Show Team button
let ELshowteam = document.getElementById('showteam')
window.addEventListener('keydown', function (e) {
    if ((e.key === "4") && (ELrfix.style.display !== "none")) {
        showteam ()
        document.getElementById('seek1').focus()
    }
})
ELshowteam.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        showteam ()
    }
})
//Show my stats
let ELmystats = document.getElementById('mystats')
window.addEventListener('keydown', function (e) {
    if ((e.key === "1") && (ELrfix.style.display !== "none")) {
        document.getElementById('matchbox').style.display = "none"
        document.getElementById('datatop').innerHTML = ''
        document.getElementById('datatop').style.display = 'none'
        gather_team_info(ldb.my_team[0])
    }
})
ELmystats.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        document.getElementById('matchbox').style.display = "none"
        document.getElementById('datatop').innerHTML = ''
        document.getElementById('datatop').style.display = 'none'
        gather_team_info(ldb.my_team[0])
    }
})

let ns_listener = document.getElementById('new_season')
//New Season - Statistics
let NSstats = document.getElementById('ns_stats')
window.addEventListener('keydown', function (e) {
    if ((e.key === "1") && (ns_listener.style.display !== "none")) {
        document.getElementById('ns_content').innerHTML = ''
        render_finaldata()
    }
})
NSstats.addEventListener('click', function (e) {
    if (ns_listener.style.display !== "none") {
        document.getElementById('ns_content').innerHTML = ''
        render_finaldata()
    }
})
//New Season - Statistics
let NSobjectives = document.getElementById('ns_obj')
window.addEventListener('keydown', function (e) {
    if ((e.key === "2") && (ns_listener.style.display !== "none")) {
        document.getElementById('ns_content').innerHTML = ''
        render_objectives('ns_content')
    }
})
NSobjectives.addEventListener('click', function (e) {
    if (ns_listener.style.display !== "none") {
        document.getElementById('ns_content').innerHTML = ''
        render_objectives('ns_content')
    }
})
//New Season - Winners
let NSwinners = document.getElementById('ns_winners')
window.addEventListener('keydown', function (e) {
    if ((e.key === "3") && (ns_listener.style.display !== "none")) {
        document.getElementById('ns_content').innerHTML = ''
        render_winners()
    }
})
NSwinners.addEventListener('click', function (e) {
    if (ns_listener.style.display !== "none") {
        document.getElementById('ns_content').innerHTML = ''
        render_winners()
    }
})

