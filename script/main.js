const getMyElement = (param) => document.querySelector(param);

const createMyElement = (param) => document.createElement(param);

//Get navBar:

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
