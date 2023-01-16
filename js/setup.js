function get_teams (x) {
    TL = []
    var teambucket = LC[x]
    //console.log(teambucket)
    for (let i = 0; i < teambucket.length; i++) {
        var lookup = ' '+teambucket[i]+' '
        var teams = Teams.filter(o => o.includes(lookup))
        for (let z = 0; z < teams.length; z++) {
            var id = teams[z].split(' ')[5]
            TL.push(id)
        }
        //console.log(teams)
    }
    TL = TL.sort(() => Math.random() - 0.5)
    //console.log(TL)
}

function asses_club_cup_pts (y) {
    get_teams(y)
    CCPTS = []
    for (let i = 0; i < TL.length; i++) {
        ix_t_code(TL[i])
        var lgpts = ldb.Tables.filter(x => x.includes(T.code)).length
        var pts = T.atk + T.def + T.mid + lgpts
        var fd = [T.code,pts]
        CCPTS.push(fd)
    }
    CCPTS = CCPTS.sort(function(a, b) {return b[1] - a[1]})
}

function generate_club_cup_containers () {
    asses_club_cup_pts('lg')
    CLT = []
    ELT = []
    for (let i = 0; i < CCPTS.length; i++) {
        var team = CCPTS[i][0]
        if (i < 64) {
            CLT.push(team)
        } else {
            ELT.push(team)
        }
    }
    CLT = CLT.sort(() => Math.random() - 0.5)
    TL = CLT
    create_groups(4)
    ldb.GP['CLgp'] = DRW
    ELT = ELT.sort(() => Math.random() - 0.5)
    TL = ELT
    create_groups(2)
    ldb.GP['ELgp'] = DRW
}

function generate_euroelim_wcelim_containers() {
     get_teams('eur')
     TL = TL.sort(() => Math.random() - 0.5)
     create_groups(6)
     ldb.GP['EUROelim'] = DRW
     get_teams('nat')
     TL = TL.sort(() => Math.random() - 0.5)
     create_groups(7)
     ldb.GP['WCelim'] = DRW
}

function create_groups(x, y) {
    DRW = []
    var gamemode = GM[x]
    var teams = TL
    var teampergroup = gamemode[2]
    var groups = teams.length / teampergroup
    D = [x,teams,groups,teampergroup]
    for (let i = 0; i < groups; i++) {
        DRW[i] = []
    }
    var grpcnt = 0
    for (let i = 0; i < teams.length; i++) {
        var team = teams[i]
        DRW[grpcnt].push(team)
        grpcnt++
        if (grpcnt > (groups-1)) {grpcnt = 0}
    }
}

function generate_leagues () {
    var leagues = LC['lg']
    for (let i = 0; i < leagues.length; i++) {
        var lg = leagues[i]
        var teamsinit = Teams.filter(x => x.includes(lg + ' '))
        var teams = []
        for (let o = 0; o < teamsinit.length; o++) {
            var base = teamsinit[o].split(' ')[5]
            ix_t_code(base)
            teams.push(T.code)
        }
        teams = teams.sort(() => Math.random() - 0.5)
        ldb.LG[lg] = teams
    }
}