
const Aule_ordinate = {
    "SEDE_CENTRALE":
        ['1', '3', '5', '7', '11', '13', '15', '17', '19', '27', '29', '2', '4', '6', '8', '10', '12', '14', '16', '10A', '12A', '13A', '15A', '17A', '19A', '21A', '5B', '7B', '9B', '11B', '13B', '1B', '27B', '29B', '2C', '4C', '6C', '8C', '10C', '1D', '2D', '4D', '6D', '7D', '8D', '10D', '12D', '1I', '2I', '3I', '4I', '5I', '6I', '7I', '8I', '9I', '10I', '11I', '12I', '1M', '2M', '3M', '4M', '5M', '2N', '3N', '4N', '5N', '6N', '7N', '8N', '1P', '2P', '3P', '4P', 'R1', 'R1B', 'R2', 'R2B', 'R3', 'R3B', 'R4', 'R4B', '1S', '3S', '5S', '7S', '9S', '11S', '1T', '2T', '4T', '7T', '9T', '13S', '11T'],
    "MIRAFIORI":
        ["01AM", "02AM", "03AM", "04AM", "05AM", "06AM", "07AM", "11AM", "12AM", "13AM", "14AM",],
    "LINGOTTO":
        [ "201","202","203","204","205","206","207","208","209","210","211","212","213","300","301","302","303","304","305","306","307","308","309",],
    "VALENTINO":
        ["1V","2V","3V","4V","5V","6V","7V","8V","2VM","3VM","4VM","5VM","6VM","7VM",]}


function parse_classrooms_data(date, campus) {
    console.log(date, campus)
    // restituisce un dict {"1":[true,false,false...], "2":[true,false,...], ...}


    // classrooms_data contiene stringhe compresse: composte da 96 coppie di cifre esadecimali
    // ogni coppia va da 00 a ff, e si riferisce alle disponibilita per ogni aula
    // il numero (in hex) se riconvertito in binario ha otto cifre, una per ogni fascia
    //   =>  1 se l'aula è libera 0 se è occupata
    // es: "ff8faf...
    //    => ff               8f              af  ...
    //       11111111         10001111       '10101111' ...
    //       sempre libera,   la 1 e le ultime 4, ecc...


    // splitta la stringa ogni due cifre
    // converti da hex a binario
    // converti la stringa binaria in una lista di true e false 
    // es:
    // compressed "d7ff0f0f030f8323000101000008..."
    // hex_list   ['d7','ff','0f','0f','03','0f',...]
    // bin        "1001101"
    // disp       [true,false,false,true,true,false,true,]
    // disponibilita {"1":[true,false,false...], "2":[true,false,...], ...}
    Startday_key = date
    var disponibilita =  {};

    let compressed = Classrooms_data[campus][date]
    console.log(compressed)
    if(!compressed){ // se la data non c'è
        return false
    }
    let hex_list = compressed.match(/.{2}/g)
    for (let i = 0; i < hex_list.length; i++) {
        const hex = hex_list[i];

        // hex => dec => binary
        let bin = parseInt(hex,16).toString(2).padStart(8, "0") 

        let disp = []
        for (let j = 0; j < bin.length; j++) {
            const char = bin[j];
            let aula_disp = char == "1" ;
            disp.push(aula_disp) ;
        }

        disponibilita[Aule_ordinate[campus][i]] = disp
    }
    return disponibilita
}

