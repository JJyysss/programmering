// Superklasse
class Being {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      return `Hi, I am ${this.name}!`;
    }
  }
  
  // Subklasse for mennesker
  class Human extends Being {
    constructor(name, occupation) {
      super(name);
      this.occupation = occupation;
    }
  
    introduce() {
      return `Hi, I am ${this.name}, and I work as a ${this.occupation}.`;
    }
  }
  
  // Subklasse for aliens
  class Alien extends Being {
    constructor(name, planet) {
      super(name);
      this.planet = planet;
    }
  
    introduce() {
      return `Greetings, Earthling! I am ${this.name} from planet ${this.planet}.`;
    }
  
    randomAlienPhrase() {
      const phrases = [
        "Zorg blap bloop!",
        "Nebulon Zorpria!",
        "Gribblor xtorpp!",
        "Klaatu barada nikto!"
      ];
      return phrases[Math.floor(Math.random() * phrases.length)];
    }
  }
  
  // Opret instanser
  const characters = [
    new Human("Alice", "Engineer"),
    new Human("Bob", "Doctor"),
    new Human("Charlie", "Teacher"),
    new Alien("Zorg", "Xenon"),
    new Alien("Blorp", "Mars"),
    new Alien("Quaz", "Venus"),
  ];
  
  // HTML-elementer og klikfunktionalitet
  const container = document.getElementById("character-container");
  const introDisplay = document.createElement("div");
  introDisplay.className = "intro";
  document.body.appendChild(introDisplay);
  
  characters.forEach((character, index) => {
    const card = document.createElement("div");
    card.className = `card ${character instanceof Alien ? "alien" : "human"}`;
    card.textContent = character.name;
  
    card.addEventListener("click", () => {
      const intro = character.introduce();
      introDisplay.textContent = intro;
  
      console.log(intro);
      if (character instanceof Alien) {
        console.log(`Alien phrase: ${character.randomAlienPhrase()}`);
      }
    });
  
    container.appendChild(card);
  });
  