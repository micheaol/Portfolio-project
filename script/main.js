const getMyElement = (param) => document.querySelector(param);

const createMyElement = (param) => document.createElement(param);

const menuDiv = createMyElement("div");
menuDiv.className = "toggle-nav";
const menuUl = createMyElement("ul");
const menuPortfolio = createMyElement("li");
menuPortfolio.textContent = "Portfolio";
const menuAbout = createMyElement("li");
menuAbout.textContent = "About";
const menuContact = createMyElement("li");
menuContact.textContent = "Contact";
const closeBtn = createMyElement("span");
closeBtn.textContent = "X";
closeBtn.id = "toggle-close";

menuUl.appendChild(menuPortfolio);
menuUl.appendChild(menuAbout);
menuUl.appendChild(menuContact);

menuDiv.appendChild(closeBtn);
menuDiv.appendChild(menuUl);

const hamburgerBtn = getMyElement(".hamburger-icon");

hamburgerBtn.addEventListener("click", () => {
  document.body.appendChild(menuDiv);
  menuDiv.style.display = "block";
  menuDiv.style.backgroundColor = "blue";
});

closeBtn.addEventListener("click", () => {
  menuDiv.style.display = "none";
});
