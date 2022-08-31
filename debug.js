        //DEBUG VALUES
        //ldb.rank = 5
        //ldb.my_playoffs = 'WORLD_CUPpo'
        //document.getElementById('loginbox').style.display = 'none'
        //console.clear()
        //document.getElementById('newgame').click()
        //render_finaldata ()
        //generate_achievements ()
        //render_objectives ('ns_right')
        //DEBUG VALUESz n
        //document.getElementById('newgame').click()
        //document.getElementById('runfixture').style.display = 'none'
        //get_winners ()
        //console.log(ldb.winners)
        //render_winners ()
        //get_myteam_stats ()
        //evaluate_achievements ()
        //get_manager_rank ()
        //get_myteam_stats ()
        //get_winners ()
        //AchsTable = []
        //generate_offers(ldb.newrank)
        //render_offers('ns_content')
        //credits ()
                //hotkeys ()
                console.clear()

        function renderMatch () {
                assign_team('p01')
                document.getElementById('loginbox').style.display = 'none'
                document.getElementById('menubox').style.display = 'block'
                document.getElementById('infofield').style.display = 'block'
                document.getElementById('databox').style.display = 'block'
                document.getElementById('matchbox').style.display = 'block'
                set_matchbox('n01','p01')
                populate_tactics()
                start_match ()
                md = 'po'
                pen_mode = 0
                pens_round = 0
                total_minutes = 125
                match_minute = 1
                //match_init ('n06','e05')
                match_runner()
        }
        //renderMatch ()
        //tc_init ()