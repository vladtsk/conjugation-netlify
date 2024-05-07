const presentMenu = document.querySelector(".present-menu");
const presentSubcontainer = document.querySelector(".present-subcontainer");

const pastMenu = document.querySelector(".past-menu");
const pastSubcontainer = document.querySelector(".past-subcontainer");
console.log(pastSubcontainer);

const menuItemsInfo = [
  {
    tense: "The Present Tense",
    menu: presentMenu,
    subContainer: presentSubcontainer,
    icon: "fa-calendar-check",
  },
  {
    tense: 'The Past Tense "Passé composé"',
    menu: pastMenu,
    subContainer: pastSubcontainer,
    icon: "fa-compass",
  },
];

const calendar = document.querySelector(".fa-calendar-check");
for (let i = 0; i < menuItemsInfo.length; i++) {
  menuItemsInfo[i].menu.addEventListener("click", () => {
    if (menuItemsInfo[i].subContainer.style.display === "none") {
      menuItemsInfo[i].subContainer.style.display = "flex";
      menuItemsInfo[
        i
      ].menu.innerHTML = `<div class='present-line'><i class='fa-regular ${menuItemsInfo[i].icon}'></i>
    ${menuItemsInfo[i].tense}</div> <i class='fa-solid fa-circle-chevron-up'></i>
</div>`;
      menuItemsInfo[i].menu.classList.add("select");
    } else {
      menuItemsInfo[i].subContainer.style.display = "none";
      menuItemsInfo[
        i
      ].menu.innerHTML = `<div class="present-line"><i class="fa-regular ${menuItemsInfo[i].icon}"></i>
    ${menuItemsInfo[i].tense}</div> <i class="fa-solid fa-square-plus"></i>
</div>`;
      menuItemsInfo[i].menu.classList.remove("select");
    }
  });
}
/*
presentMenu.addEventListener("click", () => {
  if (presentSubcontainer.style.display === "none") {
    presentSubcontainer.style.display = "block";
    presentMenu.innerHTML = `<div class='present-line'><i class='fa-regular fa-calendar-check'></i>
    The Present Tense</div> <i class='fa-solid fa-circle-chevron-up'></i>
</div>`;
  } else {
    presentSubcontainer.style.display = "none";
    presentMenu.innerHTML = `<div class="present-line"><i class="fa-regular fa-calendar-check"></i>
    The Present Tense</div> <i class="fa-solid fa-square-plus"></i>
</div>`;
  }
});
*/
