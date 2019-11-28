interface GameNode {
  message: string;
  imageUrl: string;
  backgroundImageUrl: string;
  choices: { text: string; next?: number }[];
};

const gameNodes: GameNode[] = [
  {
    message: 'Stora snälla vargen bodde ensam i en skog. Det blev lite trist så en utflykt han föreslog. Att enbart gå runt blir nog trist, beklagligtvis. Så vargen sa "Jag vet, jag hälsar på min vän Gris."',
    imageUrl: "./images/1start.png",
    backgroundImageUrl: "",
    choices: [
      { text: "Ta en promenad", next: 2 },
      { text: "Stanna hemma", next: 1 }
    ]
  },
  {
    message: " Varg stannade istället i sin hemvist. Inget mer hände, vilket var trist.",
    imageUrl: "./images/pig.png",
    backgroundImageUrl: "",
    choices: [
      { text: "Starta om", next: 0 }
    ]
  },
  {
    message: 'När vargen närmade sig grisen fick denne fart. "Gris vill leka kull." Tänkte varg och kände sig smart. Gris fuskade och försvann in i ett hus utav strå. I uppståndelsen föll ett ljus där inne och tände på.',
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=3",
    backgroundImageUrl: "",
    choices: [
      { text: "Hjälp grisen", next: 4 },
      { text: "Gå hem", next: 3 }
    ]
  },
  {
    message: "Varg gick hem då Gris nog vet vad den gör. Men då fylldes skogen utav baconodör.",
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Starta om", next: 0 }
    ]
  },
  {
    message: "Varg blåste hårt för att släcka brinnande byggen. Men när Gris var räddad lade hen benen på ryggen. Vargen tittade förvirrat på grisens försvinnande. Och ville följa efter för att se grisens välbefinnande.",
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Följ dem" , next: 6},
      { text: "Gå hem", next: 5 }
    ]
  },
  {
    message: "Varg gick hem och fick sedan höra att Gris återfanns platt i en brädröra.",
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Starta om", next: 0 }
    ]
  },
  {
    message: 'Gris hade sprungit till sin frände i en hus av trä. Varg blev direkt orolig när huset vinglade i lä. Varg tänkte "Fuskbygget kan ju rasa ner på dem." Men när Varg ringde på, var det låst om grisens hem.',
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Hjälp dem" , next: 8},
      { text: "Gå hem", next: 7 }
    ]
  },
  {
    message: "Varg gick hem trots att huset knaka och hörde sedan att de blivit en grispannkaka.",
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Starta om", next: 0 }
    ]
  },
  {
    message: 'Vargen började nu att knacka på grisarnas dörr. Detta gjorde att stugan vinglade som aldrig förr. "Akta er. Grisar, akta er" brast vargen ut i rop. Så att grisarna hann försvinna när huset föll ihop.',
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Följ dem" , next: 10},
      { text: "Gå hem", next: 9 }
    ]
  },
  {
    message: 'Varg gick hem och hörde sedan ryktesvis. Att syrebrist tillintetgjort varje liten gris',
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Starta om", next: 0 }
    ]
  },
  {
    message: 'De hade ränt in i en hus som tycktes mindre fatal. Huset trycktes vara ett stadigt och tryggt bostadsval. Varg insåg dock att denna kompakta konstruktion kunde kväva grisarna då den saknade ventilation.',
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Hjälp dem" , next: 12},
      { text: "Gå hem", next: 11 }
    ]
  },
  {
    message: 'Varg gick hem och läste vad tidningen skrev. Att grisarna trillat av pinn när syre uteblev.',
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Starta om", next: 0 }
    ]
  },
  {
    message: 'Deras dörr hade nog gått i baklås precis som sist. Så vargen ropade och varnade dem för syrebrist. Ett fönster öppnades och de sa "Du kan inte ta oss." Vargen andas ut nu när deras dörr inte kom loss. De fuskade visserligen i kull men Varg var ändå glad att han räddade grisarna och hade fått sig en promenad.',
    imageUrl: "https://source.unsplash.com/random/1600x900?sig=4",
    backgroundImageUrl: "",
    choices: [
      { text: "Slut", next: 0 }
    ]
  },
];

const promptElement = document.querySelector(".prompt") as HTMLElement;
const buttons = document.querySelector(".buttons") as HTMLElement;
const image = document.querySelector(".image-container") as HTMLElement;
const game = document.querySelector(".game") as HTMLElement;

function showNode(node: GameNode): void {
  promptElement ? (promptElement.innerText = node.message) : null;
  image.style.backgroundImage = `url(${node.imageUrl})`;
  game.style.backgroundImage = `url(${node.backgroundImageUrl})`;
  buttons.innerHTML = "";

  node.choices.forEach(choice => {
    const button: HTMLElement = document.createElement("button");
    button.addEventListener("click", () => {
      if (choice.next || choice.next == 0) {
        showNode(gameNodes[choice.next]);
      }
    });

    button.innerText = choice.text;
    buttons.appendChild(button);
  });
}

showNode(gameNodes[0]);

