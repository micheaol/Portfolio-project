const getMyElement = (param) => document.querySelector(param);
const createMyElement = (param) => document.createElement(param);

const projects = [
  {
    id: 1,
    title: 'Printing Data',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: '../images/print-img.png',
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: ['HTML', 'Bootstrap', 'Roby on Rails'],
  },
  {
    id: 2,
    title: 'Profesional Art',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: '../images/print-img.png',
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: ['HTML', 'Bootstrap', 'Roby on Rails'],
  },

  {
    id: 3,
    title: 'Data Counter',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: '../images/pop-up-img.png',
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: ['HTML', 'Bootstrap', 'Roby on Rails'],
  },
  {
    id: 4,
    title: 'Printing Data',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: '../images/pop-up-img.png',
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: ['HTML', 'Bootstrap', 'Roby on Rails'],
  },
  {
    id: 5,
    title: 'Printing Data',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: '../images/pop-up-img.png',
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: ['HTML', 'Bootstrap', 'Roby on Rails'],
  },
  {
    id: 6,
    title: 'Printing Data',
    tips: "A daily selection of privately personalized reads; no accounts or      sign-ups required. has been the industry's standard",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    projectImg: '../images/pop-up-img.png',
    liveVersion: 'https://micheaol-portfolio.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Portfolio-project',
    techologies: ['HTML', 'Bootstrap', 'Roby on Rails'],
  },
];

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
  projects.forEach((project) => {
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
    for (let counter = 0; counter < project.techologies.length; counter += 1) {
      let jobLi = createMyElement('li');
      jobLi.className = 'job-item job-one';
      jobLi.textContent = project.techologies[counter];
      ulTech.appendChild(jobLi);
    }

    //append ul tech to techDiv:
    techDiv.appendChild(ulTech);

    jobDiv.appendChild(techDiv);
    projectDiv.appendChild(jobDiv);
    projectDiv.appendChild(seeProjectBtn);

    //we add event listener to the button:
    seeProjectBtn.addEventListener('click', () => {
      const popUpContainer = createMyElement('div');
      popUpContainer.className = 'pop-up-container';

      const innerPopUpDiv = createMyElement('div');
      innerPopUpDiv.className = 'inner-pop-up-div';

      const techLangInnerDiv = createMyElement('div');
      techLangInnerDiv.className = 'tech-lang-inner-div';

      const popUpTitle = createMyElement('h1');
      popUpTitle.className = 'pop-up-title';
      popUpTitle.textContent = project.title;
      techLangInnerDiv.appendChild(popUpTitle);

      const popUpTechUl = createMyElement('ul');
      popUpTechUl.className = 'job-tech-lang-ul pop-up-tech-ul';

      const closePopUpBtn = createMyElement('span');
      closePopUpBtn.className = 'close-pop-up-btn';
      closePopUpBtn.textContent = 'x';

      const popUpHeroDiv = createMyElement('div');
      popUpHeroDiv.className = 'pop-up-hero';

      const popUpInnerImgDiv = createMyElement('div');
      popUpInnerImgDiv.className = 'pop-up-inner-img-div';

      const popUpImg = createMyElement('img');
      popUpImg.className = 'pop-up-img';
      // popUpImg.src = project.projectImg;

      popUpInnerImgDiv.style.backgroundImage =
        'url(' + project.projectImg + ')';

      const popUpInnerContDiv = createMyElement('div');
      popUpInnerContDiv.className = 'pop-up-inner-cont-div';

      const popUpDesc = createMyElement('p');
      popUpDesc.className = 'pop-up-desc';
      popUpDesc.textContent = project.description;

      const popUpBtnsDiv = createMyElement('div');
      popUpBtnsDiv.className = 'pop-up-btns-div';

      const popUpSeeLiveBtn = createMyElement('a');
      popUpSeeLiveBtn.className = 'pop-up-btns';
      popUpSeeLiveBtn.textContent = 'See Live';
      popUpSeeLiveBtn.href = project.liveVersion;

      const popUpSeeSourceBtn = createMyElement('a');
      popUpSeeSourceBtn.className = 'pop-up-btns';
      popUpSeeSourceBtn.textContent = 'See Source';
      popUpSeeSourceBtn.href = project.gitRepo;

      for (let i = 0; i < project.techologies.length; i += 1) {
        const popUpTechLi = createMyElement('li');
        popUpTechLi.className = 'job-item job-one pop-up-tech-li';
        popUpTechLi.textContent = project.techologies[i];
        popUpTechUl.appendChild(popUpTechLi);
      }

      popUpBtnsDiv.appendChild(popUpSeeLiveBtn);
      popUpBtnsDiv.appendChild(popUpSeeSourceBtn);
      popUpInnerImgDiv.appendChild(popUpImg);
      popUpDesc.appendChild(popUpBtnsDiv);
      popUpInnerContDiv.appendChild(popUpDesc);
      popUpHeroDiv.appendChild(popUpInnerImgDiv);
      popUpInnerContDiv.appendChild(popUpBtnsDiv);
      popUpHeroDiv.appendChild(popUpInnerContDiv);
      techLangInnerDiv.appendChild(popUpTechUl);
      innerPopUpDiv.appendChild(closePopUpBtn);
      innerPopUpDiv.appendChild(techLangInnerDiv);

      closePopUpBtn.addEventListener('click', () => {
        popUpContainer.style.display = 'none';
      });

      innerPopUpDiv.appendChild(popUpHeroDiv);
      popUpContainer.appendChild(innerPopUpDiv);
      document.body.appendChild(popUpContainer);
    });

    const projectSection = getMyElement('.inner-job-item-two');
    projectSection.appendChild(projectDiv);
  });
}

displayProjects();
