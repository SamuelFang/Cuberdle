var guesses = 0;
var identity;
var answer;
var year;
var country;
var cont;
var pr;
var rank;
var comps;
var show = false;

items=[
"2018WANG35",
"2014CZAP01",
"2018KHAN28",
"2017GARR05",
"2017AGGA01",
"2014RZEW01",
"2015ZUBO01",
"2017CHOI07",
"2021DILL03",
"2016JONE04",
"2016AGUI09",
"2017PABI01",
"2017MART94",
"2007VALK01",
"2021RAVI01",
"2015LARS04",
"2016DEXT01",
"2011SBAH01",
"2021NGUY04",
"2016ROLZ01",
"2016POLA01",
"2013BURL01",
"2013KRAS02",
"2014ZYCH01",
"2015HEJU02",
"2018KANE03",
"2018DREI02",
"2018FOST03",
"2018KOLO06",
"2018MUSI03",
"2017TRUC02",
"2015WANG09",
"2016LINB01",
"2015DUYU01",
"2012PARK03",
"2016KOLA02",
"2016JONE04",
"2017KIMM01",
"2019WANY36",
"2017GARR05",
"2017SIAU02",
"2017XURU04",
"2016INAB01",
"2009ZEMD01",
"2016DEXT01",
"2012PONC02",
"2016SANT08",
"2015BORR01",
"2010WEYE02",
"2012BEAH01",
"2016SATO01",
"2015SANC11",
"2019REDI02",
"2018DULL01",
"2016SHEL03",
"2015FUSH01",
"2015MOHA10",
"2014SEBA01",
"2015MILL01",
"2015MACK06",
"2016LINB01",
"2021ZHAN01",
"2015CHER07",
"2019EGGI02",
"2019KOBE03",
"2016CHAP04",
"2013BOBE01",
"2022HAYA03",
"2017SWOR01",
"2015HILL09",
"2017TUNG13",
"2018HABE02",
"2017GUTM01",
"2014CHEN37",
"2013LINK01",
"2016QUAN03",
"2013HUAN29",
"2014CAIJ02",
"2015TANG04",
"2015PARK08",
"2013WALL03",
"2014PARR02",
"2016KLAS01",
"2017MAXW01",
"2019ROGO04",
"2015GUNN01",
"2013EGDA02",
"2018STOK01",
"2014PAUL05",
"2015CERN01",
"2017WANY29",
"2011TRON02",
"2013SAVA01",
"2012LIUY03",
"2014BOYA01",
"2014SCHO02",
"2009BATT01",
"2016NORD02",
"2016ZHEN09",
"2016KAMA04",
"2016LOPE44",
"2008UENO01",
"2007WONG02",
"2008DONG06",
"2009YAUR01",
"2017RAFA02",
"2014USHA01",
"2015WIDD01",
"2012PETE03",
"2012MCNE01",
"2013JEZI01",
"2020BARA02",
"2019KARP03",
"2019MERR02",
"2019RATT02",
"2014SCHW02",
"2014RAPO01",
"2014KIPR01",
"2014WENW01",
"2016KALB01",
"2016KELL12",
"2010BENT01",
"2005AKKE01",
"2008AURO01",
"2009OKAY01",
"2013GERT01",
"2013COPP01",
"2013DIPI01",
"2013EGDA02",
"2012MAZI01",
"2012SART01",
"2011WELC01",
"2011SBAH01",
"2011LAYE01",
"2015FUSH01",
"2017BRYA06",
"2017CHOI07",
"2017KOLI01",
"2015ROSE01",
"2016HUNG08",
"2014GERB01",
"2012QUIB01",
"2015CHER07",
"2015DIZO02",
"2016SCHO08",
"2010KIPA01",
"2016CHAP04",
"2015MINK04",
"2013ANAN03",
"2016GUTI23",
"2017SWAI01",
"2015KOEN01",
"2017SIAU02",
"2013SUCH02",
"2017GARR05",
"2013EGDA01",
"2013SAVA01",
"2016RIDL01",
"2016HOLM04",
"2012CAMP03",
"2014BAND04",
"2008TAKA01",
"2015QUAN03",
"2016CETR01",
"2015YAKH01",
"2015CHEN52",
"2016SIGG01",
"2015CHEN49",
"2011BANS02",
"2007HESS01",
"2013BOBE01",
"2019KOBE03",
"2016PRZY01",
"2014BOYA01",
"2021TRIP01",
"2019HIRS01",
"2012BOGD01",
"2017DEBS01",
"2016CHAP04",
"2011KOWA01",
"2013WALL03",
"2015MACD03",
"2016BRIS02",
"2021OTAI01",
"2015CHER07",
"2020BARA02",
"2014PARR02",
"2017KOLI01",
"2018LEED01",
"2017FENG10",
"2015ALEK01",
"2017NORR01",
"2015KEAR01",
"2015BUAT01",
"2013LINK01",
"2007HABE01",
"2007STRE01",
"2006MOND01",
"2007HUGH01",
"2007HESS01",
"2008COOK01",
"2007LIME01",
"2006GUZE01",
"2005KOCZ01",
"2007GOTA01",
"2007ENDR01",
"2007BOUR01",
"2006BUUS01",
"2004GALL02",
"2006CEAU01",
"2007LOPE01",
"2003POCH01",
"2004NOOR01",
"2007ROKA01",
"2005BATI01",
"2008SOLD01",
"2006BONN01",
"2007YUAL01",
"2007BODO01",
"2007SUNT01",
"2005AKKE01",
"2007JIPT01",
"2007PERG01",
"2005KOZK01",
"2012PARK03",
"2015CHEA01",
"2017TUNG13",
"2009ZEMD01",
"2017XURU04",
"2012PONC02",
"2014TAMI01",
"2009KONV01",
"2017GALL07",
"2017GOLU01",
"2013MEND03",
"2019RAMO05",
"2012ELLI01",
"2017GARR05",
"2008SUNZ01",
"2017VILL41",
"2015MANS03",
"2013ESPA01",
"2017SIAU02",
"2019LENS01",
"2018WANG39",
"2015PARK13",
"2010CHEN20",
"2012MCNE01",
"2016RACH01",
"2013BURL01",
"2015GUNN01",
"2010WEYE01",
"2022ROBI05",
"2012PARK03",
"2010WEYE02",
"2009ZEMD01",
"2016KOLA02",
"2015WANG09",
"2013NAHM01",
"2012PONC02",
"2012BEAH01",
"2015FUSH01",
"2007VALK01",
"2018LICH05",
"2018BERE01",
"2015BORR01",
"2012CROS01",
"2010WANG68",
"2019HUNG16",
"2017RAND06",
"2013WANG67",
"2017XURU04",
"2017SIAU02",
"2015LEON02",
"2013GERH01",
"2016INAB01",
"2015DELA05",
"2010WUIF01",
"2016HONG03",
"2010HULL01",
"2017PARK05",
"2011SANC02",
"2016CHAP04",
"2017FENG10",
"2013LINK01",
"2013WALL03",
"2016SIGG01",
"2019KOBE03",
"2015CHER07",
"2017GUTM01",
"2019HIRS01",
"2019ECKE02",
"2017DEBS01",
"2015FIRM01",
"2021TRIP01",
"2013EGDA02",
"2013NELS01",
"2017HERM01",
"2012STRA02",
"2014SCHO02",
"2014FRIT02",
"2015ALEK01",
"2010WANG68",
"2016PRZY01",
"2019EGGI02",
"2016GORE02",
"2018CAIH01",
"2014CAIJ02",
"2012FROS01",
"2020KOPO01",
"2016WEIM01",
"2012PARK03",
"2016KOLA02",
"2013NAHM01",
"2015WANG09",
"2009ZEMD01",
"2012BEAH01",
"2012PONC02",
"2010WEYE02",
"2015LEON02",
"2018BERE01",
"2018LICH05",
"2016NUNE11",
"2017PARK05",
"2016INAB01",
"2012TYCK01",
"2015DELA05",
"2010WANG68",
"2010WUIF01",
"2017KORH01",
"2007VALK01",
"2009HAYS01",
"2015TELL01",
"2017NOKE01",
"2015FUSH01",
"2010KADD01",
"2017MAND13",
"2017SIAU02",
"2018ZIMM02",
"2013GERH01",
"2017FENG10",
"2016CHAP04",
"2013LINK01",
"2019HIRS01",
"2016SIGG01",
"2021TRIP01",
"2019ECKE02",
"2017DEBS01",
"2019KOBE03",
"2013WALL03",
"2015ALEK01",
"2013NELS01",
"2014SCHO02",
"2012STRA02",
"2015WRIG07",
"2015CHER07",
"2013EGDA02",
"2016PRZY01",
"2017GUTM01",
"2010WANG68",
"2016GOHT01",
"2017HERM01",
"2016XUWE02",
"2014FRIT02",
"2016MART29",
"2012JALO01",
"2011BANS02",
"2015PHOM01",
"2021MORA01",
"2012PARK03",
"2012BEAH01",
"2018BERE01",
"2016KOLA02",
"2017PARK05",
"2009HAYS01",
"2013NAHM01",
"2009ZEMD01",
"2016HUNG08",
"2015FUSH01",
"2015WANG46",
"2019YANG94",
"2015LEON02",
"2015WANG09",
"2015WEIB03",
"2012ZHAN08",
"2016NUNE11",
"2017SIAU02",
"2018LICH05",
"2016INAB01",
"2017NOKE01",
"2013GERH01",
"2010WEYE02",
"2015XION03",
"2018ELLA01",
"2007VALK01",
"2018GRAH05",
"2016GONZ52",
"2015ANDA01",
"2012PARK03",
"2013NAHM01",
"2018BERE01",
"2016HUNG08",
"2016KOLA02",
"2015WEIB03",
"2009ZEMD01",
"2012BEAH01",
"2019ZHOU51",
"2013KEJR01",
"2012ZHAN08",
"2009HAYS01",
"2017PARK05",
"2015XION03",
"2016NUNE11",
"2012HUAN12",
"2017TRAN25",
"2006HALC01",
"2015FUSH01",
"2015MAJE01",
"2014LOKW01",
"2019YANG94",
"2010KADD01",
"2016YONG02",
"2012STAN04",
"2014JAYE01",
"2018ELLA01",
"2016INAB01",
"2014BAND04",
"2017CHAM09",
"2017PERR02",
"2017LOUY01",
"2015CHER07",
"2020TAOR01",
"2017SANK04",
"2021DUNA01",
"2018THOM29",
"2019CHAU12",
"2021ELIA01",
"2019LINJ04",
"2018EVAR01",
"2015BARH01",
"2015TREL02",
"2021RICH02",
"2016GUND05",
"2017CHIS02",
"2021SHEN01",
"2019MARR04",
"2018GOME06",
"2017GARR05",
"2021WILL06",
"2019EKLU01",
"2018CREE01",
"2018NIEU01",
"2016SHAW02",
"2017WADE01",
"2009LIUE01",
"2013OLSZ02",
"2018LAPE01",
"2009WANG13",
"2009CHUN07",
"2009ASBR01",
"2009JIAN12",
"2010KRYU01",
"2010KIPA01",
"2010PRAB02",
"2007JAME01",
"2009CHOW05",
"2009DICK01",
"2007JAKU01",
"2007MING01",
"2010PANK01",
"2010VILL02",
"2008BODO01",
"2006HALC01",
"2009BUIH02",
"2010YANX02",
"2011LINB01",
"2012ZHAO05",
"2009WUBI01",
"2008BRAN01",
"2007PERG01",
"2007HIRA03",
"2009MOCH01",
"2010ROON01",
"2010PULC01",
"2010RAIH01",
"2008JISE02",
"2009SANT01",
"2008WAIC01",
"2018LOPE22",
"2013HUAN30",
"2016YONG02",
"2016SINY01",
"2015NAIN01",
"2017CHOI07",
"2016MORA24",
"2014NORD02",
"2017SEOH01",
"2016DAVI02",
"2019VUJC01",
"2017PABI01",
"2016WUZI04",
"2015FUSH01",
"2015LAII01",
"2008YUDA01",
"2017MEDR01",
"2012LEWI01",
"2018GRAI01",
"2014BAIR01",
"2014ZYCH01",
"2018KUCZ01",
"2015MILL01",
"2016ZHAN45",
"2014SEBA01",
"2012PONC02",
"2013GERH01",
"2015CHIA07",
"2018IMTI01",
"2009WANG13",
"2010PULC01",
"2006KUTI01",
"2010UGLO01",
"2012FIED01",
"2010WANG52",
"2007HORV01",
"2005BATI01",
"2012WANG53",
"2011DERS01",
"2011WANG19",
"2010GOLD01",
"2009LEFE01",
"2007KEZH01",
"2010JIMO01",
"2010PRAB02",
"2010XUEF01",
"2009YANG24",
"2011JAEM01",
"2008HUAY01",
"2010RUGA01",
"2010FUGU01",
"2009TANX01",
"2007BODO01",
"2012ZHAO05",
"2012POHA01",
"2009CHAO03",
"2012WUJU01",
"2009SHIN03",
"2010CANT02",
"2011ATRI01",
"2010KRYU01",
"2015BROW03",
"2015GORN01",
"2018HIBS01",
"2013WARY01",
"2017PALA08",
"2016KOLA02",
"2019MEAD03",
"2018LAPE01",
"2017JAGL01",
"2017GAYN01",
"2020DOZA01",
"2016HOBB01",
"2015RODR01",
"2016KELL12",
"2016ROLZ01",
"2010WUYU02",
"2013OLSZ02",
"2016DEXT01",
"2019CHAU12",
"2016PILA03",
"2016CHAP04",
"2014MAUR06",
"2019SHER10",
"2018CREE01",
"2018MURR03",
"2018ALFO01",
"2020TAOR01",
"2016OSTL02",
"2018BURG03",
"2017NIEL03",
"2018KHAN28",
"2015ANTO04",
"2016HUAN43",
"2014MINB01",
"2015KUCA01",
"2010GARC02",
"2013EGDA01",
"2018MACH04",
"2017REDO02",
"2013KOSK01",
"2016KELL12",
"2013LIZO01",
"2013BURL01",
"2014NORR01",
"2018KINN05",
"2018FOGO01",
"2017SZUL01",
"2013JOHN10",
"2013KRAS02",
"2017CHOD02",
"2017ZHUY07",
"2016MATE04",
"2016HUNG08",
"2013GERH01",
"2018GOME06",
"2015WAKE01",
"2017OUTH01",
"2017FOOY01",
"2016YONG02",
"2014LORE02",
"2013KRAS02",
"2018RICC02",
"2017SIAU02",
"2021DUNA01",
"2016EPST02",
"2019PHEL01",
"2018KHAN26",
"2017AGGA01",
"2019BAUM02",
"2016GOTT01",
"2014FANG01",
"2013EGDA02",
"2018CHAN05",
"2017WARR04",
"2016CHEN53",
"2018MATY02",
"2015CECC01",
"2014NIEL03",
"2016CAST48",
"2014KARN02",
"2015BART05",
"2017ZHEN10",
"2016REET01",
"2017WONP01",
"2014DETL01",
"2016CHAP04",
"2016HSUE01",
"2016OUTH01",
"2016PILA03",
"2013KATO01"
]

function start(){
    var item = items[Math.floor(Math.random()*items.length)];
    var link = "https://www.worldcubeassociation.org/api/v0/persons/" + item;
    fetch(link)
    .then(res => {
        return res.json();
    })
    .then(data => {
        var bestRank = -1;
        for(var event in data.personal_records){
            if(bestRank == -1 || data.personal_records[event].single.world_rank < bestRank){
                bestRank = data.personal_records[event].single.world_rank;
            }
            if(data.personal_records[event].average != null){
                if(bestRank == -1 || data.personal_records[event].average.world_rank < bestRank){
                    bestRank = data.personal_records[event].average.world_rank;
                }
            }
        }
        identity = data.person.wca_id;
        answer = data.person.name;
        year = data.person.wca_id.substring(0,4);
        cont = data.person.country.continentId;
        country = data.person.country.name;
        pr = data.personal_records[333].single.best/100;
        rank = bestRank;
        comps = data.competition_count;
    });
}

function empty(show){
    var tableRow = document.getElementById("table");
    var row = tableRow.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = `<td><input type="button" class="box3" value="E"></td>`;
    cell2.innerHTML = `<td><input type="button" class="box3" value="R"></td>`;
    cell3.innerHTML = `<td><input type="button" class="box3" value="R"></td>`;
    cell4.innerHTML = `<td><input type="button" class="box3" value="O"></td>`;
    cell5.innerHTML = `<td><input type="button" class="box3" value="R"></td>`;
    cell6.innerHTML = `<td><input type="button" class="box3" value=":("></td>`;
}

function addRow(id){
    if(show){
        showAnswer();
        show = false;
        return;
    }
    if(id == identity){
        correct();
        guesses = 6;
        return;
    }
    if(guesses == 5){
        //console.log(answer, year, country, pr, rank, comps);
        show = true;
    }
    if(guesses == 6){
        return;
    }
    if(guesses < 5){
        guesses++;
    }
    document.getElementsByName("ans")[0].placeholder = "Guess " + (guesses + 1) + "/6";
    var link = "https://www.worldcubeassociation.org/api/v0/persons/" + id;
    fetch(link)
    .then(res => {
        return res.json();
    })
    .then(data => {
        var tableRow = document.getElementById("table");
        var row = tableRow.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var bestRank = -1;
        for(var event in data.personal_records){
            if(bestRank == -1 || data.personal_records[event].single.world_rank < bestRank){
                bestRank = data.personal_records[event].single.world_rank;
            }
            if(data.personal_records[event].average != null){
                if(bestRank == -1 || data.personal_records[event].average.world_rank < bestRank){
                    bestRank = data.personal_records[event].average.world_rank;
                }
            }
        }
        var box1 = "box3";
        var box2 = "box3";
        var box3 = "box3";
        var box4 = "box3";
        var box5 = "box3";
        var box6 = "box3";
        if(Math.abs(year - parseInt(data.person.wca_id.substring(0,4))) < 3){
            box2 = "box2"
        }
        if(year == parseInt(data.person.wca_id.substring(0,4))){
            box2 = "box"
        }
        if(cont == data.person.country.continentId){
            box3 = "box2"
        }
        if(country == data.person.country.name){
            box3 = "box"
        }
        if(Math.abs(pr - data.personal_records[333].single.best/100) < 2){
            box4 = "box2"
        }
        if(Math.abs(pr - data.personal_records[333].single.best/100) < .5){
            box4 = "box"
        }
        if(Math.abs(rank - bestRank) < 10){
            box5 = "box2"
        }
        if(Math.abs(rank - bestRank) < 3){
            box5 = "box"
        }
        if(Math.abs(comps - data.competition_count) < 15){
            box6 = "box2"
        }
        if(Math.abs(comps - data.competition_count) < 5){
            box6 = "box"
        }
        cell1.innerHTML = `<td><input type="button" class="${box1}" value="${data.person.name}"></td>`;
        cell2.innerHTML = `<td><input type="button" class="${box2}" value="${data.person.wca_id.substring(0,4)}"></td>`;
        cell3.innerHTML = `<td><input type="button" class="${box3}" value="${data.person.country.name}"></td>`;
        cell4.innerHTML = `<td><input type="button" class="${box4}" value="${data.personal_records[333].single.best/100}"></td>`;
        cell5.innerHTML = `<td><input type="button" class="${box5}" value="${bestRank}"></td>`;
        cell6.innerHTML = `<td><input type="button" class="${box6}" value="${data.competition_count}"></td>`;
    })
    .catch(error => empty());
}

function showAnswer(){
    var link = "https://www.worldcubeassociation.org/api/v0/persons/" + identity;
    fetch(link)
    .then(res => {
        return res.json();
    })
    .then(data => {
        var tableRow = document.getElementById("table");
        var row = tableRow.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = `<td><input type="button" class="box" value="Answer: ${answer}"></td>`;
        cell2.innerHTML = `<td><input type="button" class="box" value="Answer: ${year}"></td>`;
        cell3.innerHTML = `<td><input type="button" class="box" value="Answer: ${country}"></td>`;
        cell4.innerHTML = `<td><input type="button" class="box" value="Answer: ${pr}"></td>`;
        cell5.innerHTML = `<td><input type="button" class="box" value="Answer: ${rank}"></td>`;
        cell6.innerHTML = `<td><input type="button" class="box" value="Answer: ${comps}"></td>`;
    })
}

function correct(){
    var link = "https://www.worldcubeassociation.org/api/v0/persons/" + identity;
    fetch(link)
    .then(res => {
        return res.json();
    })
    .then(data => {
        var tableRow = document.getElementById("table");
        var row = tableRow.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = `<td><input type="button" class="box" value="Correct! ${answer}"></td>`;
        cell2.innerHTML = `<td><input type="button" class="box" value="Correct! ${year}"></td>`;
        cell3.innerHTML = `<td><input type="button" class="box" value="Correct! ${country}"></td>`;
        cell4.innerHTML = `<td><input type="button" class="box" value="Correct! ${pr}"></td>`;
        cell5.innerHTML = `<td><input type="button" class="box" value="Correct! ${rank}"></td>`;
        cell6.innerHTML = `<td><input type="button" class="box" value="Correct! ${comps}"></td>`;
    })
}