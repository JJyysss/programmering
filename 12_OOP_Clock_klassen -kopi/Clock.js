console.log('Clock is here')

//Når en klasses objekter kan opføre sig forskelligt afhængig af argumenter i contructoren 
//Kaldes det POLYMORFI
class Clock {
    //constructoren er klassens "setup" funktion, som kaldes når nye objekter fra klassen oprettes 
    constructor(div, style){
        this.div = div
        this.style = style
        //div's for hours, minutes, seconds
        this.hDiv = createDiv()
        this.mDiv = createDiv()
        this.sDiv = createDiv()
        this.div.child(this.hDiv)
        this.div.child(this.mDiv)
        this.div.child(this.sDiv)
        //interval til at sætte tiden ind 
        this.interval
        // alarm stuff
        this.alarmSet = false
        this.alarmHours = null
        this.alarmMinutes = null
        this.alarmSeconds = null
        this.alarmRinging = false

        // vil alarm have en lyd, hente lyd fra soundfil
        this.alarmSound = new Audio('soundfil/alarmlyd.mp3');

        //styles 
        this.div.style(
            `
            width:16rem;
            height:5rem;
            border:4px dotted gray;
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            padding:1rem;
            border-radius:2rem;
            place-items:center;
            font-size:1.5rem;
            cursor: pointer; /* bliver clock clickable */
            `
        )

        //reager på argrumentet style fra constructoren
         switch(style){
            case 'pink': 
                    this.div.style('background', 'hotpink')
                    break
            case 'black':
                this.div.style('background', 'black')
                this.div.style('color', 'white')
                break
                default:
                    this.div.style('background','rgba(0,0,0,0)')
         }
         // når mousePressed og skal alarm stop
         this.div.mousePressed(() => {
            if (this.alarmRinging) {
                this.stopAlarm();
            }
        });

        
    }
    start(){
        this.interval = setInterval( ()=>{
            //den her komapkte linje kode, betyder at vi SPØRGER om hour() funktionen returnerer 
            //et tal UNDER ti - hvis ja, sætter vi et nul foran 
            this.hDiv.html( hour() < 10 ? '0' + hour() : hour() )
            this.mDiv.html( minute() < 10 ? '0' + minute() : minute() )
            this.sDiv.html( second() < 10 ? '0' + second() : second() )
            this.checkAlarm()

        }, 1000)
    }
    stop(){
        clearInterval(this.interval)
    }
    setAlarm(h, m, s){
        this.alarmHours =h
        this.alarmMinutes = m
        this.alarmSeconds = s
        this.alarmSet = true
        console.log(`Alarm set to ${h}:${m}:${s}`) 
    }
    checkAlarm(){
        if(this.alarmSet){
            if(this.alarmHours == hour() && this.alarmMinutes == minute() && this.alarmSeconds == second()){
                console.log('ALARM GO')
                this.showAlarm()

            }
        }
    }
        showAlarm(){
            this.div.style('background', 'red')
            this.alarmRinging = true
            // spil lyd
            this.alarmSound.play();
    }
    stopAlarm(){
        this.alarmRinging = false;
        this.alarmSet = false;
        // stop lyd
        this.alarmSound.pause();  
        // skrift farve tilbage til transparent
        this.div.style('background', 'rgba(0,0,0,0)');
        // Reset sound to start from the beginning
        this.alarmSound.currentTime = 0;  
        console.log('Alarm stopped');
    }
}