function main() {
    load_localStorage()
    setup_selectors()
    load_classroom_data()
    setup_version_date()
    highlight_current_time_slot()
    setup_search_modal()
}



function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// variables and constants
    const Aule_links = {
        '1': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DD001',
        '10': 'bl_id%3DTO_CEN04%26fl_id%3DXPTE%26rm_id%3DH001',
        '10A': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DF004',
        '10C': 'bl_id%3DTO_CEN03%26fl_id%3DXP02%26rm_id%3DQ014',
        '10D': 'bl_id%3DTO_CEN03%26fl_id%3DXP03%26rm_id%3DQ001',
        '10I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D011',
        '11': 'bl_id%3DTO_CEN02%26fl_id%3DXPTE%26rm_id%3DQ009',
        '11B': 'bl_id%3DTO_CEN02%26fl_id%3DXP01%26rm_id%3DQ006',
        '11I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D012',
        '11S': 'bl_id%3DTO_CEN02%26fl_id%3DXS01%26rm_id%3DD014',
        '11T': 'bl_id%3DTO_CIT09%26fl_id%3DXPTE%26rm_id%3D137',
        '12': 'bl_id%3DTO_CEN04%26fl_id%3DXPTE%26rm_id%3DM009',
        '12A': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DF003',
        '12D': 'bl_id%3DTO_CEN03%26fl_id%3DXP03%26rm_id%3DQ009',
        '12I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D013',
        '13': 'bl_id%3DTO_CEN02%26fl_id%3DXPTE%26rm_id%3DQ008',
        '13A': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DC004',
        '13B': 'bl_id%3DTO_CEN02%26fl_id%3DXP01%26rm_id%3DQ005',
        '13S': 'bl_id%3DTO_CEN02%26fl_id%3DXS01%26rm_id%3DC016',
        '14': 'bl_id%3DTO_CEN04%26fl_id%3DXS01%26rm_id%3DM008',
        '15': 'bl_id%3DTO_CEN01%26fl_id%3DXPTE%26rm_id%3DE020',
        '15A': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DC008',
        '16': 'bl_id%3DTO_CEN04%26fl_id%3DXPTE%26rm_id%3DM011',
        '17': 'bl_id%3DTO_CEN01%26fl_id%3DXPTE%26rm_id%3DD002',
        '17A': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DC007',
        '19': 'bl_id%3DTO_CEN01%26fl_id%3DXPTE%26rm_id%3DD001',
        '19A': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DC003',
        '1B': 'bl_id%3DTO_CEN03%26fl_id%3DXP01%26rm_id%3DL005',
        '1D': 'bl_id%3DTO_CEN03%26fl_id%3DXP03%26rm_id%3DG009',
        '1I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D002',
        '1M': 'bl_id%3DTO_CIT02%26fl_id%3DXPTE%26rm_id%3D007',
        '1P': 'bl_id%3DTO_CIT22%26fl_id%3DXPTE%26rm_id%3D036',
        '1S': 'bl_id%3DTO_CEN02%26fl_id%3DXS01%26rm_id%3DD005',
        '1T': 'bl_id%3DTO_CIT09%26fl_id%3DXPTE%26rm_id%3D057',
        '2': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DE002',
        '21A': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DC001',
        '27': 'bl_id%3DTO_CEN05%26fl_id%3DXPTE%26rm_id%3DB056',
        '27B': 'bl_id%3DTO_CEN05%26fl_id%3DXP01%26rm_id%3DB029',
        '29': 'bl_id%3DTO_CEN05%26fl_id%3DXPTE%26rm_id%3DB055',
        '29B': 'bl_id%3DTO_CEN05%26fl_id%3DXP01%26rm_id%3DB031',
        '2C': 'bl_id%3DTO_CEN03%26fl_id%3DXP02%26rm_id%3DQ001',
        '2D': 'bl_id%3DTO_CEN03%26fl_id%3DXP03%26rm_id%3DQ005',
        '2I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D003',
        '2M': 'bl_id%3DTO_CIT02%26fl_id%3DXPTE%26rm_id%3D011',
        '2N': 'bl_id%3DTO_CIT03%26fl_id%3DXPTE%26rm_id%3D005',
        '2P': 'bl_id%3DTO_CIT22%26fl_id%3DXPTE%26rm_id%3D038',
        '2T': 'bl_id%3DTO_CIT09%26fl_id%3DXPTE%26rm_id%3D040',
        '3': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DD003',
        '3I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D004',
        '3M': 'bl_id%3DTO_CIT02%26fl_id%3DXPTE%26rm_id%3D027',
        '3N': 'bl_id%3DTO_CIT03%26fl_id%3DXPTE%26rm_id%3D006',
        '3P': 'bl_id%3DTO_CIT22%26fl_id%3DXPTE%26rm_id%3D015',
        '3S': 'bl_id%3DTO_CEN02%26fl_id%3DXS01%26rm_id%3DD007',
        '4': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DE004',
        '4C': 'bl_id%3DTO_CEN03%26fl_id%3DXP02%26rm_id%3DQ011',
        '4D': 'bl_id%3DTO_CEN03%26fl_id%3DXP03%26rm_id%3DQ010',
        '4I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D005',
        '4M': 'bl_id%3DTO_CIT02%26fl_id%3DXPTE%26rm_id%3D016',
        '4N': 'bl_id%3DTO_CIT03%26fl_id%3DXPTE%26rm_id%3D007',
        '4P': 'bl_id%3DTO_CIT22%26fl_id%3DXPTE%26rm_id%3D005',
        '4T': 'bl_id%3DTO_CIT09%26fl_id%3DXPTE%26rm_id%3D113',
        '5': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DD005',
        '5B': 'bl_id%3DTO_CEN02%26fl_id%3DXP01%26rm_id%3DQ010',
        '5I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D006',
        '5M': 'bl_id%3DTO_CIT02%26fl_id%3DXPTE%26rm_id%3D030',
        '5N': 'bl_id%3DTO_CIT03%26fl_id%3DXPTE%26rm_id%3D013',
        '5S': 'bl_id%3DTO_CEN02%26fl_id%3DXS01%26rm_id%3DD009',
        '6': 'bl_id%3DTO_CEN03%26fl_id%3DXPTE%26rm_id%3DE006',
        '6C': 'bl_id%3DTO_CEN03%26fl_id%3DXP02%26rm_id%3DQ002',
        '6D': 'bl_id%3DTO_CEN03%26fl_id%3DXP03%26rm_id%3DQ004',
        '6I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D007',
        '6N': 'bl_id%3DTO_CIT03%26fl_id%3DXPTE%26rm_id%3D017',
        '7': 'bl_id%3DTO_CEN02%26fl_id%3DXPTE%26rm_id%3DR001',
        '7B': 'bl_id%3DTO_CEN02%26fl_id%3DXP01%26rm_id%3DQ009',
        '7D': 'bl_id%3DTO_CEN03%26fl_id%3DXP03%26rm_id%3DG008',
        '7I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D008',
        '7N': 'bl_id%3DTO_CIT03%26fl_id%3DXPTE%26rm_id%3D015',
        '7S': 'bl_id%3DTO_CEN02%26fl_id%3DXS01%26rm_id%3DD011',
        '7T': 'bl_id%3DTO_CIT09%26fl_id%3DXPTE%26rm_id%3D090',
        '8': 'bl_id%3DTO_CEN04%26fl_id%3DXPTE%26rm_id%3DE001',
        '8C': 'bl_id%3DTO_CEN03%26fl_id%3DXP02%26rm_id%3DQ007',
        '8D': 'bl_id%3DTO_CEN03%26fl_id%3DXP03%26rm_id%3DQ003',
        '8I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D009',
        '8N': 'bl_id%3DTO_CIT03%26fl_id%3DXP01%26rm_id%3D013',
        '9B': 'bl_id%3DTO_CEN02%26fl_id%3DXP01%26rm_id%3DQ008',
        '9I': 'bl_id%3DTO_CIT08%26fl_id%3DXS01%26rm_id%3D010',
        '9S': 'bl_id%3DTO_CEN02%26fl_id%3DXS01%26rm_id%3DD013',
        '9T': 'bl_id%3DTO_CIT09%26fl_id%3DXPTE%26rm_id%3D092',
        'R1': 'bl_id%3DTO_CIT06%26fl_id%3DXPTE%26rm_id%3D001',
        'R1B': 'bl_id%3DTO_CIT06%26fl_id%3DXP01%26rm_id%3D006',
        'R2': 'bl_id%3DTO_CIT06%26fl_id%3DXPTE%26rm_id%3D002',
        'R2B': 'bl_id%3DTO_CIT06%26fl_id%3DXP01%26rm_id%3D007',
        'R3': 'bl_id%3DTO_CIT06%26fl_id%3DXPTE%26rm_id%3D003',
        'R3B': 'bl_id%3DTO_CIT06%26fl_id%3DXP01%26rm_id%3D005',
        'R4': 'bl_id%3DTO_CIT06%26fl_id%3DXPTE%26rm_id%3D004',
        'R4B': 'bl_id%3DTO_CIT06%26fl_id%3DXP01%26rm_id%3D008'
    }
    const Tag_aule = {
        "_sede": ['Sede Centrale - Corso Duca degli Abruzzi', 'Sede Centrale - Cittadella Politecnica'],
        "_piano": [
            'Piano Terra',
            'Piano Interrato',
            'Primo Piano',
            'Secondo piano',
            'Terzo piano',
        ],
        "_capienza": [362, 352, 332, 326, 302, 300, 285, 278, 252, 221, 220, 213, 196, 195, 193, 178, 156, 150, 149, 148, 144, 142, 140, 139, 138, 135, 130, 128, 127, 123, 121, 120, 119, 118, 117, 112, 107, 101, 100, 98, 97, 96, 93, 90, 89, 88, 87, 80, 78, 76, 72, 68, 64, 60, 51, 48, 47, 32, 25],
        "_superficie": [319, 318, 316, 294, 285, 265, 259, 256, 254, 240, 223, 218, 217, 216, 214, 202, 196, 191, 185, 183, 176, 175, 173, 171, 167, 163, 162, 146, 145, 144, 143, 142, 141, 139, 138, 137, 135, 134, 133, 132, 131, 130, 128, 125, 122, 120, 119, 111, 110, 109, 107, 102, 101, 98, 95, 88, 84, 83, 82, 80, 78, 71, 69, 68, 67, 65, 64, 61, 60, 52],
        "_fabbricato": ['Area Centrale', 'Area Nord', 'Area Sud - Parte 1', 'Area Sud - Parte 2', 'Aule M', 'Aule P, nuovi fabbricati', 'Aule R', 'Corte Interrata', 'Ex Stampati', 'Ex Tornerie', 'Ex centrale termica'],
        "_fasce_libere": [8, 7, 6, 5, 4, 3, 2, 1, 0]
    }
    const suffix_info = {
        "_sede": ["", ""],
        "_piano": ["🔢 ", ""],
        "_capienza": ["🪑 ", " posti"],
        "_superficie": ["📐 ", " m<sup>2</sup>"],
        "_fabbricato": ["📍 ", ""],
        "_fasce_libere": ["🕔 ", " fasce"],
    }
    const Prefix_aule = {
        "_sede": "",
        "_piano": " 🔢",
        "_capienza": " 🪑 posti",
        "_superficie": " metri<sup>2</sup>",
        "_fabbricato": "📍",
        "_fasce_libere": " 🕔",
    }
    //
    const Url_poli = 'https://www.swas.polito.it/dotnet/orari_lezione_pub/mobile/ricerca_aule_libere.aspx'
    const Container = q("#main_container")
    const DATE_SELECTOR =  q("#date_selector")
    // const DATE_INPUT =  q(".date_input")
    
    const Now = new Date()
    const Start_day = getStartday();
    var Startday_key = Start_day.to_ddmmyyyy("/");
    var Selected_campus = "SEDE_CENTRALE";
    var Selected_day = Startday_key;
    var Favorites = [];
    var Filter_already = false;
    var Aula_modal = ""
    // lo scrollToView del filter triggera il listener scroll del pulsante pulsante per la ricerca delle aule (no buono)
    // il flag "Filter_already" diventa true appena si attiva un filter
    // di conseguenza il listener del pulsante ignora il codice e resetta il flag

    var Html_data = "";
    var Aule_x_fasce = [];
    var Aule_totali = [];
    var Disp_aule = {};
    var N_fasceorarie = 0;
    var Nameid = "gv_AuleLibere_lbl_AuleLibere_" // da 0 a 7
    var Disp_aule; 


function parse_html_poli(html_data){
    Html_data = html_data
    Container.style["display"] = "flex"
    // parsifico l'html -> htmlDoc è un oggetto #document !!
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(html_data, 'text/html');

    // recupero tutti i blocchi con la lista delle aule 
    // nel doc sono chiamati con un id progressivo 
    //      "#gv_AuleLibere_lbl_AuleLibere_0"
    //      "#gv_AuleLibere_lbl_AuleLibere_1" ...
    const DOM_aule = htmlDoc.Q("[id^=gv_AuleLibere_lbl_AuleLibere]")

    // dal "DOM_aule" estraggo la lista delle aule per ogni fascia oraria
    // Aule_x_fasce è:
    //      [
    //          ["aulaA","aulaB","aulaC" ...],  <- fascia 0
    //          ["aulaA","aulaB" ...],          <- fascia 1
    //          ...
    //      ]
    // creo un set con tutte le aule trovate nelle fasce orarie -> lista di tutte le aule presenti senza ripetizione ("aule_totali")

    Aule_x_fasce = []
    Aule_totali = []
    disp = {}

    // conversione da elenco raw a elenco in una lista
    let fasce_orarie = []

    DOM_aule.forEach(element =>{
        let lista_aule_raw = element.innerHTML.replaceAll(" ", "").toUpperCase()
        fasce_orarie.push(lista_aule_raw.split(","))
    })
    // conversione da lista vero falso
    Aule_ordinate[Selected_campus].forEach(nome_aula => {
        disp[nome_aula] = []
        fasce_orarie.forEach(aule_fascia => {
            let aula_disponibile = aule_fascia.includes(nome_aula)
            disp[nome_aula].push(aula_disponibile)
        });
    });
    // DOM_aule.forEach(element => {
    //     let lista_aule_raw = element.innerHTML
    //     lista_aule_raw = lista_aule_raw.replaceAll(" ", "").toUpperCase()
    //     let aule_list = lista_aule_raw.split(",")
    //     Aule_x_fasce.push(aule_list)

    //     Aule_totali = new Set([...Aule_totali, ...aule_list])
    // })

    

    // Aule_totali = [...Aule_totali] // non puo essere un set
    updateDoc_date(disp)
}


function updateDoc_date(disp_aule) {
    // disp_aule è un dizionario così:
    //      {
    //          "1" : [true, true, true, true, true, true, true, true]
    //          "1B": [false... ]
    //          ...
    //      } 
    Disp_aule = disp_aule;

    // reset filter
    filtra_aule("reset")
    N_fasceorarie = disp_aule.length
    // elimino le colonne delle fasce orarie che non ci sono
    // /!\  obsoleto, le colonne ci sono sempre tutte ormai /!\ 
    // serve solo nel caso i dati sono presi in tempo reale dal poli
    remove_columns(N_fasceorarie)

    // per ogni aula, seguendo l'ordine di Aule_ordinate[Selected_campus] 
    Aule_ordinate[Selected_campus].forEach(nome_aula => {
        // fasce_aule è la lista di bool riferita all'aula
        const fasce_aula = disp_aule[nome_aula]


        const ROW_AULA = q('[_id="' + nome_aula + '"]')
        const LISTA_AULE = ROW_AULA.q(".lista_aule")
        
        
        
        // ES 1011 -> 3 slot all'ora uno, 2 allora due 2 allora tre 1 allora quattro
        // -> 3221
        var count_fasce = 0
        var currentfasce_libere = ""

        for (let i = 0; i < fasce_aula.length; i++) {
            const e = fasce_aula[fasce_aula.length-1 - i];
            if(e){
                count_fasce++
            }
            currentfasce_libere = count_fasce.toString() + currentfasce_libere
        }
        
        // fasce_aula.forEach(e=> {
        //     console.log(fasce_aula,e);
        //     currentfasce_libere += eval(fasce_aula.join("+").toString())})
        // // var currentfasce_libere = eval(fasce_aula.join("+"));
        ROW_AULA.setAttribute("_currentfasce_libere", currentfasce_libere)
        ROW_AULA.setAttribute("_fasce_libere", count_fasce)
        

        for (let index_slot = 0; index_slot < fasce_aula.length; index_slot++) {
            const fascia_aula = fasce_aula[index_slot];
            
            
            // inserisci un nuovo div "AULA" nel "div.lista_aule" interno alla riga
            // aggiungi la classe enabled o disabled se "fascia_aula" è true
            
            // MEGLIO SE I DIV CI SONO GIA
            const DIV = LISTA_AULE.Q("div")[index_slot]
            if (fascia_aula) {
                DIV.addClass("enabled")
                DIV.removeClass("disabled")
            }
            else {
                DIV.addClass("disabled")
                DIV.removeClass("enabled")
            }
        }
        
        
    });
    highlight_current_time_slot()
    // Loading.end()

    if (Aula_modal){
        const ROW = q('[_id="'+Aula_modal+'"]')
        q("#modal_lista_aule").innerHTML = ""
        ROW.q(".lista_aule").CloneSubnodes(q("#modal_lista_aule"))
    }
}

function updateDoc_campus(campus, disp){
    // update del documento con tutte le aule nuove della sede selezionata
    // reset aule
    Q(".row_aule").forEach(e=>e.remove())
    Classrooms_info[campus].keys().forEach(nome_aula => {
        let info_alert_aula = ""
        let favorite = Favorites.includes(nome_aula) ? "favorite" : ""
        if (!Classrooms_info[campus][nome_aula]["_prese_elettriche"]){
            info_alert_aula = `
            <p class="info_alert_aula">
                <img src="style/plug.svg">
            </p>`
        }
        const row_string = (`
            <div class="row_aule ${favorite}" _id="${nome_aula}">
                <p id="info_favorite">⭐</p>
                ${info_alert_aula}
                <p class="nome_aula">Aula ${nome_aula}</p>
                <p class="info_aula"></p>
                <div class="lista_aule">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        `)

        const parser = new DOMParser();
        const ROW = parser.parseFromString(row_string, 'text/html').q("div");
        Classrooms_info[campus][nome_aula].keys().forEach(att_name => {
            let att_value = Classrooms_info[campus][nome_aula][att_name]
            ROW.setAttribute(att_name, att_value)
        });
        q("#container_row_aule").appendChild(ROW)
        ROW.addEventListener("click", function () {
            open_modal(nome_aula)
        })
    });
    updateDoc_date(disp)
    setup_search_modal()
}

function remove_columns(n_fasceorarie) {
    var MODAL_FASCE = Q("#modal_div_orari span.modal_fascia")
    var ORARI_AULE = Q(".row_orari div")

    for (let i = 0; i < 8 - n_fasceorarie; i++) {
        ORARI_AULE[i+1].remove()
        MODAL_FASCE[i].remove()
        
    }
}



function filtra_aule(key_tags) {
    if(key_tags=="reset"){
        let last = q("#filter_box div.active")
        if(last){
            last.removeClass("active")
        }
        q("body").removeClass("filter_active")
        const ROWS_AULE = Q(".row_aule")
        ROWS_AULE.forEach(ROW_AULA => {
            let order = ROW_AULA.classList.contains("favorite")? -1 : 1; // -1 e non -200 così durante la funzione order favorites vengono ricalcolati
            ROW_AULA.style["order"] = order  // order è meglio se parte da uno
        });
        return 
    }
    if(key_tags=="_fasce_libere"){
        if(get_current_slot() != -1){
            // l'attributo _fasce_libere contiene il numero di fasce libere 
            // l'attributo _currentfasce_libere contiene invece una serie di numeri-> le disponibilita dellaula ad ogni fascia -> da utlizzare solo nel giorno corrente
            // se un aula ha 11111100 e siamo alle ultime 2 ore, questa dovrà essere ordinata al fondo perchè gli slot liberi dalla penultima ora sono zero, invece quelli totali sono sei

            time_slot = get_current_slot()

            const ROWS_AULE = Q(".row_aule")
            ROWS_AULE.forEach(ROW_AULA => {
                i = Number(ROW_AULA.getAttribute("_currentfasce_libere")[time_slot])
                ROW_AULA.style["order"] = -i  // order è meglio se parte da uno
                ROW_AULA.q(".info_aula").innerHTML = i + " fasce libere"
            });
        }
        else{
            const ROWS_AULE = Q(".row_aule")
            ROWS_AULE.forEach(ROW_AULA => {
                i = Number(ROW_AULA.getAttribute("_fasce_libere"))
                ROW_AULA.style["order"] = 8 - i  // order è meglio se parte da uno
                ROW_AULA.q(".info_aula").innerHTML = i + " fasce libere"
            });
        }
    }
    else{
        const ROWS_AULE = Q(".row_aule")
        ROWS_AULE.forEach(ROW => {
            let att = ROW.getAttribute(key_tags)
            if (Number(att)){
                att = Number(att)
            }
            let index = Classrooms_order[key_tags].indexOf(att)
            ROW.style["order"] = index
            ROW.q(".info_aula").innerHTML = suffix_info[key_tags][0] + att + suffix_info[key_tags][1]
        });
        
        // Non è performante questo -> ci mette 10 volte di piu
        // for (let i = 0; i < Classrooms_order[key_tags].length; i++) {
        //     let tag = Classrooms_order[key_tags][i]
        //     const ROWS_AULE = Q('[' + key_tags + '="' + tag + '"]')
        //     ROWS_AULE.forEach(ROW_AULA => {
        //         ROW_AULA.style["order"] = i + 1  // order è meglio se parte da uno
        //         ROW_AULA.q(".info_aula").innerHTML = suffix_info[key_tags][0] + tag + suffix_info[key_tags][1]
        //     });
        // }
    }
    Order_favorites()
}

function load_localStorage(){
    if (Object.keys(localStorage).includes("last_campus")){
        Selected_campus = localStorage["last_campus"];
        q("#campus_input").value = Selected_campus
    }
    else{
        Selected_campus = "SEDE_CENTRALE";
        localStorage["last_campus"] = Selected_campus;
    }

    if (Object.keys(localStorage).includes("favorites")){
        Favorites = JSON.parse(localStorage["favorites"])
    }
    else{
        localStorage["favorites"] = "[]"
    }
}   


// modal!!
const MODAL = q("#modal_box")
const MODAL_CONTENT = MODAL.q("#modal_info_aula")

function open_modal(id_row){
    Aula_modal = id_row
    const ROW = q('[_id="'+id_row+'"]')
    ROW.addClass("modal_open")
    MODAL.removeClass("hidden")
    
    // per ogni attributo cerco il tag p allinterno di #modal_info_aula che ha il valore uguale al nome dellattributo 
    // es: row.getAttribute("_piano")
    // <div value="_piano">
    //     <p>🔢 Piano:</p>
    //     <p>Piano terra</p>
    // </div>
    Object.values(ROW.attributes).forEach(attribute => {
        console.log()
        let css_selector= '[value="'+attribute.name+'"]'
        const THAT_P = MODAL_CONTENT.q(css_selector)
        // console.log(THAT_P, attribute.name)
        if(THAT_P){
            THAT_P.innerHTML = attribute.value

        }
    });

    if (Classrooms_info[Selected_campus][id_row]["_prese_elettriche"]){
        MODAL_CONTENT.q("#modal_alert").style["display"] = "none"
    }
    else{
        MODAL_CONTENT.q("#modal_alert").style["display"] = "flex"
    }
    // copia la roba nel modal
    q("#modal_lista_aule").innerHTML = ""
    ROW.q(".lista_aule").CloneSubnodes(q("#modal_lista_aule"))
    // q("#modal_lista_aule").innerHTML =  row.q(".lista_aule").innerHTML
    // q("#modal_date").innerHTML =  q("#date_box").innerHTML
    // q("#date_box").innerHTML = ""

    
    let  nome_aula = ROW.getAttribute("_id")
    MODAL.q("#modal_title").innerHTML = "Aula "+nome_aula
    const MODAL_FASCE = MODAL.Q(".modal_fascia")

    
    for (let i = 0; i < MODAL_FASCE.length; i++) {
        const FASCIA = MODAL_FASCE[i];
        if(Disp_aule[nome_aula][i]){
            FASCIA.addClass("active")
        }
        else{
            FASCIA.removeClass("active")
        }
    }

    
    const TITLE_FASCE_SPAN = MODAL.q("#modal_fasce .title span")
    var txt = ` ( ${ROW.getAttribute("_fasce_libere")} / ${MODAL_FASCE.length} )`
    if(get_current_slot() != -1){
        let slot = get_current_slot()
        let fasce_rimaste = ROW.getAttribute("_currentfasce_libere")[slot]
        let slot_totali_rimasti = 8 - slot 
        txt = ` ( ${fasce_rimaste} / ${slot_totali_rimasti} )`
    }
    TITLE_FASCE_SPAN.innerHTML = txt


    // link al portare con le info sull'aula
    // se l'aula non è presente nei links di "Aule_links" genera una ricarca su google con il 
    let link_aula = "https://www.polito.it/ateneo/chi-siamo/sedi-e-mappe?sellocale="
    let codice_aula = Aule_links[nome_aula]
    link_aula += codice_aula
    if (codice_aula == undefined) {
        link_aula = "https://www.google.com/search?q=politecnico+torino+aula+" + nome_aula
    }

    MODAL.q("#modal_link").setAttribute("href", link_aula)
    
    if(ROW.classList.contains("favorite")){
        q("#modal_favorite").addClass("favorite")
    }
    else{
        q("#modal_favorite").removeClass("favorite")
    }
}

function exit_modal(){
    MODAL.addClass("hidden")
    q(".modal_open").removeClass("modal_open")
    Aula_modal = ""
    // q("#date_box").innerHTML =  q("#modal_date").innerHTML
    // q("#modal_date").innerHTML = ""

}
// listener
// filter -------------
const FILTERS_BOX = q("#filter_box")
const FILTERS = Q("#filter_box .filter")
FILTERS.forEach(filter => {
    filter.addEventListener("click", function (event) {
        Filter_already = true
        let last = q("#filter_box div.active")
        if (last) {
            last.removeClass("active")
        }
        if (last == filter) {
            q("body").removeClass("filter_active")
        }
        else {
            filter.addClass("active")
            q("body").addClass("filter_active")
            filtra_aule(filter.getAttribute("value"))
            // q("#scroll_target").scrollIntoView(false)
            q("#block_scroll").scrollIntoView(true)
        }
        if (last == filter) {
            
            filtra_aule("reset")
        }
        
    })
});

function hide_filter(){
    q("body").removeClass("filter_active")
}

Q(".row_aule").forEach(ROW => {
    ROW.addEventListener("click", function(){

        open_modal(ROW.getAttribute("_id"))

    })
})

q("#modal_favorite").addEventListener("click", function(){
    q("#modal_favorite").toggleClass("favorite")
    q('[_id="' + Aula_modal + '"]').toggleClass("favorite")

    if (Favorites.includes(Aula_modal)){
        let index = Favorites.indexOf(Aula_modal);
        Favorites.splice(index, 1);
    }
    else{
        Favorites.push(Aula_modal)
    }
    localStorage["favorites"] = JSON.stringify(Favorites)
    Order_favorites()
})
function Order_favorites(){
    // i valori di order dipendono se il Filtro è attivo o no e se è nei preferiti o no 
    // tabella dei 4 casi
    //    FAVORITE   FILTER  ->  ORDER
    // c1) ---NO---   --NO--  ->  +1
    // c2) ---NO---   Filter  ->   X (dipende dal filtro)(tra 0 e 100 circa)
    // c3) Favorite   --NO--  ->  -1
    // c4) Favorite   Filter  ->   X - 200  (tra -200 e -100 circa)
    console.log("aa",q(".row_aule.favorite"))
    Q(".row_aule").forEach(ROW => {
        let last_order = Number(ROW.style["order"])
        if(ROW.classList.contains("favorite") && -100 < last_order){
            // la row è nei preferiti ma il valore di order non è ancora stato aggiustato
            ROW.style["order"] = last_order - 200
        }
        else if (!ROW.classList.contains("favorite") && last_order < -100){
            // la row non è nei preferiti ma il valore di order lo è ancora (con i filtri (-200))
            ROW.style["order"] = last_order + 200
        }
        else if (!ROW.classList.contains("favorite") && last_order == -1){
            // la row non è nei preferiti ma il valore di order lo è ancora (senza i filtri (-1))
            ROW.style["order"] = 1
        }

    })
}
function getStartday(){
    let today = Now.offsetHours(3.5)
    // sposto il giorno di tre ore e mezza per farlo conludere alle 20.30
    let today_day = today.getDay()
    let start_day;
    if (today_day == 0 || today_day == 6) // se è sabato o domenica
    {
        let increment = today_day/6 + 1 // 6/6 + 1 => 2; 0/6 + 1 => 1
        start_day = today.offsetDays(increment)
    }
    else{
        start_day = today
    }
    return start_day
}

// setup selectors date 
// date -------

function setup_selectorsOBSOLETO(){

    Classrooms_data[Selected_campus].keys().includes(Startday_key)
    let dates = Classrooms_data[Selected_campus].keys()
    var max_days = 20

    
    // for che cicla 7 volte oppure fino a quando trova delle date
    for (let index = dates.indexOf(Startday_key); index < max_days && dates[index]; index++) {
        const OPTION = document.createElement("OPTION")
        OPTION.innerHTML = dates[index];
        OPTION.setAttribute("value",dates[index])
        // SELECT["value"] = dates[index]
    
        DATE_SELECTOR.appendChild(OPTION)
    }

}

function setup_selectors(){
    // setup della data inizio e di fine
    // "today" è oggi +3.5 ore -> oltre le 20.30 passa al giorno successivo
    // se "today" è sabato o domenica lo "start_day" incrementa di 1 o 2
    // end_day si ricava dalla lunghezza di Classrooms_data[Selected_campus].keys() MENO l'indice di Today

    // agisce su entrambi i box input
    let start_day = Start_day.to_yyyymmdd("-")
    
    let end_day = Classrooms_data[Selected_campus].keys().last().from_dmy_to_mdy().to_yyyymmdd("-")
    Q(".date_input").forEach(e => e.setAttribute("value", start_day))
    Q(".date_input").forEach(e => e.setAttribute("min", start_day))
    Q(".date_input").forEach(e => e.setAttribute("max", end_day))

    Q(".date_value").forEach(e => e.innerHTML = new Date(start_day).to_day_ddmmyy("/"))

}

// 

function change_date(this_element){
    // aggiorna la data fa update delle aule
    // le modifiche sono contemoranea ad entrabi gli input
    let date = this_element.valueAsNumber
    let day = new Date(date).getDay()
    if (day == 0 || day == 6  ) // se è sabato o domenica
    {
    
        this_element.value = (Now).to_yyyymmdd("-")
        alert("Non c'è Poli alla domenica (e nemmeno al sabato)")
        return
    }
    else{
        Q(".date_input").forEach(e => {e.value = this_element.value})
        Q(".date_value").forEach(e => {e.innerHTML = date.to_day_ddmmyy("/")})
        
        Selected_day = date.to_ddmmyyyy("/")
        let disp = parse_classrooms_data(Selected_day, Selected_campus)
        
        updateDoc_date(disp)
    }
}

function change_campus(this_element) {
    Selected_campus = this_element.value
    localStorage["last_campus"] = Selected_campus;
    // Selected_campus.this_element.value
    let disp = parse_classrooms_data(Selected_day, Selected_campus)

    updateDoc_campus(Selected_campus, disp)

}

function load_classroom_data() {
    let disp = parse_classrooms_data(Startday_key, Selected_campus)
    if (disp){
        updateDoc_campus(Selected_campus, disp)
    }
    else{
        // httpGetAsync(Url_poli, parse_html_poli) 
        parse_html_poli(result)

    }
}

function setup_version_date() {
    let today = Now.getTime()
    let delta = new Date(Update_date).getOffsetDays(Now)    

    if(delta>2){
        delta = delta + " giorni fa"
    }else if(delta == 2){
        delta = "l'altro ieri"
    }else if(delta == 1){
        delta = "ieri"
    }else {
        delta = "oggi"
    }

    let txt = `dati aggiornati il ${new Date(Update_date).to_ddmmyyyy(".")} (${delta})`
    q("#doc_title p").innerHTML = txt 
}

function get_current_slot(){
    let time = Now.to_timehours() // orario in ore
    // time = 16
    if( time < 8.5 || 20.5 < time || !(new Date(Startday_key.from_dmy_to_mdy()).isSameDay(Now)))
    {
        q("body").removeClass("current_day")
        return -1
    }
    
    q("body").addClass("current_day")
    time -= 8.5 // set il range tra 0 e 8.5
    time_slot = Math.trunc(time / 1.5)
    return time_slot
}
function highlight_current_time_slot(){
    time_slot = get_current_slot()
    if(time_slot==-1){return}

    Q(".lista_aule").forEach(lista_aula => {

        lista_aula.Q("div")[time_slot].addClass("current_slot")
    });

    Q(".row_orari").forEach(e=>e.Q("div")[time_slot].addClass("current_slot"))


}
// search modal
// setup 
function setup_search_modal() {
    const SEARCH_BOX = q("#search_main_box")
    SEARCH_BOX.q("datalist").remove()
    const DATALIST = document.createElement("DATALIST")
    DATALIST.setAttribute("id", "search_class_list")
    SEARCH_BOX.appendChild(DATALIST)
    Aule_ordinate[Selected_campus].forEach(nome_aula => {
        const OP = document.createElement("option")
        // ogni opzione ha un carattere nascosto al fondo, per evitare che aule come 7 e 7i si confondano
        OP.setAttribute("value",nome_aula + '\u2063')
        DATALIST.appendChild(OP)
    });
}

// bottone cerca appare quando si scrolla, scompare dopo tot secondi
// se si continua a scrollare il timeout per farlo scommparire si resetta
var timeout_button_search;
q("#main_container").addEventListener("scroll", function(){
    if (!Filter_already) {
        
        q("#button_search_class").addClass("button_search_appear")
        
        clearTimeout(timeout_button_search)
        timeout_button_search = setTimeout(() => {
            q("#button_search_class").removeClass("button_search_appear")
        }, 2000);
    }
    Filter_already = false
})
q("#button_search_class").addEventListener("click", function(){
    // open_modal_search()
    q("#search_main").focus()
    q("#button_search_class").removeClass("button_search_appear")
})

q("#search_main").addEventListener("input", function(){
    let val = q("#search_main").value.toUpperCase()
    q("#search_main").value = val;

    // se contiene il carattere nascosto al fondo allora è stato premuto sulla datalist
    if (val.slice(-1) === '\u2063') {
        val = val.slice(0, -1); //rimuovi il carattere e lancia il modal
        q("#search_main").value = ""
        open_modal(val)
    }

});
q("#search_main").addEventListener("keydown", function(event){
    // listener addizionale per quando si digita invio
    if(event.key == "Enter"){
        let val = q("#search_main").value
        if(Aule_ordinate[Selected_campus].includes(val)){
            open_modal(val)
            close_modal_search()
            q("#search_main").value = ""
        }
    }
});
q("#search_main").addEventListener("focusout", (event) => {
    q("#search_main").value = ""
});

function open_modal_search(){
    q("#modalsearch_box").removeClass("hidden")
}
function close_modal_search(){
    q("#modalsearch_box").addClass("hidden")
}

main()