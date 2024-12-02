console.log('OOP is here')

class Being {
  //kaldes ved oprettelse af nye objekter 
  constructor(name, age) {
    this.name = name
    this.age = age

  }

  introduce() {
    console.log(`Hello from ${this.name}, ${this.age} year old`)

  }
}


class Alien extends Being{
  constructor(name, age, planet){
    super(name, age)
    this.planet = planet
  }

  introduce(){
    super.introduce()
    console.log(`And i am an Alien, I'm a legal Alien from the planet of ${this.planet}`)
  }
}

class Human extends Alien{
  constructor(name, age, nof){
    super(name, age)
    this.nof = nof
  }

  brag(){
    for(let i=0; i< this.nof; i++){
      console.log(`I am superior because I have so many fingers`)
    }
  }
}
