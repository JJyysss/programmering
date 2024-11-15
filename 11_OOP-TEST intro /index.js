let currentPage = 1
let pages //array med alle elementer med class = page 

function setup(){
    //console.log('P5.js er loaded')
    pages = selectAll('.page')
    //nu kan man se at pages er blevet til en liste med alle class = page ting
   //  console.log(pages.length)
   // lave arrowfunction, navnløsfunction, milisekunder
   // set id=timer_hours til funktion
   // kun setInterval klade nogot
   setInterval( ()=>{
    // if minutes() < 10 eller ingen, ? er if og : er eller
    let minuteZero = minute() < 10 ? "0" : ""
    let hourZero = hour() < 10 ? "0" : ""
    let secondZero = second() < 10 ? "0" : ""
    select('#timer_hours').html(hourZero + hour())
    select('#timer_minutes').html(minuteZero + minute())
    select('#timer_seconds').html(secondZero + second())
   }, 1000)

}

function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }

    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}

