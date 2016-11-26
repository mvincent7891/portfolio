import { projects } from './projects';

export const populateList = () => {
  Object.keys(projects).forEach(key => {
    let project = projects[key];

    let element = document.createElement('li');
    element.className = 'project-list-item';

    element.appendChild(innerDiv(project));
    element.appendChild(lowerDiv(project));

    let link = document.createElement('a');
    link.className = 'backdrop-link';
    link.href = project.url;
    link.title = project.longName;
    element.appendChild(link);

    document.getElementById('list').appendChild(element);
  });
};

const lowerDiv = project => {
  let element = document.createElement('div');
  element.className = 'project-snapshot';

  let description = document.createElement('div');
  description.className = 'description';
  description.innerText = project.skills.join(', ');

  element.appendChild(description);

  if (project.github) {
    let gitLink = document.createElement('a');
    gitLink.className = 'github';
    gitLink.href = project.github;
    gitLink.title = `${project.name} GitHub Repository}`;
    let gitLi = document.createElement('li');
    gitLi.className = 'github';
    gitLink.appendChild(gitLi);
    element.appendChild(gitLink);
  }

  return element;
};

const innerDiv = project => {
  let element = document.createElement('div');
  element.className = 'project-backdrop';
  element.innerText = project.name;
  element.style = `background-color: ${project.color}`;

  return element;
};
