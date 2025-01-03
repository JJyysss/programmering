class Being {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      return `Hello it's ${this.name}, ${this.age} year old.`;
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
  
    alienTalk() {
      const sentences = ["PI PIKACHU :o", "WRGZHS WRZSJ :)", "RYMZDZSGHNJM .)", "pwijbv wepbvna", "WIRIBVEF WERBAW"];
      return sentences[Math.floor(Math.random() * sentences.length)];
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
  
  function createCard(character, container, introElement,  alienTalkElement) {
    const card = document.createElement('div');
    // navn af kort skal være Alien, ellers skal have human navne. 
    card.className = `card ${character instanceof Alien ? 'alien' : 'human'}`;
    card.textContent = character.name;
  
    card.addEventListener('click', () => {
      const message = character.introduce();
      console.log(message);
      // skrive introduce i html
      introElement.textContent = message;

      
      
  
      //Alien skal sige aliensprog
      if (character instanceof Alien) {
        console.log(`Alien (${character.name}) talks: ${character.alienTalk()}`);
        const alienMessage = character.alienTalk();
        alienTalkElement.textContent = `${character.name} talks: "${alienMessage}"`;

        
      } else {
        alienTalkElement.textContent = ''; 
      }
      
    });
  
    container.appendChild(card);
  }
  
  function setup() {
    
    const container = document.getElementById('class-container');
    const introElement = document.getElementById('intro');
    const alienTalkElement = document.getElementById('alien-speak');
  
    const characters = [
      new Human('Alice', 28, 'the USA'),
      new Human('Amber', 25, 'Russia'),
      new Human('Jellycat', 80, 'London'),
      new Human('doraemon', 18, 'Japan'),
      new Alien('Hello Kitty', 300, 'Hello'),
      new Alien('Pikachu', 150, 'Pokémon'),
      new Alien('Labubu', 400, 'Pluto'),
    ];
  
    
  for (const character of characters) {
    createCard(character, container, introElement, alienTalkElement);
  }
  }
  
  setup();
  
  