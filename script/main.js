const getMyElement = (param) => document.querySelector(param);
const createMyElement = (param) => document.createElement(param);

const projects = [
  {
    id: 1,
    title: 'Budget App',
    tips: "A mobile web application that displays comprehensive data for your spending.",
    description:
      "A mobile web application that displays comprehensive data to track your spend. It allows you have different categories of spend.",
    projectImg: '../images/budget.PNG',
    liveVersion: 'https://check-budget-app.herokuapp.com/',
    gitRepo: 'https://github.com/micheaol/budget-app',
    techologies: ['Ruby on rails', 'React', 'Redux'],
  },

  {
    id: 2,
    title: 'Covid-19-vaccine-data-tracker',
    tips: "A mobile web application that displays comprehensive data for the novel coronavirus vaccine in Africa.",
    description:
      "A mobile web application that displays comprehensive data for the novel coronavirus vaccine in Africa. Real live data is obtained from the MMediaGroup API.",
    projectImg: '../images/covid.PNG',
    liveVersion: 'https://covid-19-vaccine-tracker-africa.netlify.app/',
    gitRepo: 'https://github.com/micheaol/covid-19-vaccine-data-tracker',
    techologies: ['React', 'Redux', 'Redux-thunk'],
  },

  {
    id: 3,
    title: 'Leaderboard game',
    tips: "Leaderboard app was built to showcase my capability of working with Javascript, webpack, and API.",
    description:
      "Leaderboard app was built to showcase my capability of working with Javascript, webpack, and API. With Leaderboard I practice fetching data from API and send data to the API. Leaderboard allows you to send data to an API and fetch data from API",
    projectImg: '../images/leaderboard_game.PNG',
    liveVersion: 'https://micheaol-leaderboard-game.netlify.app/',
    gitRepo: 'https://github.com/micheaol/Leaderboard-project',
    techologies: ['Javascript', 'webpack', 'API'],
  },
  {
    id: 4,
    title: 'To-do-App',
    tips: "To-do list app is built to practice JavaScript's Objects, Factory Functions, and Module Patterns concepts",
    description:
      "To-do list app is built to practice JavaScript's Objects, Factory Functions, and Module Patterns concepts. Built with JavaScript, CSS, and Webpack.",
    projectImg: '../images/to-do.PNG',
    liveVersion: 'https://micheaol-to-do-app.netlify.app/',
    gitRepo: 'https://github.com/micheaol/to-do-list-app',
    techologies: ['Javascript', 'CSS', 'Localstorage'],
  },

  {
    id: 5,
    title: 'Awesome book',
    tips: "The project is to build to model library app for book lovers to manage book they have/haven't read. Built with Javascript.",
    description:
      "Awesome book app was built to showcase the capability of Javascript, CSS, and HTML. The project is to build to model library app for book lovers to manage book they have/haven't read. Built with Javascript.",
    projectImg: '../images/awesome-book.PNG',
    liveVersion: 'https://micheaol.github.io/Awesome-books/',
    gitRepo: 'https://github.com/micheaol/Awesome-books',
    techologies: ['HTML', 'Bootstrap', 'Javascript'],
  },
  {
    id: 6,
    title: 'Online pizza store',
    tips: "An Online pizza store comprises a pizza restaurant menu of Three Pizza Guyzz Restaurant.",
    description:
      "Inspired by the best pizza recipes from the internet and by not claiming the recipes as their one, they share them with the users, to give them the possibility to bake their pizza at home. If internet users want to become customers, they can reserve a particular pizza for a few days, and the restaurant takes the responsibility that after the moment the customer arrives at the spot, the pizza will be ready in a maximum of 15 minutes.",
    projectImg: '../images/pizza.PNG',
    liveVersion: 'https://three-pizza-guyzz.netlify.app/',
    gitRepo: 'https://github.com/nicupop729/Three-Pizza-Guyzz-JS-Capstone',
    techologies: ['Javascript', 'Jest', 'Webpack'],
  },

];

const validH3 = getMyElement('.validate-email');
const nameInput = getMyElement('#fullname');
const form = getMyElement('form');
const input = getMyElement('#email-input');
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

const userData = [];

function User(name, email) {
  this.name = name;
  this.email = email;
}

function setLocalStorage() {
  localStorage.setItem('userData', JSON.stringify(userData));
}

function getUserData() {
  const newUser = new User(nameInput.value, input.value);
  userData.push(newUser);
  setLocalStorage();
}

function getLocalStorage() {
  const dataFromLocSt = JSON.parse(localStorage.getItem('userData'));
  if (dataFromLocSt) {
    dataFromLocSt.forEach((data) => {
      nameInput.value = data.name;
      input.value = data.email;
    });
  }
}

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

    projectDiv.backgroundImage = project.projectImg
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
      // closePopUpBtn.textContent = 'x';

      const closeImgBtn = createMyElement('img');
      closeImgBtn.src = '../images/Disabled.png';
      closePopUpBtn.appendChild(closeImgBtn);

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
  getLocalStorage();
}

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
    validH3.textContent = 'Please enter your email in lowercase';
    input.style.border = 'thin solid red';
    validH3.style.color = 'red';
  }

  function corectEmail() {
    form.submit();
  }

  if (capitalLetters.length > 0) errorMessage();
  else corectEmail();
});

form.addEventListener('submit', getUserData);

displayProjects();
