const getMyElement = (param) => document.querySelector(param);
const createMyElement = (param) => document.createElement(param);




const projects = [
  {
    id:1,
    title: 'Printing Data',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: "../images/sixth-img.png",
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: [
      'HTML',
      'Bootstrap',
      'Roby on Rails',
    ],
  },
  {
    id:2,
    title: 'Profesional Art',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: "../images/sixth-img.png",
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: [
      'HTML',
      'Bootstrap',
      'Roby on Rails',
    ],
  },

  {
    id:3,
    title: 'Data Counter',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: "../images/sixth-img.png",
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: [
      'HTML',
      'Bootstrap',
      'Roby on Rails',
    ],
  },
  {
    id:4,
    title: 'Printing Data',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: "../images/sixth-img.png",
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: [
      'HTML',
      'Bootstrap',
      'Roby on Rails',
    ],
  },
  {
    id:5,
    title: 'Printing Data',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: "../images/sixth-img.png",
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: [
      'HTML',
      'Bootstrap',
      'Roby on Rails',
    ],
  },
  {
    id:6,
    title: 'Printing Data',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: "../images/sixth-img.png",
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: [
      'HTML',
      'Bootstrap',
      'Roby on Rails',
    ],
  },
]




const navBar = getMyElement('.nav-bar');
const menuDiv = createMyElement('div');
menuDiv.className = 'toggle-nav';
const menuUl = createMyElement('ul');
const menuPortfolio = createMyElement('li');
menuPortfolio.textContent = 'Portfolio';
const menuAbout = createMyElement('li');
menuAbout.textContent = 'About';
const menuContact = createMyElement('li');
menuContact.textContent = 'Contact';
const closeBtn = createMyElement('span');
closeBtn.textContent = 'X';
closeBtn.id = 'toggle-close';

menuUl.appendChild(menuPortfolio);
menuUl.appendChild(menuAbout);
menuUl.appendChild(menuContact);

menuDiv.appendChild(closeBtn);
menuDiv.appendChild(menuUl);

const hamburgerBtn = getMyElement('.hamburger-icon');

hamburgerBtn.addEventListener('click', () => {
  document.body.appendChild(menuDiv);
  navBar.style.display = 'none';
  menuDiv.style.display = 'block';
  menuDiv.style.backgroundColor = '#3C3A39';
});

closeBtn.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  navBar.style.display = 'block';
});

menuPortfolio.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.location = '#projects-title';
  navBar.style.display = 'block';
});

menuAbout.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.location = '#about-section';
  navBar.style.display = 'block';
});

menuContact.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.location = '#contact-div';
  navBar.style.display = 'block';
});



function displayProjects() {
  projects.forEach(project =>{
    //Create a div:
    const projectDiv = createMyElement('div');
    projectDiv.className = 'job-item-with-btn';

    //create another div to hold the title, summary,image and tech skills
    const jobDiv = createMyElement('div');
    jobDiv.className = 'job-item-two';

    //create H1 for the title:
    const jobTitle = createMyElement('h1');
    jobTitle.className = 'job-post-title';
    jobTitle.textContent = project.title;

    //append h1 to the jobDiv:
    jobDiv.appendChild(jobTitle);

    //create another div to hold summary:
    const sumaDiv = createMyElement('div');
    sumaDiv.className = 'job-post';

    //Create a paragraphe to append to the summaDiv:
    const para = createMyElement('p');
    para.textContent = project.tips;

    //append para to job post div:
    sumaDiv.appendChild(para);

    //append SumaDiv to jobDiv:
    jobDiv.appendChild(sumaDiv);

    //create a div to hold the technologies:
    const techDiv = createMyElement('div');
    techDiv.className = 'job-tech-lang';

    //Create a ul to hold the technologies:
    const ulTech = createMyElement('ul');
    ulTech.className = 'job-tech-lang-ul';

    //Create an anchor button:
    const seeProjectBtn = createMyElement('a');
    seeProjectBtn.className = 'long-link see-jobs-btn';
    seeProjectBtn.href = '#';
    seeProjectBtn.textContent = 'See Project';

    //Create lis to pass into the ul:
    for(let counter = 0; counter < project.techologies.length; counter+=1){
      let jobLi = createMyElement('li');
      jobLi.className = 'job-item job-one';
      jobLi.textContent = project.techologies[counter];
      ulTech.appendChild(jobLi);
    }
    
    //append ul tech to techDiv:
    techDiv.appendChild(ulTech);
   
    jobDiv.appendChild(techDiv);
    projectDiv.appendChild(jobDiv);
    projectDiv.appendChild(seeProjectBtn)
    

    //we add event listener to the button:
    

    const projectSection = getMyElement('.inner-job-item-two');
    projectSection.prepend(projectDiv);

  })
}


displayProjects();