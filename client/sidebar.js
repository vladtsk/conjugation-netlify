//const presentMenu = document.querySelector(".present-menu");
//const presentSubmenuArray = document.querySelectorAll(".present-submenu");

// Buildng the sidebar menu dinamically

/*const sidebar = document.querySelector(".sidebar");

const practice = document.createElement("div");
sidebar.appendChild(practice);
practice.innerHTML = "<i class='fa-solid fa-puzzle-piece'></i> PRACTISE";
practice.classList.add("practice");

const learnContainer = document.createElement("div");
sidebar.appendChild(learnContainer);
learnContainer.classList.add("learnContainer");

const learn = document.createElement("div");
learnContainer.appendChild(learn);
learn.innerHTML =
  "<i class='fa-solid fa-user-graduate'></i> LEARN <i class='fa-solid fa-chevron-down'></i>";
learn.classList.add("learn");

const menuLearnContainer = document.createElement("div");
menuLearnContainer.classList.add("menuLearnContainer");
learnContainer.appendChild(menuLearnContainer);
menuLearnContainer.style.display = "none";

const introMenu = document.createElement("div");
introMenu.classList.add("introMenu");
introMenu.innerHTML = "<a href='intro.html'>Intro to verb conjugation</a>";
menuLearnContainer.appendChild(introMenu);

const presentMenuContainer = document.createElement("div");
presentMenuContainer.classList.add("presentMenuContainer");
menuLearnContainer.appendChild(presentMenuContainer);

const presentMenu = document.createElement("div");
presentMenu.classList.add("present-menu");
presentMenu.innerHTML =
  "The Present Tense <i class='fa-solid fa-chevron-down'></i>";
presentMenuContainer.appendChild(presentMenu);

// Container with submenus inside the Present Tense menu
const presentSubContainer = document.createElement("div");
presentSubContainer.classList.add("presentSubContainer");
presentMenuContainer.appendChild(presentSubContainer);
presentSubContainer.style.display = "none";

// Creating submenus for the Present Tense
const presentSubmenu1 = document.createElement("a");
presentSubmenu1.classList.add("present-submenu");
presentSubContainer.appendChild(presentSubmenu1);
presentSubmenu1.href = "present.html";
presentSubmenu1.textContent = "Intro to Present Tense";

const presentSubmenu2 = document.createElement("a");
presentSubmenu2.classList.add("present-submenu");
presentSubContainer.appendChild(presentSubmenu2);
presentSubmenu2.href = "present-group1.html";
presentSubmenu2.textContent = "Group 1";

const presentSubmenu3 = document.createElement("a");
presentSubmenu3.classList.add("present-submenu");
presentSubContainer.appendChild(presentSubmenu3);
presentSubmenu3.href = "present-group2.html";
presentSubmenu3.textContent = "Group 2";

const presentSubmenu4 = document.createElement("a");
presentSubmenu4.classList.add("present-submenu");
presentSubContainer.appendChild(presentSubmenu4);
presentSubmenu4.href = "present-group3.html";
presentSubmenu4.textContent = "Group 3";

const presentSubmenu5 = document.createElement("a");
presentSubmenu5.classList.add("present-submenu");
presentSubContainer.appendChild(presentSubmenu5);
presentSubmenu5.href = "present-irregular.html";
presentSubmenu5.textContent = "Irregular Verbs";

learn.addEventListener("click", () => {
  if (menuLearnContainer.style.display === "none") {
    menuLearnContainer.style.display = "block";
    learn.innerHTML =
      "<i class='fa-solid fa-user-graduate'></i> LEARN <i class='fa-solid fa-chevron-up'></i>";
  } else {
    menuLearnContainer.style.display = "none";

    learn.innerHTML =
      "<i class='fa-solid fa-user-graduate'></i> LEARN <i class='fa-solid fa-chevron-down'></i>";
  }
});

presentMenu.addEventListener("click", () => {
  if (presentSubContainer.style.display === "none") {
    presentSubContainer.style.display = "block";
    presentMenu.innerHTML =
      "The Present Tense <i class='fa-solid fa-chevron-up'></i>";
  } else {
    presentSubContainer.style.display = "none";
    presentMenu.innerHTML =
      "The Present Tense <i class='fa-solid fa-chevron-down'></i>";
  }
});
*/
