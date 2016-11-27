import { projects } from './projects';

export const populateList = () => {
  Object.keys(projects).forEach(key => {
    let project = projects[key];

    let element = document.createElement('li');
    element.className = 'project-list-item';

    element.appendChild(innerDiv(project));
    element.appendChild(media(project, key));
    element.appendChild(info(project, key));
    element.appendChild(description(project, key));
    element.appendChild(lowerDiv(project));

    let link = document.createElement('a');
    link.className = 'backdrop-link';
    link.href = project.url;
    link.title = project.longName;
    element.appendChild(link);

    document.getElementById('list').appendChild(element);
  });
};

const description = (project, key) => {
  let desc = document.createElement('p');
  if (project.description) {
    desc.id = key;
    desc.innerText = project.description;
    desc.className = 'project-description hidden';
  }
  return desc;
};

const info = (project, key) => {
  let link = document.createElement('a');
  if (project.description) {
    link.className = 'info';
    link.title = `${project.name} Info`;
    let li = document.createElement('li');
    li.className = 'info';
    link.appendChild(li);
    $(link).on('mouseover', () => {
      let toHide = $(`img#${key}`);
      let iframeToHide = $(`iframe#${key}`);
      let pToHide = $(`p#${key}`);
      toHide.toggleClass('hidden');
      iframeToHide.toggleClass('hidden');
      pToHide.toggleClass('hidden');
    });
    $(link).on('mouseleave', () => {
      let toHide = $(`img#${key}`);
      let iframeToHide = $(`iframe#${key}`);
      let pToHide = $(`p#${key}`);
      toHide.toggleClass('hidden');
      iframeToHide.toggleClass('hidden');
      pToHide.toggleClass('hidden');
    });
    $(link).on('click', () => {
      let toHide = $(`img#${key}`);
      let iframeToHide = $(`iframe#${key}`);
      let pToHide = $(`p#${key}`);
      toHide.toggleClass('hidden');
      iframeToHide.toggleClass('hidden');
      pToHide.toggleClass('hidden');
    });
  }
  return link;
};

const media = (project, key) => {
  let element;
  if (project.img) {
    element = document.createElement('img');
    element.id = key;
    element.className = 'project-img';
    element.src = project.img;
    element.alt = project.longName;
  } else if (project.video) {
    element = document.createElement('iframe');
    element.id = key;
    element.className = 'project-iframe';
    element.src = project.video;
    element.frameborder = "0";
    element.width = "80%";
    element.height = "60%";
    element.alt = project.longName;
  }
  return element;

};

const lowerDiv = project => {
  let element = document.createElement('div');
  element.className = 'project-snapshot';

  let description = document.createElement('div');
  description.className = 'description';
  description.innerText = project.skills.join(', ');

  element.appendChild(description);

  let ul = document.createElement('ul');
  ul.className = 'project-links';
  if (project.url) {
    let link = document.createElement('a');
    link.className = 'go';
    link.href = project.url;
    link.title = `${project.name} Live Link`;
    let li = document.createElement('li');
    li.className = 'go';
    link.appendChild(li);
    ul.appendChild(link);
  }

  if (project.github) {
    let gitLink = document.createElement('a');
    gitLink.className = 'github';
    gitLink.href = project.github;
    gitLink.title = `${project.name} GitHub Repository`;
    let gitLi = document.createElement('li');
    gitLi.className = 'github';
    gitLink.appendChild(gitLi);
    ul.appendChild(gitLink);
  }

  element.appendChild(ul);

  return element;
};

const innerDiv = project => {
  let element = document.createElement('div');
  element.className = 'project-backdrop';
  element.innerText = project.name;
  element.style = `background-color: ${project.color}`;

  return element;
};
