// Filtering verbs depending on the choice of the verbs on the first page

export function filterVerbs(data, phraseType, filteredVerbsIndexArray) {

    let filteredVerbs;
    let tense = data.data[0].tenseShort;

    if(phraseType === "easy") {

        if(tense === "present") {
            filteredVerbs = data.data.filter((obj) => obj.group === 1 && !obj.irregular);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
            
        } else if(tense === "pastcomp") {
            filteredVerbs = data.data.filter((obj) => obj.participle === "regular" && !obj.aux);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        } else if(tense === "pastimp") {
            filteredVerbs = data.data.filter((obj) => (obj.pattern === "je" || obj.pattern === "tu" || obj.pattern === "il")  && !obj.exception);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        } else if(tense === "pastimp") {
            filteredVerbs = data.data.filter((obj) => (obj.pattern === "je" || obj.pattern === "tu" || obj.pattern === "il")  && !obj.exception);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        } else if(tense === "future") {
            filteredVerbs = data.data.filter((obj) => !obj.spelling && !obj.irregular);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        } else if(tense === "subjunctive") {
            filteredVerbs = data.data.filter((obj) => !obj.irregular);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        }
    } else if(phraseType === "medium") {
        if(tense === "present") {
            filteredVerbs = data.data.filter((obj) => obj.group === 1 || obj.group === 2);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
          
        } else if(tense === "pastcomp") {
            filteredVerbs = data.data.filter((obj) => !obj.aux);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        } else if(tense === "pastimp") {
            filteredVerbs = data.data.filter((obj) => (obj.pattern === "je" || obj.pattern === "tu" || obj.pattern === "il")  && !obj.exception);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        } else if(tense === "pastimp") {
            filteredVerbs = data.data.filter((obj) => !obj.pattern === "ils"  && !obj.exception);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        } else if(tense === "future") {
            filteredVerbs = data.data.filter((obj) => !obj.irregular);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        } else if(tense === "subjunctive") {
            filteredVerbs = data.data.filter((obj) => obj.irregular || !obj.irregular);
            
            filteredVerbsIndexArray.length = 0;
            filteredVerbs.forEach((obj) => filteredVerbsIndexArray.push(obj.id-1));
        }
    } else if(phraseType === "hard") {
        filteredVerbsIndexArray.length = 0;
    }

}


