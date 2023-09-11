// piccola libreria per accorciare il codice e aggiungere cose che vanilla non ha (perché??)

// document
function q(query){
    return document.querySelector(query)
}
function Q(query){
    return document.querySelectorAll(query)
}

Object.prototype.q = function(query){
    return this.querySelector(query)
}
Object.prototype.Q = function(query){
    return this.querySelectorAll(query)
}

Object.prototype.toggleClass = function (class_name) {
    // if(!this){return}
    if (this.classList.contains(class_name)) {
        this.classList.remove(class_name)
    }
    else {
        this.classList.add(class_name)
    }
}
Object.prototype.removeClass = function (class_name) {
    // if(!this){return}
    this.classList.remove(class_name)
    return this
}
Object.prototype.addClass = function (class_name) {
    // if(!this){return}
    this.classList.add(class_name)
    return this
}

Object.prototype.reloadAnimation = function (){
    let animation = getComputedStyle(this)["animation"]
    this.style["animation"] = ""
    setTimeout(() => {
        this.style["animation"] = animation
    }, 10);
}

Object.prototype.startAnimation = function (class_name){
    this.style.animation = ""
    this.classList.add(class_name)
}
Object.prototype.stopAnimation = function (class_name){
    this.style.animation = "unset"
    setTimeout(() => {
        
        this.classList.remove(class_name)
    }, 1000);
    // this.classList.add(class_name)
}
Object.prototype.setAnimation = function (animation){
    this.style["animation"] = animation;
}

Object.prototype.CloneSubnodes = function(final){
    this.childNodes.forEach(child => {
        final.appendChild(child.cloneNode(true))
    });
}



// roba varia

Number.prototype.zfill = function(zeros){
    return this.toString().padStart(zeros, '0') 
}

Date.prototype.to_ddmmyyyy = function(...separator){
    return (
          this.getDate().toString().padStart(2, '0') 
        + separator
        + (this.getMonth()+1).toString().padStart(2, '0')
        + separator
        + this.getFullYear()
    )
}
Number.prototype.to_ddmmyyyy = function(...separator){
    return new Date(this).to_ddmmyyyy(separator)
}
// dd/mm/yy
Date.prototype.to_ddmmyy = function(...separator){
    return (
          this.getDate().toString().padStart(2, '0') 
        + separator
        + (this.getMonth()+1).toString().padStart(2, '0')
        + separator
        + (this.getYear() - 100)
    )
}
Number.prototype.to_ddmmyy = function(...separator){
    return new Date(this).to_ddmmyy(separator)
}
Date.prototype.to_mmddyyy = function(...separator){
    return (
          (this.getMonth()+1).toString().padStart(2, '0')
        + separator
        + this.getDate().toString().padStart(2, '0') 
        + separator
        + this.getFullYear()
    )
}
Number.prototype.to_mmddyyy = function(...separator){
    return new Date(this).to_mmddyyy(separator)
}
Date.prototype.to_yyyymmdd = function(...separator){
    return (
          this.getFullYear()
        + separator
        + (this.getMonth()+1).toString().padStart(2, '0')
        + separator
        + this.getDate().toString().padStart(2, '0') 
    )
}
Number.prototype.to_yyyymmdd = function(...separator){
    return new Date(this).to_yyyymmdd(separator)
}
String.prototype.to_yyyymmdd = function(...separator){
    return new Date(this).to_yyyymmdd(separator)
}

Date.prototype.offsetDays = function(days){
    return new Date(this.getTime() + (days * 24 * 60 * 60 * 1000))

}
Date.prototype.offsetHours = function(hours){
    return new Date(this.getTime() + (hours * 60 * 60 * 1000))
}
Date.prototype.to_zeroclock = function (){
    return new Date(this.toDateString())
}
Date.prototype.getOffsetDays = function(...datestart){
    // distanza tra this e il giorno nel parametro / oggi
    if (!datestart.length) {
        datestart = new Date()
    }
    return Math.round((new Date(datestart).to_zeroclock() - this.to_zeroclock()) /(24*60*60*1000))
}
Date.prototype.to_timehours = function(){
    return (this - this.to_zeroclock()) / (60 * 60 * 1000)
}
String.prototype.from_dmy_to_mdy = function(){
    // from ddmmyy to 
    if (this.length < 10){
        return null
    }
    let separator = this[2]
    let split = this.split(separator)
    let d = split[0]
    let m = split[1]
    let y = split[2]
    
    return (    m 
            +   separator
            +   d
            +   separator
            +   y)

}

Date.prototype.to_fullDateIta = function () { // -> String
    let months = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre']
    let days = ['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato']
    return days[this.getDay()]+" "+this.getDate()+" "+months[this.getMonth()]+" "+this.getFullYear()
}
Number.prototype.to_fullDateIta = function () { // -> String
    let months = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre']
    let days = ['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato']
    let t = new Date(this)
    return days[t.getDay()]+' '+t.getDate()+' '+months[t.getMonth()]+' '+t.getFullYear()
}
Date.prototype.getDayIta = function () { // -> String
    let days = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato']
    return days[this.getDay()]
}
Number.prototype.getDayIta = function () { // -> String
    return new Date(this).getDayIta()
}

Date.prototype.to_day_ddmmyy = function (...separator) { // -> String
    return this.getDayIta() + " " + this.to_ddmmyy(separator)
}
Number.prototype.to_day_ddmmyy = function (...separator) { // -> String
    return new Date(this).to_day_ddmmyy(separator)
}

Date.prototype.isEqualTo = function(date){
    return this.getTime() == new Date(date).getTime()
}

Date.prototype.isSameDay = function(date){
    return this.to_zeroclock().isEqualTo(new Date(date).to_zeroclock())
}


// gestire i dizionari
Object.prototype.keys = function () {
    return Object.keys(this)
}
Object.prototype.values = function () {
    return Object.values(this)
}
Object.prototype.len = function () {
    return Object.keys(this).length
}

Object.prototype.last = function (){
    return this[this.length - 1]
}

