



function setup() {
    
    const container = document.getElementById('class-container');
    const introElement = document.getElementById('intro');
    const alienSpeakElement = document.getElementById('alien-speak');
  
    const characters = [
      new Human('Alice', 30, 'the USA'),
      new Human('Ben', 40, 'Russia'),
      new Human('Charile', 25, 'China'),
      new Alien('Zorg', 300, 'Mars'),
      new Alien('Blorp', 150, 'Venus'),
      new Alien('Xarg', 400, 'Pluto'),
    ];
  
    characters.forEach(character => createCard(character, container, introElement,alienSpeakElement ));
  }
  
  setup();
  