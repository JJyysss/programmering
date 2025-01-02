class Being {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      return `Hello it's ${this.name}, a ${this.age} year old.`;
    }
  }
  
  class Alien extends Being {
    constructor(name, age, planet) {
      super(name, age);
      this.planet = planet;
    }
  
    introduce() {
      return `${super.introduce()} And I am an Alien from the planet ${this.planet}.`;
    }
  
    alienSpeak() {
      const phrases = ["Blip blop!", "Zorg narg!", "Grzzt blorp!"];
      return phrases[Math.floor(Math.random() * phrases.length)];
    }
  }
  
  class Human extends Being {
    constructor(name, age, country) {
      super(name, age);
      this.country = country;
    }
  
    introduce() {
      return `${super.introduce()} I am a Human from ${this.country}.`;
    }
  }
  
  function createCard(character, container, introElement, alienSpeakElement) {
    const card = document.createElement('div');
    card.className = `card ${character instanceof Alien ? 'alien' : 'human'}`;
    card.textContent = character.name;
  
    card.addEventListener('click', () => {
      const message = character.introduce();
      console.log(message);
     // alert(message);

      introElement.textContent = message;

      
      
  
      // Bonus: Hvis det er en Alien, vis aliensprog
      if (character instanceof Alien) {
        console.log(`Alien speaks: ${character.alienSpeak()}`);
        const alienMessage = character.alienSpeak();
        alienSpeakElement.html(`Alien speaks: "${alienMessage}"`);

        
      } else {
        alienSpeakElement.html('') ; // Tøm aliensprog-sektionen for mennesker
      }
      
    });
  
    container.appendChild(card);
  }
  
  function setup() {
   

    let container = select('#class-container');
    let introElement = select('#intro');
let alienSpeakElement = select('#alien-speak');
  
    const characters = [
      new Human('Alice', 30, 'the USA'),
      new Human('Ben', 40, 'Russia'),
      new Human('Charile', 25, 'China'),
      new Alien('Zorg', 300, 'Mars'),
      new Alien('Blorp', 150, 'Venus'),
      new Alien('Xarg', 400, 'Pluto'),
    ];
  
    characters.forEach(character => createCard(character, container.elt, introElement.elt, alienSpeakElement ));
  }
  
  setup();
  