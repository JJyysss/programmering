
function setup(){
    // Variablen, c er en ny instans af klassen Clock, som får div'en #Clock med i sin constructor
    //json objekt me styling parametre sendes som det andet argument
    let style = {
        background: 'black',
        shape: 'circle',

    }
    let c = new Clock(select('#clock'), style)
    c.start()
    //setTimeout(c.stop(), 5000)
}
