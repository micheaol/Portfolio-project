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
    const projectDiv = createMyElement('div');
    projectDiv.className = 'job-item-with-btn';

    const jobDiv = createMyElement('div');
    jobDiv.className = 'job-item-two';

    const jobTitle = createMyElement('h1');
    jobTitle.className = 'job-post-title';
    jobTitle.textContent = project.title;

    jobDiv.appendChild(jobTitle);

    const sumaDiv = createMyElement('div');
    sumaDiv.className = 'job-post';

    const para = createMyElement('p');
    para.textContent = project.tips;

    sumaDiv.appendChild(para);

    jobDiv.appendChild(sumaDiv);

    const techDiv = createMyElement('div');
    techDiv.className = 'job-tech-lang';

    const ulTech = createMyElement('ul');
    ulTech.className = 'job-tech-lang-ul';

    const seeProjectBtn = createMyElement('a');
    seeProjectBtn.className = 'long-link see-jobs-btn';
    seeProjectBtn.href = '#';
    seeProjectBtn.textContent = 'See Project';

    for (let counter = 0; counter < project.techologies.length; counter += 1) {
      const jobLi = createMyElement('li');
      jobLi.className = 'job-item job-one';
      jobLi.textContent = project.techologies[counter];
      ulTech.appendChild(jobLi);
    }

    techDiv.appendChild(ulTech);

    jobDiv.appendChild(techDiv);
    projectDiv.appendChild(jobDiv);
    projectDiv.appendChild(seeProjectBtn);

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

      popUpInnerImgDiv.style.backgroundImage = `url(${project.projectImg})`;

      const popUpInnerContDiv = createMyElement('div');
      popUpInnerContDiv.className = 'pop-up-inner-cont-div';

      const popUpDesc = createMyElement('p');
      popUpDesc.className = 'pop-up-desc';
      popUpDesc.textContent = project.description;

      const popUpBtnsDiv = createMyElement('div');
      popUpBtnsDiv.className = 'pop-up-btns-div';

      const seeIcon = createMyElement('span');
      seeIcon.className = 'see-source-icon';

      const seeLiveIcon = createMyElement('span');
      seeLiveIcon.className = 'see-live-icon';

      const seeLiveIconImg = createMyElement('img');
      seeLiveIconImg.src = '../images/gitIcon.png';

      const iconImg = createMyElement('img');
      iconImg.src = '../images/icon-see-live.png';
      seeIcon.appendChild(iconImg);
      seeLiveIcon.appendChild(seeLiveIconImg);

      const popUpSeeLiveBtn = createMyElement('a');
      popUpSeeLiveBtn.className = 'pop-up-btns';
      popUpSeeLiveBtn.href = project.liveVersion;
      popUpSeeLiveBtn.textContent = 'See Live';

      const popUpSeeSourceBtn = createMyElement('a');
      popUpSeeSourceBtn.className = 'pop-up-btns';
      popUpSeeSourceBtn.href = project.gitRepo;
      popUpSeeSourceBtn.textContent = 'See Source';

      for (let i = 0; i < project.techologies.length; i += 1) {
        const popUpTechLi = createMyElement('li');
        popUpTechLi.className = 'job-item job-one pop-up-tech-li';
        popUpTechLi.textContent = project.techologies[i];
        popUpTechUl.appendChild(popUpTechLi);
      }

      popUpBtnsDiv.appendChild(seeLiveIcon);
      popUpBtnsDiv.appendChild(seeIcon);
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

const form = getMyElement('form');
const input = getMyElement('#email-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const capitalLetters = [];

  const emailCheck = input.value.split('');
  for (let i = 0; i < emailCheck.length; i += 1) {
    if (!/[a-z]/.test(emailCheck[i]) && /[A-Z]/.test(emailCheck[i])) {
      capitalLetters.push(emailCheck[i]);
    }
  }

  function errorMessage() {
    const validH3 = getMyElement('.validate-email');
    validH3.textContent = 'Please enter your email in lowercase';
    validH3.style.color = 'red';
  }

  function corectEmail() {
    form.submit();
  }

  if (capitalLetters.length > 0) errorMessage();
  else corectEmail();
});

displayProjects();
