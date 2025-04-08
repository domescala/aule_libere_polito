const COUNTER = {
    favorite_add: function(classroom){
        counter_increment("favorite classrooms", "Aula " + classroom)
    },
    classroom_opening: function (classroom) {
        counter_increment("watch classrooms", "Aula " + classroom)
    },
    campus_selected: function (campus) {
        counter_increment("campus selected", campus)
    },
    filter_selected: function (filter) {
        counter_increment("filter selected", filter)
    },
    click_buttons: function (button) {
        counter_increment("click_buttons", button)
    },
    click_links: function (link) {
        counter_increment("click_links", link)
    },
    main_page: function () {
        counter_increment("view", "mainpage")
    }
}


var counter_increment = function(){}



// window.addEventListener("load", function () {
//     setTimeout(() => {
//         COUNTER.main_page()
//         counter_increment = function (action, key){
//             var namespace = 'auleliberev2'
//             var options = { behavior: 'vote' } 
        
//             counterApi.increment(key, action, namespace, options, function(err, res){
//                 console.log(res)
//             })
        
//         }
//     }, 10);
// })

q("#search_main").addEventListener("mousedown", function () {

    COUNTER.click_buttons("main search")
})
q("#search_main").addEventListener("input", function () {

    COUNTER.click_buttons("run search")
})
q("#button_search_class").addEventListener("mousedown", function () {

    COUNTER.click_buttons("bottom search")
})

Q(".date_input").forEach(e => { 
    e.addEventListener("click", function () {
        COUNTER.click_buttons("open date")
    })
})

q("#campus_input").addEventListener("click", function () {
    COUNTER.click_buttons("open campus")
})


Q("a").forEach(e => {
    e.addEventListener("mousedown", function () {
        COUNTER.click_links(e.innerHTML)
    })
});