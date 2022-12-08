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


