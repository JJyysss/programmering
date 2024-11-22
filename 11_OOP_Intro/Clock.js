console.log('Clock is here')
// når en klasses objekter kan opføre sig forskelligt afhængig af argumenter i constructoren
// klades det POLYMORFI
// class Clock er en funktion, ingen (), 
class Clock {
// constructor er en klassen "set up" funkton, som klades når vi opretter ny objekt i klassen
    constructor(div, style){
        this.div = div
        this.style = style
        
        //div's for hours, minutes, seconds
        this.hDiv =createDiv()
        this.mDiv = createDiv()
        this.sDiv = createDiv()
        this.div.child(this.hDiv)
        this.div.child(this.mDiv)
        this.div.child(this.sDiv)
        // interval til at sætte tiden ind
        this.interval
        // styles
        this.div.style('width', '16rem')
        this.div.style('height', '5rem')
        this.div.style('border', '4px dotted gray')
        this.div.style('display', 'grid')
        this.div.style('place-items', 'center')
        this.div.style('padding', '1rem')
        this.div.style('border-radius', '2rem')
        // reager på argumentet style fra constructoren
        
        switch(this.style.shape){
            case 'circle':
            this.div.style('height', '16rem')
            this.div.style('border-radius', '50%')
            break
           case 'ellipse':
            this.div.style('height', '8rem')
            this.div.style('border-radius', '50%')
            break
         

           


        }
        switch(this.style.background){
            case 'pink': this.div.style('background', 'hotpink')
            break
            case 'black': 
            this.div.style('background', 'black')
            this.div.style('color', 'white')
            break
        }

      
    }
    start(){
        this.interval = setInterval( ()=>{
            // den her kompakte linje, betyder at vi SPØRGER om hour() funktion
            // et tal UNDER 10 - hvis ja, sætter vi et nul foran
            this.hDiv.html(hour() < 10 ? '0' + hour() : hour())
            this.mDiv.html(minute() < 10 ? '0' + minute() : minute())
            this.sDiv.html(second() < 10 ? '0' + second() : second())
        }, 1000)
    }
    stop(){
        clearInterval(this.interval)
    }
}
