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