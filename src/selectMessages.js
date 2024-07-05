export function showPresentTenseMessage(verbObj, answerType, messages) {
    const infoPopupSection = document.querySelector(".infoPopupSection");
    const messageDiv = document.querySelector(".messageDiv");
    const verb = verbObj.verb;
    const group = verbObj.group;
  
    // The case of 1st group verbs
  
    if (group === 1) {
      infoPopupSection.style.display = "block";
  
      // Regular verbs
      if (!verbObj.irregular && !verbObj.reflexive) {
        messageDiv.innerHTML =
          messages.group[1].regular.incorrect.nonReflexive.message;
      }
  
      // The case of regular reflexive 1st group verbs
      else if (!verbObj.irregular && verbObj.reflexive) {
        messageDiv.innerHTML =
          messages.group[1].regular.incorrect.reflexive.message;
      }
  
      // The case of irregular 1st group verbs with a spelling change ('e' or 'é')
      else if (
        verbObj.irregular &&
        !verbObj.reflexive &&
        verbObj.spellingChange === "accent"
      ) {
        messageDiv.innerHTML =
          messages.group[1].irregular.nonReflexive.spellingChange.message;
      }
  
      // The case of irregular reflexive 1st group verbs with a spelling change ('e' or 'é')
      else if (
        verbObj.irregular &&
        verbObj.reflexive &&
        verbObj.spellingChange === "accent"
      ) {
        messageDiv.innerHTML =
          messages.group[1].irregular.reflexive.spellingChange.message;
      } else {
        console.log(
          `No verb pattern found for the verb ${verb} in the Present Tense (group 1).`
        );
        infoPopupSection.style.display = "none";
      }
    }
  
    // The case when a user forgets an accent mark that is the same as in the infinitive form,
    //which is considered as 'almost correct'.
  
    if (!verbObj.irregular && answerType === "almostWoAccent") {
      messageDiv.innerHTML = messages.group[1].regular.almost.message;
      infoPopupSection.style.display = "block";
    }
  
    // The case of 2nd group verbs
    if (group === 2) {
      messageDiv.innerHTML = messages.group[2].message;
      infoPopupSection.style.display = "block";
    }
  
    // 3rd group verbs
    if (group === 3) {
      infoPopupSection.style.display = "block";
  
      if (verbObj.pattern === "lire") {
        messageDiv.innerHTML = messages.group[3].pattern.lire.message;
      } else if (verbObj.pattern === "mettre") {
        messageDiv.innerHTML = messages.group[3].pattern.mettre.message;
      } else if (verbObj.pattern === "savoir") {
        messageDiv.innerHTML = messages.group[3].pattern.savoir.message;
      } else if (verbObj.pattern === "voir") {
        messageDiv.innerHTML = messages.group[3].pattern.voir.message;
      } else if (verbObj.pattern === "écrire") {
        messageDiv.innerHTML = messages.group[3].pattern.ecrire.message;
      } else if (verbObj.pattern === "vouloir") {
        messageDiv.innerHTML = messages.group[3].pattern.vouloir.message;
      } else if (verbObj.pattern === "attendre") {
        messageDiv.innerHTML = messages.group[3].pattern.attendre.message;
      } else if (verbObj.pattern === "devoir") {
        messageDiv.innerHTML = messages.group[3].pattern.devoir.message;
      } else if (verbObj.pattern === "prendre") {
        messageDiv.innerHTML = messages.group[3].pattern.prendre.message;
      } else if (verbObj.pattern === "boire") {
        messageDiv.innerHTML = messages.group[3].pattern.boire.message;
      } else if (verbObj.pattern === "partir") {
        messageDiv.innerHTML = messages.group[3].pattern.partir.message;
      } else if (verbObj.pattern === "vivre") {
        messageDiv.innerHTML = messages.group[3].pattern.vivre.message;
      } else if (verbObj.pattern === "venir") {
        messageDiv.innerHTML = messages.group[3].pattern.venir.message;
      } else {
        console.log(
          `No verb pattern found for the verb ${verb} in the Present Tense (group 3).`
        );
        infoPopupSection.style.display = "none";
      }
    }
  
    if (group === "irregular") {
      messageDiv.innerHTML = messages.group.irregular.message;
      infoPopupSection.style.display = "block";
    }
  }
  
  export function showPastCompMessage(verbObj, answerType, messages) {
    const infoPopupSection = document.querySelector(".infoPopupSection");
    const messageDiv = document.querySelector(".messageDiv");
    const verb = verbObj.verb;
  
    // Verbs conjugated with 'avoir'
    if (!verbObj.aux) {
      infoPopupSection.style.display = "block";
      if (verbObj.participle === "regular") {
        messageDiv.innerHTML = messages.avoir.participle.regular.message;
      } else if (verbObj.participle === "ir") {
        messageDiv.innerHTML = messages.avoir.participle.ir.message;
      } else if (verbObj.participle === "ouvrir") {
        messageDiv.innerHTML = messages.avoir.participle.ouvrir.message;
      } else if (verbObj.participle === "dre") {
        messageDiv.innerHTML = messages.avoir.participle.dre.message;
      } else if (verbObj.participle === "prendre") {
        messageDiv.innerHTML = messages.avoir.participle.prendre.message;
      } else if (verbObj.participle === "rejoindre") {
        messageDiv.innerHTML = messages.avoir.participle.rejoindre.message;
      } else if (verbObj.participle === "irregular") {
        messageDiv.innerHTML = messages.avoir.participle.irregular.message;
      } else {
        console.log(
          `No verb pattern found for the verb ${verb} in the Passé Composé ('avoir').`
        );
        infoPopupSection.style.display = "none";
      }
  
      //Verbs that can also be conjugated with 'être'
      if (verbObj.twoAux) {
        const twoAuxMessage = messages.avoir.twoAux;
        const twoAuxMessageEl = document.createElement("div");
        twoAuxMessageEl.innerHTML = twoAuxMessage;
        messageDiv.appendChild(twoAuxMessageEl);
      }
    }
  
    // Verbs conjugated with 'être'
    if (verbObj.aux && verbObj.aux === "être") {
      infoPopupSection.style.display = "block";
  
      if (verbObj.participle === "regular") {
        messageDiv.innerHTML = messages.etre.participle.regular.message;
      } else if (verbObj.participle === "ir") {
        messageDiv.innerHTML = messages.etre.participle.ir.message;
      } else if (verbObj.participle === "ouvrir") {
        messageDiv.innerHTML = messages.etre.participle.ouvrir.message;
      } else if (verbObj.participle === "dre") {
        messageDiv.innerHTML = messages.etre.participle.dre.message;
      } else if (verbObj.participle === "prendre") {
        messageDiv.innerHTML = messages.etre.participle.prendre.message;
      } else if (verbObj.participle === "rejoindre") {
        messageDiv.innerHTML = messages.etre.participle.rejoindre.message;
      } else if (verbObj.participle === "irregular") {
        messageDiv.innerHTML = messages.etre.participle.irregular.message;
      } else {
        console.log(
          `No verb pattern found for the verb ${verb} in the Passé Composé ('être').`
        );
        infoPopupSection.style.display = "none";
      }
  
      //Verbs that can also be conjugated with 'avoir'
      if (verbObj.twoAux) {
        const twoAuxMessage = messages.etre.twoAux;
        const twoAuxMessageEl = document.createElement("div");
        twoAuxMessageEl.innerHTML = twoAuxMessage;
        messageDiv.appendChild(twoAuxMessageEl);
      }
    }
  
    // The case when a user forgets an 's' or an 'e', which is considered as 'almost correct'.
  
    if (answerType === "almostPastComp" && verbObj.plural) {
      messageDiv.innerHTML = messages.almostPastComp.plural.message;
      infoPopupSection.style.display = "block";
    }
  
    if (answerType === "almostPastComp" && verbObj.fem) {
      messageDiv.innerHTML = messages.almostPastComp.fem.message;
      infoPopupSection.style.display = "block";
    }
  }

  export function showPastImpTenseMessage(verbObj, messages) {
    const infoPopupSection = document.querySelector(".infoPopupSection");
    const messageDiv = document.querySelector(".messageDiv");

    if(verbObj.pattern) {
      switch (verbObj.pattern) {
        case "je":
          messageDiv.innerHTML = messages.pattern.je;
          infoPopupSection.style.display = "block";
          break;
        case "tu":
          messageDiv.innerHTML = messages.pattern.tu;
          infoPopupSection.style.display = "block";
          break;
          case "il":
            messageDiv.innerHTML = messages.pattern.il;
            infoPopupSection.style.display = "block";
            break;
          case "nous":
            messageDiv.innerHTML = messages.pattern.nous;
            infoPopupSection.style.display = "block";
            break;
          case "vous":
            messageDiv.innerHTML = messages.pattern.vous;
            infoPopupSection.style.display = "block";
            break;
          case "ils":
            messageDiv.innerHTML = messages.pattern.ils;
            infoPopupSection.style.display = "block";
            break;
      }
    }


    if(verbObj.verb === "être" && messages.etre) {
      const etreMsgEl = document.createElement("div");
      etreMsgEl.innerHTML = messages.etre;
      messageDiv.appendChild(etreMsgEl);
    }

    if(verbObj.verb === "pleuvoir" && messages.pleuvoir) {
      const pleuvoirMsgEl = document.createElement("div");
      pleuvoirMsgEl.innerHTML = messages.pleuvoir;
      messageDiv.appendChild(pleuvoirMsgEl);
    }

    if(verbObj.exception && verbObj.exception === "ier" && messages.ier) {
      const ierMsgEl = document.createElement("div");
      ierMsgEl.innerHTML = messages.ier;
      messageDiv.appendChild(ierMsgEl);
    }

    if(verbObj.exception && verbObj.exception === "ger" && messages.ger) {
      const gerMsgEl = document.createElement("div");
      gerMsgEl.innerHTML = messages.ger;
      messageDiv.appendChild(gerMsgEl);
    }
  }

  export function showFutureTenseMessage(verbObj, messages) {
    const infoPopupSection = document.querySelector(".infoPopupSection");
    const messageDiv = document.querySelector(".messageDiv");

  

    if(verbObj.irregular && !verbObj.spelling && messages.irregular.simple) {
      messageDiv.innerHTML = messages.irregular.simple;
      infoPopupSection.style.display = "block";
    } else if(verbObj.spelling) {
      console.log(verbObj.spelling)
      if(verbObj.spelling === "eler" && messages.irregular.spelling.eler){
        messageDiv.innerHTML = messages.irregular.spelling.eler;
        infoPopupSection.style.display = "block";
      } else if(verbObj.spelling === "eter" && messages.irregular.spelling.eter){
        messageDiv.innerHTML = messages.irregular.spelling.eter;
        infoPopupSection.style.display = "block";
      } else if(verbObj.spelling === "eChange" && messages.irregular.spelling.eChange){
        messageDiv.innerHTML = messages.irregular.spelling.eChange;
        infoPopupSection.style.display = "block";
      }
    } else {
      console.log("else", verbObj.spelling)
      messageDiv.innerHTML = messages.regular;
      infoPopupSection.style.display = "block";
    }

  }

  export function showSubjunctiveMessage(verbObj, messages) {
    const infoPopupSection = document.querySelector(".infoPopupSection");
    const messageDiv = document.querySelector(".messageDiv");

    if(verbObj.irregular && messages.irregular) {
      messageDiv.innerHTML = messages.irregular;
      infoPopupSection.style.display = "block";
    } 
    
    else {
      messageDiv.innerHTML = messages.regular;
      infoPopupSection.style.display = "block";
    }

  }
  