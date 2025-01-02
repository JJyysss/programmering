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
  

  