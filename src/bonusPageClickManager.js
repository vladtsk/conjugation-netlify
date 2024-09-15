// Manage menu clicks on the bonus page

export function manageBonusMenuClicks(userId, subStatus) {
  const bonus1Menu = document.querySelector(".bonus1Menu");
  const bonus1SubContainer = document.querySelector(".bonus1-subcontainer");

  const bonus2Menu = document.querySelector(".bonus2Menu");
  const bonus2SubContainer = document.querySelector(".bonus2-subcontainer");

  const bonus3Menu = document.querySelector(".bonus3Menu");
  const bonus3SubContainer = document.querySelector(".bonus3-subcontainer");

  const bonus4Menu = document.querySelector(".bonus4Menu");
  const bonus4SubContainer = document.querySelector(".bonus4-subcontainer");

  bonus1Menu.addEventListener("click", () => {
    if (bonus1SubContainer.style.display === "none") {
      bonus1SubContainer.style.display = "block";
      bonus1Menu.innerHTML = `<div><i class="fa-solid fa-book"></i>Bonus 1: Conjugation guide</div>
          <i class='fa-solid fa-circle-chevron-up'></i>`;
    } else {
      bonus1SubContainer.style.display = "none";
      bonus1Menu.innerHTML = `<div><i class="fa-solid fa-book"></i>Bonus 1: Conjugation guide</div>
          <i class="fa-solid fa-square-plus"></i>`;
    }
  });

  bonus2Menu.addEventListener("click", () => {
    if (bonus2SubContainer.style.display === "none") {
      bonus2SubContainer.style.display = "block";
      bonus2Menu.innerHTML = `<div><i class='fa-solid fa-chart-line'></i>Bonus 2: 15 of the most common French verbs.</div>
        <i class='fa-solid fa-circle-chevron-up'></i>`;
    } else {
      bonus2SubContainer.style.display = "none";
      bonus2Menu.innerHTML = `<div><i class='fa-solid fa-chart-line'></i>Bonus 2: 15 of the most common French verbs.</div>
        <i class="fa-solid fa-square-plus"></i>`;
    }
  });

  //

  bonus3Menu.addEventListener("click", () => {
    if (bonus3SubContainer.style.display === "none") {
      bonus3SubContainer.style.display = "block";
      bonus3Menu.innerHTML = `<div><i class="fa-solid fa-fire"></i>Bonus 3: Unlock the Passé composé tense.</div>
        <i class='fa-solid fa-circle-chevron-up'></i>`;
    } else {
      bonus3SubContainer.style.display = "none";
      bonus3Menu.innerHTML = `<div><i class="fa-solid fa-fire"></i>Bonus 3: Unlock the Passé composé tense.</div>
        <i class="fa-solid fa-square-plus"></i>`;
    }
  });

  //

  bonus4Menu.addEventListener("click", () => {
    if (bonus4SubContainer.style.display === "none") {
      bonus4SubContainer.style.display = "block";
      bonus4Menu.innerHTML = `<div><i class="fa-solid fa-key"></i>Bonus 4: 15 of the most common French verbs (part 2).</div>
        <i class='fa-solid fa-circle-chevron-up'></i>`;
    } else {
      bonus4SubContainer.style.display = "none";
      bonus4Menu.innerHTML = `<div><i class="fa-solid fa-key"></i>Bonus 4: 15 of the most common French verbs (part 2).</div>
        <i class="fa-solid fa-square-plus"></i>`;
    }
  });
}
