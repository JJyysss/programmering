let m5NameDiv, m5StatusDiv
// denne variabel bruges til at håndtere mqtt
let client
function setup() {

    // tag fat i de to HTML elementer vi vil modificere
    m5NameDiv = select('#m5_1 header')
    m5StatusDiv = select('#m5_1 .status')

    // vi kan bruge mqtt.connect fordi vi har inkluderet mqtt.js i HTML filen
    client = mqtt.connect('wss://mqtt.nextservices.dk')

    // on er en asykron EVENT, som kaldes når vi får en besked fra mrtt serveren
    client.on('connect', function(svar){
        console.log(svar, 'serveren er klar til mqtt kommunikation')
    })

    //nu vil vi gerne subscribe på et emne
    client.subscribe('programmering')

    // og så skal vi sætte den LISTENER op som skal modtage input fra MQTT
    client.on('message',function(emne,besked){
        // emne kommer som en string 
        console.log(emne)
        // beskeden skal vi lige parse før vi kan læse den
        console.log(besked.toString())
        // det vi får fra m5'eren er i det her eksempel JSON format
        let json =JSON.parse(besked.toString())
        // nu kan jeg bruge data fra JAON obejktet
        console.log(json.name, 'her er navnet fra JSON obektet')
        //SÅ kan vi opdatere HTML dokumentet
        m5NameDiv.html(json.name)
        m5StatusDiv.html(json.status)
        //HVIs status er truw, skal vi give klasse"true"
        if (json.status){
            m5StatusDiv.addClass("true")
        }else{
            m5StatusDiv.removeClass("true")

        }

    })



}