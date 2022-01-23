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
        console.log('pressed')
    }
})
// begin match
let ELbmat = document.getElementById('start_match')
window.addEventListener('keydown', function (e) {
    if ((e.key === "s") && (ELbmat.style.display == "block")) {
        start_match ()
        console.log('pressed')
    }
})
// run_fixture
let ELrfix = document.getElementById('runfixture')
window.addEventListener('keydown', function (e) {
    if ((e.key === "r") && (ELrfix.style.display !== "none")) {
        run_fixture ()
        console.log('pressed')
    }
})
ELrfix.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        run_fixture ()
        console.log('pressed')
    }
})
// focus on dataleft div
let ELdataleft = document.getElementById('dataleft')
window.addEventListener('keydown', function (e) {
    if ((e.key === "q") && (ELdataleft.style.display !== "none")) {
        ELdataleft.focus()
        console.log('pressed')
    }
})
// focus on dataright div
let ELdataright = document.getElementById('dataright')
window.addEventListener('keydown', function (e) {
    if ((e.key === "w") && (ELdataright.style.display !== "none")) {
        ELdataright.focus()
        console.log('pressed')
    }
})
//My League button
let ELmyleague = document.getElementById('myleague')
window.addEventListener('keydown', function (e) {
    if ((e.key === "2") && (ELrfix.style.display !== "none")) {
        myleague(ldb.my_league)
        console.log('pressed')
    }
})
ELmyleague.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        myleague(ldb.my_league)
        console.log('pressed')
    }
})
//Results button
let ELshowleague = document.getElementById('showleague')
window.addEventListener('keydown', function (e) {
    if ((e.key === "3") && (ELrfix.style.display !== "none")) {
        res_list ()
        document.getElementById('teamsel').focus()
        console.log('pressed')
    }
})
ELshowleague.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        res_list ()
        console.log('pressed')
    }
})
//Show Team button
let ELshowteam = document.getElementById('showteam')
window.addEventListener('keydown', function (e) {
    if ((e.key === "4") && (ELrfix.style.display !== "none")) {
        showteam ()
        document.getElementById('seek1').focus()
        console.log('pressed')
    }
})
ELshowteam.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        showteam ()
        console.log('pressed')
    }
})
//Show my stats
let ELmystats = document.getElementById('mystats')
window.addEventListener('keydown', function (e) {
    if ((e.key === "1") && (ELrfix.style.display !== "none")) {
        document.getElementById('matchbox').style.display = "none"
        document.getElementById('datatop').innerHTML = ''
        gather_team_info(ldb.my_team[0])
        console.log('pressed')
    }
})
ELmystats.addEventListener('click', function (e) {
    if (ELrfix.style.display !== "none") {
        document.getElementById('matchbox').style.display = "none"
        document.getElementById('datatop').innerHTML = ''
        gather_team_info(ldb.my_team[0])
        console.log('pressed')
    }
})


