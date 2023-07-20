import BoxOfficeApp from "../../images/projects/box-office-app-min.png";
import DateCounter from "../../images/projects/date-counter-min.png";
import DevConnect from "../../images/projects/dev-connect-min.png";
import Faraway from "../../images/projects/faraway-min.png";
import Netflix from "../../images/projects/netflix-clone-min.png";
import Omnifood from "../../images/projects/omnifood-min.png";
import TicTacToe from "../../images/projects/tic-tac-toe-min.png";
import WeatherApp from "../../images/projects/weather-app-min.png";

export const desktopCardList = [
  {
    gridRow: "1 / 6",
    gridColumn: "1 / 5",
    backgroundColor: "yellow",
    isSmall: false,
    name: "DevConnect-Social Media App",
    info: "A social media web-app where tech savvy people can post, like, share and comment. Technology stack used:- React.js, Node.js, Express, MongoDb, JWT, Material UI.",
    viewLink: "https://dev-connect-social-network.netlify.app/login",
    gitLink: "https://github.com/aamnasuhail/devConnect",
    imgUrl: { DevConnect },
  },
  {
    gridRow: "6 / 11",
    gridColumn: "1 / 5",
    backgroundColor: "grey",
    isSmall: false,
    name: "Box Office App",
    info: "A movie and actor searching app that can also share your favourite movies. Technology stack:- React.js, React-Router, React-Bootstrap, PayPal api ,deployed on Netlify.",
    viewLink: "https://aamnasuhail.github.io/box-office-app/",
    gitLink: "https://github.com/aamnasuhail/box-office-app",
    imgUrl: { BoxOfficeApp },
  },
  {
    gridRow: "1 / 4",
    gridColumn: "5 / 9",
    backgroundColor: "pink",
    isSmall: false,
    name: "Omnifood Website",
    info: "A webiste for a virtual company Omnifood created user-friendly modern design Technology Stack:- HTML & CSS (Flexbox and Grid) and Javascript. ",
    viewLink: "https://omnifoodbyaamna.netlify.app/",
    gitLink: "https://github.com/aamnasuhail/omnifood",
    imgUrl: { Omnifood },
  },

  {
    gridRow: "4 / 7",
    gridColumn: "8/ 11",
    backgroundColor: "orange",
    isSmall: false,
    name: "Tic-Tac-Toe Game",
    info: "A tic-tac-toe game in react in which we can also go to the previous step. Technology Stack:- React.js",
    viewLink: "https://tictactoegamebyaamna.netlify.app/",
    gitLink: "https://github.com/yahya-cloud/burger-app",
    imgUrl: { TicTacToe },
  },
  {
    gridRow: "7 / 11",
    gridColumn: " 5 / 9",
    backgroundColor: "rgb(255, 46, 46)",
    isSmall: true,
    name: "Faraway List",
    info: "Faraway - a CRUD app in React that can add, delete, sort and check the items you want to pack for your trip. Deployed on Netlify",
    viewLink: "https://travel-list-aamna.netlify.app/",
    gitLink: "https://github.com/aamnasuhail/travel-list",
    imgUrl: { Faraway },
  },
  {
    gridRow: "7 / 11",
    gridColumn: "9 / 11",
    backgroundColor: "lightcoral",
    isSmall: false,
    name: "Date Counter",
    info: "A date counter that can count the date from the current date made in ReactJS",
    viewLink: "https://date-counter-aamna.netlify.app/",
    gitLink: "https://github.com/aamnasuhail/date-counter",
    imgUrl: { DateCounter },
  },

  {
    gridRow: "1 / 4 ",
    gridColumn: " 9 / 11",
    backgroundColor: "lightsalmon",
    isSmall: false,
    info: "A weather app that can show real time data of the city ypu want to search. Technology stack:- JS,HTML, CSS   ",
    name: "Weather App",
    viewLink: "https://aamnasuhail.github.io/Weather-App/",
    gitLink: "https://github.com/aamnasuhail/Weather-App",
    imgUrl: { WeatherApp },
  },
  {
    gridRow: "4 /7",
    gridColumn: "  5 / 8",
    backgroundColor: "lawngreen",
    isSmall: false,
    name: "Netflix Clone",
    info: "A Netflix Clone made in ReactJS which shows the current movies usinh TMDB API and can also search your favourite movies",
    viewLink: "https://netflix-clone-aamna.netlify.app/",
    gitLink: "https://github.com/aamnasuhail/netflix-clone",
    imgUrl: { Netflix },
  },
];

export const mobileCardList = [
  {
    ...desktopCardList[0],
    gridRow: "1 / 6",
    gridColumn: "1 / 4",
    isSmall: true,
  },
  {
    ...desktopCardList[1],
    gridRow: "1/ 6",
    gridColumn: "4 / 7",
    isSmall: true,
  },
  {
    ...desktopCardList[2],
    gridRow: "6 /10",
    gridColumn: "1 / 4",
    isSmall: true,
  },

  {
    ...desktopCardList[3],
    gridRow: " 6/ 10",
    gridColumn: "4 / 7",
    isSmall: true,
  },
  {
    ...desktopCardList[4],
    gridRow: "10/ 14",
    gridColumn: "1 / 4 ",
    isSmall: true,
  },
  {
    ...desktopCardList[5],
    gridRow: "10/ 14",
    gridColumn: "4 / 7",
    isSmall: true,
  },
  {
    ...desktopCardList[6],
    gridRow: "14/ 18",
    gridColumn: "1 / 4",
    isSmall: true,
  },
  {
    ...desktopCardList[7],
    gridRow: "14/ 18",
    gridColumn: "4 / 7",
    isSmall: true,
  },
];
