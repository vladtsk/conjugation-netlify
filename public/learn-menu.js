export function manageLearnMenu(userId, subStatus) {


const presentMenu = document.querySelector(".present-menu");
const presentSubcontainer = document.querySelector(".present-subcontainer");

const pastMenu = document.querySelector(".past-menu");
const pastSubcontainer = document.querySelector(".past-subcontainer");

const futureMenu = document.querySelector(".future-menu");
const futureSubcontainer = document.querySelector(".future-subcontainer");

const subjunctiveMenu = document.querySelector(".subjunctive-menu");
const subjunctiveSubcontainer = document.querySelector(".subjunctive-subcontainer");


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

if(userId && subStatus === "active") {
  pastMenu.addEventListener("click", () => {
    if (pastSubcontainer.style.display === "none") {
      pastSubcontainer.style.display = "block";
      pastMenu.innerHTML = `<div class='past-line'><i class='fa-regular fa-compass'></i>
      The Past Tense "Passé composé"</div> <i class='fa-solid fa-circle-chevron-up'></i>
  </div>`;
    } else {
      pastSubcontainer.style.display = "none";
      pastMenu.innerHTML = `<div class="past-line"><i class="fa-regular fa-compass"></i>
      The Past Tense "Passé composé"</div> <i class="fa-solid fa-square-plus"></i>
  </div>`;
    }
  });
}

if(userId && subStatus === "active") {
  futureMenu.addEventListener("click", () => {
    if (futureSubcontainer.style.display === "none") {
      futureSubcontainer.style.display = "block";
      futureMenu.innerHTML = `<div class='future-line'><i class="fa-solid fa-chess-rook"></i>
      The simple future tense (le futur simple)</div> <i class='fa-solid fa-circle-chevron-up'></i>
  </div>`;
    } else {
      futureSubcontainer.style.display = "none";
      futureMenu.innerHTML = `<div class="future-line"><i class="fa-solid fa-chess-rook"></i>
      The simple future tense (le futur simple)</div> <i class="fa-solid fa-square-plus"></i>
  </div>`;
    }
  });
}

if(userId && subStatus === "active") {
  subjunctiveMenu.addEventListener("click", () => {
    if (subjunctiveSubcontainer.style.display === "none") {
      subjunctiveSubcontainer.style.display = "block";
      subjunctiveMenu.innerHTML = `<div class='subjunctive-line'><i class="fa-solid fa-mountain"></i>
      The French subjunctive (le subjonctif)</div> <i class='fa-solid fa-circle-chevron-up'></i>
  </div>`;
    } else {
      subjunctiveSubcontainer.style.display = "none";
      subjunctiveMenu.innerHTML = `<div class="subjunctive-line"><i class="fa-solid fa-mountain"></i>
      The French subjunctive (le subjonctif)</div> <i class="fa-solid fa-square-plus"></i>
  </div>`;
    }
  });
}


}

