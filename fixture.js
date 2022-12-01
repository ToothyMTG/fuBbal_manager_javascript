function fixture(t, n) {
    document.getElementById('dataleft').innerHTML = ''
    document.getElementById('dataright').innerHTML = ''
    let lgs = GameTypes.filter(x => x.includes(t))[0].split('|')[1].split(',')
    //console.log(lgs)
    let fixt_pat
    if (t == "lg") {fixt_pat = Fixture_lg[n - 1]; md = "lg"}
    if (t == "wcelim") {fixt_pat = Fixture_nel[n - 1]; md = "lg"}
    if (t == "euroelim") {fixt_pat = Fixture_nel[n - 1]; md = "lg"}
    if (t == "club") {fixt_pat = Fixture_club[n - 1]; md = "po"; ponum = 24}
    if (t == 'draw1') {fixt_pat = '0,0'}
    if (t == 'TOUR') {fixt_pat = Fixture_tour[n - 1]; md = 'lg'}
    if (t == 'draw2') {fixt_pat = '0,0'}
    if (t == "TOURpo") {fixt_pat = Fixture_8[n - 1]; md = "po"}
    if (t == "FINALpo") {fixt_pat = Fixture_8[n]; md = "po"}
    if (t == 'WC') {fixt_pat = Fixture_tour[n - 1]; md = 'lg'}
    if (t == 'draw3') {fixt_pat = '0,0'}
    if (t == "WCpo") {fixt_pat = Fixture_16[n - 1]; md = "po"}
    if (t == "WCFINAL") {fixt_pat = Fixture_8[n]; md = "po"}
    if (t == 'NS') {fixt_pat = '0,0'}

    fixt_pat = fixt_pat.split(',')
    //console.log(fixt_pat)
    if (t == 'NS') {
        cnt = 'null'
        document.getElementById('new_season').style.display = 'block'
        document.getElementById('menubox').style.display = 'none'
        document.getElementById('infofield').style.display = 'none'
        document.getElementById('matchbox').style.display = 'none'
        document.getElementById('databox').style.display = 'none'
        document.getElementById('runfixture').style.display = 'none'
        get_myteam_stats ()
        evaluate_achievements ()
        get_winners ()
        get_myteam_stats ()
        get_manager_rank ()
        AchsTable = []
        generate_offers(ldb.newrank)
    }
    if (t == 'draw3') {
        document.getElementById('databox').style.display = 'block'
        cnt = 'null'
        draw_playoffs(lgs[0])
        let lg = ldb.teams_ordered[46][0]
        let tms = ldb.teams_ordered[46][1]
        let tmsn = []
        let p = document.createElement('p')
        for (let x = 0; x < tms.length; x++) {
            let tmsf1 = Teams.filter(b => b.includes(tms[x]))[0].split(' ')[0]
            x++
            let tmsf2 = Teams.filter(b => b.includes(tms[x]))[0].split(' ')[0]
            if ((tmsf1 == ldb.my_team[0]) || (tmsf2 == ldb.my_team[0])) {
                p.classList.add('good')
            }
            tmsn += tmsf1 + ' vs ' + tmsf2 + "<br>"
        }
        p.style.lineHeight = "100%"
        p.style.textAlign = "center"
        p.innerHTML = lg + "<br>" + tmsn
        dataleft.appendChild(p)
        
    }
    if (t == 'draw2') {
        document.getElementById('databox').style.display = 'block'
        cnt = 'null'
        for (let i = 0; i < lgs.length; i++) {
            draw_playoffs(lgs[i])
        }
        for (let i = 42; i < 46; i++) {
            let lg = ldb.teams_ordered[i][0]
            let tms = ldb.teams_ordered[i][1]
            let tmsn = []
            let p = document.createElement('p')
            for (let x = 0; x < tms.length; x++) {
                let tmsf1 = Teams.filter(b => b.includes(tms[x]))[0].split(' ')[0]
                x++
                let tmsf2 = Teams.filter(b => b.includes(tms[x]))[0].split(' ')[0]
                if ((tmsf1 == ldb.my_team[0]) || (tmsf2 == ldb.my_team[0])) {
                    p.classList.add('good')
                }
                tmsn += tmsf1 + ' vs ' + tmsf2 + "<br>"
            }
            p.style.lineHeight = "100%"
            p.style.textAlign = "center"
            p.innerHTML = lg + "<br>" + tmsn
            dataleft.appendChild(p)
        }
    }
    if (t == "draw1") {
        cnt = 'null'
        for (let i = 0; i < lgs.length; i++) {
            draw_tournament(lgs[i])
            }
        let dataleft = document.getElementById('dataleft')
        for (let i = 25; i < 42; i++) {
            let lg = ldb.teams_ordered[i][0]
            let tms = ldb.teams_ordered[i][1]
            let tmsn = []
            let p = document.createElement('p')
            for (let x = 0; x < tms.length; x++) {
                let tmsf = Teams.filter(b => b.includes(tms[x]))[0].split(' ')[0]
                if (tmsf == ldb.my_team[0]) {
                    p.classList.add('good')
                }
                tmsn.push(tmsf)
            }
            p.style.lineHeight = "100%"
            p.style.textAlign = "center"
            p.innerHTML = fn[lg] + "<br>" + tmsn[0] + ' | ' + tmsn[1] + ' | ' + tmsn[2] + ' | ' + tmsn[3]
            dataleft.appendChild(p)
        }
    }
    if ((t == "club") || (t == 'TOURpo') || (t == 'FINALpo') || (t == 'WCpo') || (t =='WCFINAL')) {
        cnt = 'null'
        for (let dd = 0; dd < lgs.length; dd++) {
            let tt = lgs[dd]
            ponum = POLOC[tt]
            let valope = Number(fixt_pat[0].split('-')[0])
            let valmax = Number(fixt_pat[0].split('-')[1])
            if ((t == 'FINALpo') || (t == 'WCFINAL')) {
                valope = ldb.teams_ordered[ponum][1].length - 2
                valmax = valope + 1
            }
            //console.log(valope,valmax, ponum, tt)
            for (let i = valope; i <= valmax; i++) {
                let o1 = ldb.teams_ordered[ponum][1][i]
                i++
                let o2 = ldb.teams_ordered[ponum][1][i]
                let tmm1 = Teams.filter(x => x.includes(o1))[0].split(' ')[0]
                let tmm2 = Teams.filter(x => x.includes(o2))[0].split(' ')[0]
                //console.log(tmm1,tmm2,ponum)
                if ((tmm1 == ldb.my_team[0]) || (tmm2 == ldb.my_team[0])) {
                    document.getElementById('matchbox').style.display = 'block'
                    document.getElementById('runfixture').style.display = 'none'
                    document.getElementById('dummybutton').style.display = "block"
                    set_matchbox(tmm1, tmm2)
                    cnt = tt
                    pondum = ponum
                    continue
                }
                //console.log(tmm1, tmm2)
                simulate_match(tmm1,tmm2)
                let p = document.createElement('p')
                p.innerHTML = tmm1 + " : " + g_1 + " - " + g_2 + " : " + tmm2 + " (" + fn[tt] + ")"
                document.getElementById('dataleft').appendChild(p)
                let result = t_1 + "-" + g_1 + '-' + t_2 + '-' + g_2 + '-' + tt
                ldb.Results.push(result)
                if (g_1 > g_2) {ldb.teams_ordered[ponum][1].push(t_1)}
                if (g_2 > g_1) {ldb.teams_ordered[ponum][1].push(t_2)}
            }
            let pp = document.createElement('p')
            pp.innerHTML = '<br>'
            document.getElementById('dataleft').appendChild(pp)
        }
    } 
    if ((t == 'lg') || (t == 'euroelim') || (t == 'wcelim') || (t == 'TOUR') || (t =='WC')) {
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
                p.innerHTML = tmm1 + " : " + g_1 + " - " + g_2 + " : " + tmm2 + " (" + fn[container[0]] + ")"
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
            let pp = document.createElement('p')
            pp.innerHTML = '<br>'
            document.getElementById('dataleft').appendChild(pp)
        }
    }
    make_table(cnt)
    document.getElementById("dataleft").scrollTop = document.getElementById('dataleft').scrollHeight
}