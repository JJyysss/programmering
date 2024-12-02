let classContainer

function preload() {
}

function setup() {
  //HTML containeren
  calendarContainer = select('#calendar')

  let b = new Being('bamsebjørn', 1000)
  b.introduce()

  let a = new Alien('WosniakiAlien', 800,'Russia')
  a.introduce()

  let h = new Human ('SvenBrinkmannah', 86, 10000000)
  h.introduce()
  h.brag()
}



