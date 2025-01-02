console.log('OOP is here')

class Being {
  //kaldes ved oprettelse af nye objekter 
  constructor(name, age) {
    this.name = name
    this.age = age

  }

  introduce() {
   console.log( `Hello I am ${this.name}, ${this.age} year old`)

  }
}


class Alien extends Being{
  constructor(name, age, planet){
    super(name, age)
    this.planet = planet
  }

  introduce(){
    
    super.introduce()
    console.log(`${super.introduce()} And i am an Alien, I'm a legal Alien from the planet of ${this.planet}`)
  }
}

class Human extends Alien{
  constructor(name, age, nof){
    super(name, age)
    this.nof = nof
  }

  //brag(){
    //for(let i=0; i< this.nof; i++){
     // console.log(`I am superior because I have so many fingers`)
    //}
  //}
}



// Generer HTML dynamisk
const container = document.getElementById("container");

beings.forEach((being, index) => {
  const card = document.createElement("div");
  card.className = being instanceof Human ? "card human" : "card alien";
  card.innerText = being.name;

  card.addEventListener("click", () => {
    const message = being.introduce();
    alert(message);
    console.log(message);

    if (being instanceof Alien) {
      const alienPhrase = being.alienLanguage();
      alert(`Alien language: ${alienPhrase}`);
      console.log(`Alien language: ${alienPhrase}`);
    }
  });

  container.appendChild(card);
});

// CSS til styling (kan tilføjes i en <style> tag eller en CSS-fil)
const style = document.createElement("style");
style.innerHTML = `
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    text-align: center;
    cursor: pointer;
    font-family: Arial, sans-serif;
  }
  .human {
    background-color: #cce5ff;
  }
  .alien {
    background-color: #d4edda;
  }
`;

Human.style(`
   background-color: #cce5ff; 

`)
Alien.style(`
  `)

document.head.appendChild(style);


