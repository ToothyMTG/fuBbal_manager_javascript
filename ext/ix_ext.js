function ix_t_code (y) {
    var base = Teams.filter(x => x.includes(y))[0].split(' ')
    T = {}
    T.name = base[0]
    T.code = base[5]
    T.atk = Number(base[1])
    T.mid = Number(base[2])
    T.def = Number(base[3])
    T.group = base[4]
    T.colors = [base[6],base[7]]
}

function ix_t_name (y) {
    var base = Teams.filter(x => x.includes(y))[0].split(' ')[5]
    ix_t_code(base)
}

function ix_t_id (y) {
    var base = Teams[y].split(' ')[5]
    ix_t_code(base)
}

function ix_l_code(y) {
    var base = Leagues.filter(x => x.includes(y))[0].split(' ')
    L = {}
    L.name = base[0]
    L.code = base[1]
    L.pot = base[2]
    L.capacity = base[3]
    L.main_league = base[4]
    L.main_cup = base[5]
    L.teams = Teams.filter(x => x.includes(' '+y))
    console.log(L)
}

function ix_l_id(y) {
    var base = Leagues[y].split(' ')[1]
    ix_l_code(base)
}

function ix_schedule(y) {
    var base = Schedule[y]
    S = {}
    S.name = base.split(' ')[0]
    S.id = y
    S.fixture = base.split(' ')[1]
    S.leagues = GameTypes.filter(x => x.includes(S.name+'|'))[0].split('|')[1].split(',')
    console.log(S)
}

ix_schedule(22)
debug(JSON.stringify(S))