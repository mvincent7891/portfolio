/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _initialize = __webpack_require__(1);
	
	document.addEventListener('DOMContentLoaded', function () {
	  (0, _initialize.populateList)();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.populateList = undefined;
	
	var _projects = __webpack_require__(2);
	
	var populateList = exports.populateList = function populateList() {
	  Object.keys(_projects.projects).forEach(function (key) {
	    var project = _projects.projects[key];
	
	    var element = document.createElement('li');
	    element.className = 'project-list-item';
	
	    element.appendChild(innerDiv(project));
	    element.appendChild(lowerDiv(project));
	
	    var link = document.createElement('a');
	    link.className = 'backdrop-link';
	    link.href = project.url;
	    link.title = project.longName;
	    element.appendChild(link);
	
	    document.getElementById('list').appendChild(element);
	  });
	};
	
	var lowerDiv = function lowerDiv(project) {
	  var element = document.createElement('div');
	  element.className = 'project-snapshot';
	
	  var description = document.createElement('div');
	  description.className = 'description';
	  description.innerText = project.skills.join(', ');
	
	  element.appendChild(description);
	
	  if (project.github) {
	    var gitLink = document.createElement('a');
	    gitLink.className = 'github';
	    gitLink.href = project.github;
	    gitLink.title = project.name + ' GitHub Repository}';
	    var gitLi = document.createElement('li');
	    gitLi.className = 'github';
	    gitLink.appendChild(gitLi);
	    element.appendChild(gitLink);
	  }
	
	  return element;
	};
	
	var innerDiv = function innerDiv(project) {
	  var element = document.createElement('div');
	  element.className = 'project-backdrop';
	  element.innerText = project.name;
	  element.style = 'background-color: ' + project.color;
	
	  return element;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var colors = ['#F57C00', '#C2185B', '#303F9F', '#E64A19', '#0097A7', '#1976D2', '#D32F2F', '#FFA000', '#0288D1', '#FBC02D', '#7B1FA2', '#512DA8'];
	
	var projects = exports.projects = {
	  scalable: {
	    name: 'Scalable',
	    longName: 'Guitar application',
	    github: 'https://www.github.com/mvincent7891/scalable/',
	    url: 'https://mvincent7891.github.io/scalable/',
	    img: './images/scalable.png',
	    color: colors[0],
	    skills: ['React', 'Redux', 'JS', 'jQuery', 'HTML5 Canvas'],
	    description: 'Theoretically, Scalable is an app meant to help guitarists visualize the fretboard. Practically, it is a project that allowed me to focus on something I\'m passionate about while sharpening my React and Redux skillz. This is very much a work in progress, but its also functional at the moment.'
	  },
	  iRetain: {
	    name: 'iRetain',
	    longName: 'Full stack Rails app',
	    github: 'https://www.github.com/mvincent7891/iretain/',
	    url: 'http://www.iretain.io',
	    img: './images/iretain.png',
	    color: colors[1],
	    skills: ['Rails', 'React', 'Redux', 'JS', 'Postgres'],
	    description: 'iRetain is a full-stack web app used for studying flash cards, inspired by Brainscape. It utilizes Ruby on Rails and a PostgreSQL database on the backend, and React.js with a Redux architectural framework on the frontend. I built the MVP (from database to front end) in just 10 days. The project\'s highlight feature is a Chrome extension (also called iRetain) that allows the dynamic creation of flash cards from anywhere on the web.'
	  },
	  tranist: {
	    name: 'Transit PathFinder',
	    longName: 'Algorithm visualizer',
	    github: 'https://www.github.com/mvincent7891/bart_art/',
	    url: 'https://mvincent7891.github.io/bart_art/',
	    img: './images/transit.gif',
	    color: colors[2],
	    skills: ['HTML5 Canvas', 'JS', 'jQuery', 'MTA & BART APIs'],
	    description: 'Transit PathFinder is an algorithm visualizer, similar to PathFinding.js. I pulled subway data from the NYC MTA and San Francisco BART APIs and mapped the coordinates onto an HTML5 Canvas. After the user selects an origin and destination, the app uses (and animates) Breadth First Search to find the optimal path between them. Future versions will take distance and departure and arrival times into account as these are readily available with metro subway APIs. The app utilizes jQuery for DOM manipulation and pure HTML5 Canvas and CSS for animation and styling.'
	  },
	  literail: {
	    name: 'LiteRail',
	    longName: 'Light implementation of Rails & ActiveRecord',
	    github: 'https://github.com/mvincent7891/lite_rail',
	    url: 'https://github.com/mvincent7891/lite_rail',
	    img: './images/literail.png',
	    color: colors[3],
	    skills: ['Ruby', 'MySQL'],
	    description: 'LiteRail is a lightweight framework inspired by Rails, with its own version of ActiveRecord, built from the ground up. Developers can download the skeleton from GitHub and follow along with the README to create their very own LiteRail websites with functional backends. The project includes searchable and associatable modules, allowing model associations and chainable queries (via relations) just like Rails. Also included are a basic development server powered by Rack, command line model, table, and controller generation, flash and session cookie storage, and protection from forgery.'
	  },
	  iretain_chrome_ex: {
	    name: 'iRetain Chrome Extension',
	    longName: 'Create flashcards from anywhere on the web',
	    github: 'https://github.com/mvincent7891/iRETAIN/tree/master/chrome_extension',
	    url: 'https://chrome.google.com/webstore/detail/iretain/gbeamkiokdfmamlmmkhddfdpbmbgmkic?utm_source=gmail',
	    img: 'ex_demo.gif',
	    color: colors[4],
	    skills: ['JS', 'iRetain', 'Chrome Extension'],
	    description: ''
	  },
	  asl: {
	    name: 'ASL Recognition',
	    longName: 'Algorithm Visualizer',
	    github: '',
	    url: '',
	    img: '',
	    color: colors[5],
	    skills: [],
	    description: ''
	  },
	  transit1: {
	    name: 'Transit PathFinder',
	    longName: 'Algorithm Visualizer',
	    github: '',
	    url: '',
	    img: '',
	    color: colors[6],
	    skills: [],
	    description: ''
	  },
	  transit2: {
	    name: 'Transit PathFinder',
	    longName: 'Algorithm Visualizer',
	    github: '',
	    url: '',
	    img: '',
	    color: colors[7],
	    skills: [],
	    description: ''
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map