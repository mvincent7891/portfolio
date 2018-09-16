const colors = [
  "#F57C00",
  "#C2185B",
  "#303F9F",
  "#E64A19",
  "#0097A7",
  "#1976D2",
  "#D32F2F",
  "#FFA000",
  "#0288D1",
  "#FBC02D",
  `#7B1FA2`,
  "#512DA8",
  "#4CAF50"
];

export const projects = {
  chinese: {
    name: "Learn Chinese",
    longName: "React App for My Chinese Studies",
    github: "https://github.com/mvincent7891/chinese",
    url: "http://mvp-chinese.herokuapp.com/",
    img: "./images/chinese.png",
    color: colors[3],
    skills: ["Javascript", "React"],
    description: `A simple React client with access to full Chinese dictionary (definition, pinyin and character). Cycle through predefined deck or build your own from scratch.`
  },
  gnothiMobile: {
    name: "Gnothi for Android",
    longName: "Rails API & Android App",
    github: "https://github.com/mvincent7891/gnapi",
    url: "https://www.gnothi.life",
    img: "./images/gnothi_mobile.png",
    color: colors[6],
    skills: ["Jave", "Android", "Ruby", "Rails", "Product MGMT"],
    description: `An Android mobile application backed by Rails API and Postgres, Gnothi Mobile allows users to track app usage and set usage goals for themselves. In addition to writing the entire Rails backend and test suite, I contribute regularly to the Android code base and managed an oversees developer in the initial frontend development.`
  },
  appStats: {
    name: "App Usage Stats",
    longName: "React Native module",
    github: "https://github.com/mvincent7891/UsageStatsModule",
    url: "https://github.com/mvincent7891/UsageStatsModule",
    img: "./images/react_native.png",
    color: colors[12],
    skills: ["Jave", "React Native", "JS"],
    description: `A Java / JS bridge which makes the Android platform's UsageStats class available from within your React Native app. Quickly obtain statistics on app usage over the past day or week. This represents my first real mobile / React Native endeavor.`
  },
  gnothi: {
    name: "Gnothi Journal",
    longName: "Smart journaling application",
    github: "",
    url: "https://www.youtube.com/watch?v=UJyPFt0yI0k&feature=youtu.be",
    img: "./images/gnothi.png",
    color: colors[5],
    skills: ["React", "Redux", "JS", "Rails", "NLP", "Product Design"],
    description: `Gnothi is a digital wellness assistant and smart journaling application in its infancy. I'm the sole developer of the application, with design help coming from two of my former college classmates. We aim to build a platform which helps users extract more value from their digital lives.`
  },
  scalable: {
    name: "Scalable",
    longName: "Guitar application",
    github: "https://www.github.com/mvincent7891/scalable/",
    url: "https://mvincent7891.github.io/scalable/",
    img: "./images/scalable.png",
    color: colors[0],
    skills: ["React", "Redux", "JS", "jQuery"],
    description: `Scalable is an application for guitarists which enables the visualization of the fretboard. It's a project that allowed me to focus on something I'm passionate about while sharpening my React and Redux skills. \n
      The core feature is the programming of any combination of tuning, scale and chord, allowing musicians to get a visual sense of how notes come together or clash. Scalable is very much a work in progress, but it's also functional so feel free to try it out.`
  },
  iRetain: {
    name: "iRetain",
    longName: "Full stack Rails app",
    github: "https://www.github.com/mvincent7891/iretain/",
    url: "http://www.iretain.io",
    img: "./images/iretain.png",
    color: colors[1],
    skills: ["Rails", "React", "Redux", "JS", "Postgres"],
    description: `iRetain is a full-stack web app used for studying flash cards, inspired by Brainscape. It utilizes Ruby on Rails and a PostgreSQL database on the backend, and React.js with a Redux architectural framework on the frontend. I built the MVP (from database to front end) in just 10 days. The project's highlight feature is a Chrome extension (also called iRetain) that allows the dynamic creation of flash cards from anywhere on the web.`
  },
  tranist: {
    name: "Transit PathFinder",
    longName: "Algorithm visualizer",
    github: "https://www.github.com/mvincent7891/bart_art/",
    url: "https://mvincent7891.github.io/bart_art/",
    img: "./images/transit.gif",
    color: colors[2],
    skills: ["HTML5 Canvas", "JS", "jQuery", "MTA & BART APIs"],
    description: `Transit PathFinder is an algorithm visualizer, similar to PathFinding.js. I pulled subway data from the NYC MTA and San Francisco BART APIs and mapped the coordinates onto an HTML5 Canvas. After the user selects an origin and destination, the app uses (and animates) Breadth First Search to find the optimal path between them. \n
      Future versions will take distance and departure and arrival times into account as these are readily available with metro subway APIs.`
  },
  literail: {
    name: "LiteRail",
    longName: "Light implementation of Rails & ActiveRecord",
    github: "https://github.com/mvincent7891/lite_rail",
    url: "",
    img: "./images/literail.png",
    color: colors[3],
    skills: ["Ruby", "SQLite3"],
    description: `A lightweight framework inspired by Rails, built from the ground up. Developers can create their own LiteRail websites with functional backends.\n
    The project includes searchable and associatable modules, allowing model associations and chainable queries (via relations) just like Rails. Also included are a basic development server powered by Rack, command line model, table, and controller generation, flash and session cookie storage, and protection from forgery.`
  },
  iretain_chrome_ex: {
    name: "iRetain Chrome Extension",
    longName: "Create flashcards from anywhere on the web",
    github:
      "https://github.com/mvincent7891/iRETAIN/tree/master/chrome_extension",
    url:
      "https://chrome.google.com/webstore/detail/iretain/gbeamkiokdfmamlmmkhddfdpbmbgmkic?utm_source=gmail",
    img: "./images/ex_demo.gif",
    color: colors[4],
    skills: ["JS", "iRetain", "Chrome Extension"],
    description: `The iRetain Chrome Extension sets the iRetain flashcard app apart from all others. This extension allows users to dynamically create flash cards while browsing, as long as they are logged in to iRetain in the background. \n
      Highlight a word, right click, and select "Retain It" to view a definition. In the background, iRetain creates a flash card. Future releases will also highlight previously looked up words on the current page, as well as synonyms. Visit the Chrome web store to download the extension.`
  },
  asl: {
    name: "ASL Recognition",
    longName: "Gesture recognition using artificial neural networks",
    github: "",
    url: "https://www.youtube.com/embed/nE3gaODyV9w",
    video: "https://www.youtube.com/embed/nE3gaODyV9w",
    color: colors[5],
    skills: [
      "Matlab",
      "Computer Vision",
      "Pattern Recognition",
      "Neural Networks"
    ],
    description: `As an undergrad in EE at UWF, I led my team in the design of a gesture recognition application using Matlab. After collecting hundreds of images of American Sign Language (ASL) gestures, I was responsible for the design and implementation of various feature extraction algorithms. \n
    Some of the challenges I tackled included isolating the hand, locating fingers and building a skeleton of the hand, and edge detection and odering. In the end we were able to achieve 95% accuracy classifying images.`
  },
  hemo: {
    name: "Hemoglobe",
    longName: "Non-invasive, m-Health anemia screening system",
    github: "",
    url: "https://www.youtube.com/embed/bbVLbFUvlJc",
    video: "https://www.youtube.com/embed/bbVLbFUvlJc",
    color: colors[6],
    skills: ["PIC", "Embedded Systems", "Plethysmography", "Android"],
    description: `At Johns Hopkins' Center for Bioengineering Innovation and Design, I worked with a team of exceptional engineers to identify the need for noninvasive anemia screening in rural parts of developing countries. \n
      We designed and built field ready prototypes of a device similar to a pulse oximeter. I was primarily responsible for the integration of the different components of the system, including the mobile app, finger clip, and analog front end, as well as testing the devices in India.`
  },
  trust: {
    name: "Trust Funk Kids",
    longName: "Rock band!",
    github: "",
    url: "https://soundcloud.com/trustfunkkids/i-cant-stay",
    img: "./images/tfk.jpg",
    color: colors[7],
    skills: ["Creativity", "Relaxation", "Passion"],
    description: `Guitar has been a passion of mine for over a decade now. In the summer of 2015, a few friends and I got together to jam. What started as a weekly excuse to get together for a few beers led to the forming of the Trust Funk Kids. \n
      Check out our demo track - I Can't Stay - via Soundcloud. The band's sound has been describe as a mix of Taylor Swift, Third Eye Blind, and the Red Hot Chili Peppers - a description I'm both honored and embarrassed to acknowledge. Everyone has an outlet, and music is mine.`
  },
  asteroids: {
    name: "Asteroids and more",
    longName: "Certifications from Coursera and Rice University",
    github: "",
    url: "http://www.codeskulptor.org/#user39_8sibh26UD9_43.py",
    img: "./images/asteroids.png",
    color: colors[8],
    skills: ["Python", "HTML5 Canvas", "Object Oriented Design"],
    description: `In 2014, I started pursuing a certification in CS from Rice University via Coursera, the massive online open courses site. I collected certifications in Principles of Computing, Introduction to Interactive Programming in Python and Algorithms, among others. \n
      The courses were a great introduction to Python and even gave me the chance to design this simple video game.  Click on the link below to check it out (just press the play button in the top left corner to start the game).`
  }
};
