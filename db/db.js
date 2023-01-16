Leagues = [
    "Germany ger g 16 ger club",
    "Italy ita i 16 ita club",
    "Spain esp s 16 esp club",
    "France fra f 16 fra club",
    "Netherlands ned h 16 ned club",
    "England eng e 16 eng club",
    "Portugal por o 16 por club",
    "Poland pol p 16 pol club",
    "Europe eur n 30 WORLD_CUP WORLD_CUPpo",
    "America ame n 12 WORLD_CUP WORLD_CUPpo",
    "Africa afr n 4 WORLD_CUP WORLD_CUPpo",
    "Asia apj n 4 WORLD_CUP WORLD_CUPpo",
]

LC = {
    'ger':['ger'],
    'ita':['ita'],
    'esp':['esp'],
    'fra':['fra'],
    'ned':['ned'],
    'eng':['eng'],
    'por':['por'],
    'pol':['pol'],
    'lg':['ger','ita','esp','fra','ned','eng','por','pol'],
    'eur':['eur'],
    'ame':['ame'],
    'afr':['afr'],
    'apj':['apj'],
    'nat':['eur','ame','afr','apj']
}

GM = [
    ['lg',16,1,'lg','fxtlg','lg',30],
    ['lgcup',16,1,'po','fxt16','lg',4],
    ['ELgp',64,4,'gp','fxttour','lg',3],
    ['ELcup',32,1,'po','fxt32','lg',5],
    ['CLgp',64,4,'gp','fxttour','lg',3],
    ['CLcup',32,1,'po','fxt32','lg',5],
    ['EUROelim',30,5,'gp','fxtnel','eur',10],
    ['WCelim',50,5,'gp','fxtnel','nat',10],
    ['EURO',16,4,'gp','fxttour','eur',3],
    ['EUROpo',8,1,'po','fxt8','eur',3],
    ['COPA',12,4,'gp','fxttour','ame',3],
    ['COPApo',8,1,'po','fxt8','eur',3],
    ['AFRICUP',4,4,'gp','fxttour','afr',3],
    ['AFRICUPpo',2,1,'po','fxt2','afr',1],
    ['ASIACUP',4,4,'gp','fxttour','apj',3],
    ['ASIACUPpo',2,1,'po','fxt2','apj',1]
    ['WC',32,8,'gp','fxttour','nat',3],
    ['WCpo',16,1,'po','fxt16','nat',4],
]

SD = [
    ''
]

Tactics = [
    [1,5,4], 
    [1,4,5], 
    [2,4,4],
    [2,5,3],
    [2,3,5],
    [3,4,3],
    [3,3,4]
]

GameTypes = [
    'lg|ger,ita,esp,ned,fra,eng,por,pol',
    'euroelim|ee1,ee2,ee3,ee4,ee5,ee6',
    'wcelim|wce1,wce2,wce3,wce4,wce5,wce6,wce7,wce8,wce9,wce0',
    'club|club',
    'TOUR|EURO1,EURO2,EURO3,EURO4,COPA1,COPA2,COPA3,AFRICUP,APJCUP',
    'TOURpo|EUROpo,COPApo',
    'FINALpo|EUROpo,COPApo,APJCUPpo,AFRICUPpo',
    'WC|WORLD_CUP1,WORLD_CUP2,WORLD_CUP3,WORLD_CUP4,WORLD_CUP5,WORLD_CUP6,WORLD_CUP7,WORLD_CUP8',
    'WCpo|WORLD_CUPpo',
    'WCFINAL|WORLD_CUPpo',
    'draw1|EURO,COPA,AFRICUP,APJCUP,WORLD_CUP',
    'draw2|EUROpo,COPApo,AFRICUPpo,APJCUPpo',
    'draw3|WORLD_CUPpo',
    'NS|ns'
]

Fixture_lg = [
"0-9,2-14,6-12,8-13,1-5,3-10,4-15,7-11",
"0-13,12-5,14-10,9-15,2-11,6-7,8-4,1-3",
"0-14,9-12,2-13,6-5,8-10,1-15,3-11,4-7",
"0-8,1-6,3-2,4-9,7-14,11-12,15-13,10-5",
"0-15,10-11,5-7,13-4,12-3,14-1,9-8,2-6",
"0-7,11-4,15-3,10-1,5-8,13-6,12-2,14-9",
"0-10,5-15,13-11,12-7,14-4,9-3,2-1,6-8",
"0-6,8-2,1-9,3-14,4-12,7-13,11-5,15-10",
"0-1,3-8,4-6,7-2,11-9,15-14,10-12,5-13",
"0-12,14-13,9-5,2-10,6-15,8-11,1-7,3-4",
"0-4,7-3,11-1,15-8,10-6,5-2,13-9,12-14",
"0-5,13-10,12-15,14-11,9-7,2-4,6-3,8-1",
"5-14,13-12,0-3,4-1,7-8,11-6,15-2,10-9",
"0-2,6-9,8-14,1-12,3-13,4-5,7-10,11-15",
"0-11,15-7,10-4,5-3,13-1,12-8,14-6,9-2",
"10-0,15-5,11-13,7-12,4-14,3-9,1-2,8-6",
"13-0,5-12,10-14,15-9,11-2,7-6,4-8,3-1",
"7-0,4-11,3-15,1-10,8-5,6-13,2-12,9-14",
"9-0,14-2,12-6,13-8,5-1,10-3,15-4,11-7",
"5-0,10-13,15-12,11-14,7-9,4-2,3-6,1-8",
"8-0,6-1,2-3,9-4,14-7,12-11,13-15,5-10",
"12-0,13-14,5-9,10-2,15-6,11-8,7-1,4-3",
"1-0,8-3,6-4,2-7,9-11,14-15,12-10,13-5",
"11-0,7-15,4-10,3-5,1-13,8-12,6-14,2-9",
"6-0,2-8,9-1,14-3,12-4,13-7,5-11,10-15",
"14-0,12-9,13-2,5-6,10-8,15-1,11-3,7-4",
"15-0,11-10,7-5,4-13,3-12,1-14,8-9,6-2",
"4-0,3-7,1-11,8-15,6-10,2-5,9-13,14-12",
"2-0,9-6,14-8,12-1,13-3,5-4,10-7,15-11",
"9-10,14-5,12-13,3-0,1-4,8-7,6-11,2-15",
]

Fixture_nel = [
'2-0,3-4',
'0-3,1-2',
'3-1,4-0',
'1-4,2-3',
'4-2,0-1',
'2-4,1-0',
'4-1,3-2',
'1-3,0-4',
'3-0,2-1',
'0-2,4-3',
]

Fixture_club = [
'0-127',
'128-191',
'192-223',
'224-239',
'240-247',
'248-251',
'252-253'
]

Fixture_tour = [
    '1-2,3-0',
    '1-3,2-0',
    '1-0,2-3'
]

Fixture_32 = [
    '0-31',
    '32-47',
    '48-55',
    '56-59',
//    '60-61',
]

Fixture_16 = [
    '0-15', 
    '16-23', 
    '24-27', 
//    '28-29', //final
]
Fixture_8 = [
    '0-7', 
    '8-11',
//    '12-13', //final
]
Fixture_4 = [
    '0-3', //1/2 final
//    '4-5', //final
]
Fixture_2 = [
    '0-1',
]

let schedule = 'lg 1,lg 2,euroelim 1,lg 3,club 1,lg 4,wcelim 1,lg 5,lg 6,euroelim 2,lg 7,lg 8,wcelim 2,lg 9,club 2,lg 10,euroelim 3,lg 11,lg 12,wcelim 3,lg 13,lg 14,euroelim 4,lg 15,club 3,lg 16,wcelim 4,lg 17,euroelim 5,lg 18,wcelim 5,lg 19,euroelim 6,lg 20,club 4,wcelim 6,lg 21,euroelim 7,lg 22,wcelim 7,lg 23,club 5,euroelim 8,lg 24,wcelim 8,lg 25,euroelim 9,lg 26,club 6,wcelim 9,lg 27,euroelim 10,lg 28,wcelim 10,lg 29,club 7,lg 30,'

let tournams = [
    'draw1 0',
    'TOUR 1',
    'TOUR 2',
    'TOUR 3',
    'draw2 0',
    'TOURpo 1',
    'TOURpo 2',
    'FINALpo 0',
    'WC 1',
    'WC 2',
    'WC 3',
    'draw3 0',
    'WCpo 1',
    'WCpo 2',
    'WCpo 3',
    'WCFINAL 0',
]

schedule += tournams

Schedule = schedule.split(',')
Schedule.push('NS 0')

POLOC = {
    'club' : 24,
    'EUROpo' : 42,
    'COPApo' : 43,
    'AFRICUPpo' : 44,
    'APJCUPpo' : 45,
    'WORLD_CUPpo' : 46,
}

Achievements = {
    'scope': ['global','myleague','playoffs'],
    'achies':[
        ['ptsrate',[15,25,35,45,50,55,60,70],'Achieve points rate of ','mt'],
        ['goalrate',[15,25,35,45,50,55,60,70],'Achieve goal rate of ','mt'],
        ['maxgoaldiff',[0,1,2,3,4,5,6,7],'Difference in goals scored by you and your opponent is ','mt'],
        ['winrate',[15,25,35,40,45,50,60,65],'Achieve win rate of ','mt'],
        ['lossrate',[80,70,60,50,40,30,20,10],'Do not achieve defeat rate of ','lt'],
    ]
}

fn = {
    'test':'Test',    
    'eng':'England',    
    'fra':'France',    
    'esp':'Spain',    
    'ned':'Netherlands',    
    'ger':'Germany',    
    'por':'Portugal',    
    'ita':'Italy',    
    'pol':'Poland',    
    'club':'Club Cup',    
    'ee':'Euro Eliminations',    
    'wce':'World Cup Eliminations',    
    'ee1':'Euro Elim 1',    
    'ee2':'Euro Elim 2',    
    'ee3':'Euro Elim 3',    
    'ee4':'Euro Elim 4',    
    'ee5':'Euro Elim 5',    
    'ee6':'Euro Elim 6',    
    'wce1':'WC Elim 1',    
    'wce2':'WC Elim 2',    
    'wce3':'WC Elim 3',    
    'wce4':'WC Elim 4',    
    'wce5':'WC Elim 5',    
    'wce6':'WC Elim 6',    
    'wce7':'WC Elim 7',    
    'wce8':'WC Elim 8',    
    'wce9':'WC Elim 9',    
    'wce0':'WC Elim 10',    
    'WORLD_CUP':'World Cup',    
    'WORLD_CUPpo':'WC Play-off',    
    'EURO':'Euro Cup',    
    'EUROpo':'Euro Play-off',    
    'COPA':'Copa America',    
    'COPApo':'Copa Play-off',    
    'APJCUP':'Asian Cup',    
    'APJCUPpo':'Asian Cup Play-off',    
    'AFRICUP':'Africa Nations Cup',    
    'AFRICUPpo':'Africa Nations Play-off',    
    'EURO1':'Euro Group 1',    
    'EURO2':'Euro Group 2',    
    'EURO3':'Euro Group 3',    
    'EURO4':'Euro Group 4',    
    'COPA1':'Copa Group 1',    
    'COPA2':'Copa Group 2',    
    'COPA3':'Copa Group 3',    
    'WORLD_CUP1':'WC Group 1',    
    'WORLD_CUP2':'WC Group 2',    
    'WORLD_CUP3':'WC Group 3',    
    'WORLD_CUP4':'WC Group 4',    
    'WORLD_CUP5':'WC Group 5',    
    'WORLD_CUP6':'WC Group 6',    
    'WORLD_CUP7':'WC Group 7',    
    'WORLD_CUP8':'WC Group 8',    
    'global':'global',    
    'lg':'League',
    'euroelim':'Euro Eliminations',
    'wcelim':'World Cup Eliminations',
    'TOUR':'Tournament',
    'TOURpo':'Tournament Play-Offs',
    'FINALpo':'Tournament Finals',
    'WC':'World Cup',
    'WCpo':'World Cup Play-Offs',
    'WCFINAL':'World Cup Final',
    'draw1':'Tournament Groups Draw',
    'draw2':'Tournament Play-Offs Draw',
    'draw3':'World Cup Play-Offs Draw',
    'NS':'New Season'
}

HotKeys = [
'R-Run Fixture',
'1-My Stats',
'2-My League',
'3-Results',
'4-Team Info',
'C-Save',
'X-Save and Exit',
'Q-Focus on left info box',
'W-Focus on right info box',
'Z-Focus on selection button',
'C-Tactic selection',
'S-Match start',
'P-Match proceeding',
'V-Match autoplay',
'C-Change tactic',
'Esc-Close this window'
]
