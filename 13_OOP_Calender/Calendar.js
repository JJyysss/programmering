console.log('OOP is here')
// class setup metode, 
class Door {
  //kaldes ved oprettelse af nye objekter 
  constructor(containerDiv, day, content, doorSound) {
    // den skal være den current div
    this.parentDiv = containerDiv
    this.day = day
    this.content = content
    // først gøre det, og gør ned lave createDoor function
    this.createDoor()


  }
    
  //intern funktion - kaldes internt med this.function()

  createDoor(){
    // oprette HTML element, og give tekst day, ( hvilke calender er på)
    this.doorDiv = createDiv(this.day)
    // stringlitterro
    this.doorDiv.style(`
      height:5rem;
      width:5rem;
      background:crimson;
      color:white;
      font-size:3rem;
      display:grid;
      place-items:center;
      cursor:pointer;
      transition: all .7s ease-in-out
      `)
      // put noget i HTML 
      this.parentDiv.child(this.doorDiv)
      this.doorDiv.mousePressed(() => this.openDoor() )

  }
  openDoor(){
    this.doorDiv.style(`
      background: url(${this.content});
      color: transparent;
      background-size: cover;
      pointer-events: none;

      `)
      this.doorSound.play()
  }
}

