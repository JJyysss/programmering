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
        alienSpeakElement.textContent = `Alien speaks: "${alienMessage}"`;

        
      } else {
        alienSpeakElement.textContent = ''; // Tøm aliensprog-sektionen for mennesker
      }
      
    });
  
    container.appendChild(card);
  }
  
  function setup() {
    const container = document.getElementById('class-container');
    const introElement = document.getElementById('intro');
    const alienSpeakElement = document.getElementById('alien-speak');
  
  
    characters.forEach(character => createCard(character, container, introElement,alienSpeakElement ));
  }
  
  setup();
  