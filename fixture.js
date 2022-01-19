function fixture(t, n) {
    document.getElementById('dataleft').innerHTML = ''
    let lgs = GameTypes.filter(x => x.includes(t))[0].split('|')[1].split(',')
    //console.log(lgs)
    let fixt_pat
    if (t == "lg") {fixt_pat = Fixture_lg[n - 1]; md = "lg"}
    if (t == "wcelim") {fixt_pat = Fixture_nel[n - 1]; md = "lg"}
    if (t == "euroelim") {fixt_pat = Fixture_nel[n - 1]; md = "lg"}
    if (t == "club") {fixt_pat = Fixture_club[n - 1]; md = "po"}
    fixt_pat = fixt_pat.split(',')
    //console.log(fixt_pat)
    if (t == "club") {
        let valope = fixt_pat[0].split('-')[0]
        let valmax = fixt_pat[0].split('-')[1]
        //console.log(valope,valmax)
        for (let i = valope; i <= valmax; i++) {
            let o1 = ldb.teams_ordered[24][1][i]
            i++
            let o2 = ldb.teams_ordered[24][1][i]
            let tmm1 = Teams.filter(x => x.includes(o1))[0].split(' ')[0]
            let tmm2 = Teams.filter(x => x.includes(o2))[0].split(' ')[0]
            if ((tmm1 == ldb.my_team[0]) || (tmm2 == ldb.my_team[0])) {
                document.getElementById('matchbox').style.display = 'block'
                document.getElementById('runfixture').style.display = 'none'
                document.getElementById('dummybutton').style.display = "block"
                set_matchbox(tmm1, tmm2)
                cnt = 'club'
                continue
            }
            //console.log(tmm1, tmm2)
            simulate_match(tmm1,tmm2)
            let p = document.createElement('p')
            p.innerHTML = tmm1 + " : " + g_1 + " - " + g_2 + " : " + tmm2 + " (club)"
            document.getElementById('dataleft').appendChild(p)
            let result = t_1 + "-" + g_1 + '-' + t_2 + '-' + g_2 + '-' + 'club'
            ldb.Results.push(result)
            if (g_1 > g_2) {ldb.teams_ordered[24][1].push(t_1)}
            if (g_2 > g_1) {ldb.teams_ordered[24][1].push(t_2)}
        }
    } else {
        cnt = 'null'
        //Working for lg and wc/euro eliminations
        for (let i = 0;i < lgs.length;i++) {
            //console.log(lgs[i])
            let container = ldb.teams_ordered.filter(x => x[0].includes(lgs[i]))[0]
            //console.log(container)
            for (let m = 0; m < fixt_pat.length; m++) {
                let o1 = fixt_pat[m].split('-')[0]
                let o2 = fixt_pat[m].split('-')[1]
                o1 = Number(o1)
                o2 = Number(o2)
                //console.log(o1, o2)
                //console.log(container[1][o2])
                let tmm1 = Teams.filter(x => x.includes(container[1][o1]))[0].split(' ')[0]
                let tmm2 = Teams.filter(x => x.includes(container[1][o2]))[0].split(' ')[0]
                if ((tmm1 == ldb.my_team[0]) || (tmm2 == ldb.my_team[0])) {
                    document.getElementById('matchbox').style.display = 'block'
                    document.getElementById('runfixture').style.display = 'none'
                    document.getElementById('dummybutton').style.display = "block"
                    set_matchbox(tmm1, tmm2)
                    cnt = container[0]
                    continue
                }
                //console.log(tmm1, tmm2)
                simulate_match(tmm1,tmm2)
                let p = document.createElement('p')
                p.innerHTML = tmm1 + " : " + g_1 + " - " + g_2 + " : " + tmm2 + " (" + container[0] + ")"
                document.getElementById('dataleft').appendChild(p)
                let result = t_1 + "-" + g_1 + '-' + t_2 + '-' + g_2 + '-' + container[0]
                if (g_1 > g_2) {
                    for (let i = 0; i < 3; i++) {ldb.Tables.push(t_1 + "-" + container[0])}
                }
                if (g_2 > g_1) { 
                    for (let i = 0; i < 3; i++) {ldb.Tables.push(t_2 + "-" + container[0])}
                }
                if (g_1 == g_2) {
                    ldb.Tables.push(t_1 + '-' + container[0])
                    ldb.Tables.push(t_2 + '-' + container[0])
                }
                ldb.Results.push(result)
            }
        }
    }
    make_table(cnt)
    document.getElementById("dataleft").scrollTop = document.getElementById('dataleft').scrollHeight
}