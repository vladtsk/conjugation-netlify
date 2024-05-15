export function getPresentMessages(verb) {
  const messages = {
    group: {
      1: {
        regular: {
          incorrect: {
            reflexive: {
              message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the regular '-er' 
              conjugation pattern.</p> 
            <p>It's also a <u>reflexive</u> verb, so the reflexive pronoun 'se' 
            should change depending on the subject: "Je me...", "tu te...", "il se...", etc. </p>`,
            },
            nonReflexive: {
              message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the regular '-er' conjugation pattern.</p>`,
            },
          },
          almost: {
            message: `<p><i class="fa-solid fa-exclamation-triangle"></i> Don't forget the accent marks (é, è, û, etc.). In this case, the accent remains the same as in the infinitive form.</p>
    <p>You can use the buttons above the text field to type letters with an accent mark.</p>`,
          },
        },
        irregular: {
          reflexive: {
            spellingChange: {
              message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is one of the verbs that follow the regular '-er' 
              conjugation pattern with spelling changes: <i>e</i> or <i>é</i> <i class="fa-solid fa-arrow-right"></i> <b><i>è</i></b> 
              (except <i>'nous'</i> and <i>'vous'</i>).</p> 
              <p>It's also a <i>reflexive</i> verb, so the reflexive pronoun 'se' 
              should change depending on the subject: "Je me...", "tu te...", "il se...", etc. </p>`,
            },
          },
          nonReflexive: {
            spellingChange: {
              message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is one of the verbs that follow the regular '-er' 
              conjugation pattern with spelling changes: <i>e</i> or <i>é</i> <i class="fa-solid fa-arrow-right"></i> <b><i>è</i></b>.</p> 
              <p>The conjugations of 'nous' and 'vous' remain regular. </p>`,
            },
          },
        },
      },
      2: {
        message: `<i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the same pattern as the verbs <i>choisir</i>, <i>finir</i>,
        <i>grandir</i> with the following endings: '-is', '-is', '-it', '-issons', '-issez', '-issent'.`,
      },
      3: {
        pattern: {
          lire: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the same pattern as the verbs <i>conduire</i>, <i>dire</i>,
            <i>lire</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>
            <p>The exception is the 'vous' form of <i>'dire'</i>: vous <b>dites</b>.</p>.`,
          },
          mettre: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the same pattern as the verbs <i>battre</i>, <i>promettre</i>,
            <i>mettre</i> with the following endings: '-ts', '-ts', '-t', '-ons', '-ez', '-ent'.</p>`,
          },
          savoir: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> has the following endings in the present tense: 
            '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>However, it's still quite irregular as it doesn't exactly
            follow any common conjugation pattern.</p>`,
          },
          voir: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> has the following endings in the present tense: 
            '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>However, it's still quite irregular as it doesn't exactly
            follow any common conjugation pattern.</p>`,
          },
          ecrire: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the same pattern as the verbs <i>(s')inscrire</i>, <i>décrire</i>,
            <i>écrire</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>
            <p>Note that the 'nous', 'vous' and 'ils/elles' conjugations have a <b>'-v'</b>: 
            <i>vous écri<span class='red'>v</span>ez</i>, <i>elles s'inscri<span class='red'>v</span>ent</i>, etc.`,
          },
          vouloir: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verbs <b>pouvoir</b> and <b>vouloir</b> follow the same pattern
            with the following endings:  -x, -x, -t, -ons, -ez, -ent.</p>`,
          },
          attendre: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the same pattern as the verbs <i>répondre</i>, <i>attendre</i>,
            <i>entendre</i> with the following endings: -ds, -ds, -d, -ons, -ez, -ent.</p>`,
          },
          devoir: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verbs <b>recevoir</b> and <b>devoir</b> follow the same pattern       
            with the following endings in the present tense: 
            '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>Note that in the verb 'recevoir', 'c' changes to '<b>ç</b>'
            for the <i>je</i>, <i>tu</i> and <i>il/elle/on</i> conjugations.</p>`,
          },
          prendre: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the same pattern as the verbs <i>apprendre</i>, <i>comprendre</i>,
            <i>prendre</i> with the following endings: -ds, -ds, -d, -ons, -ez, -ent.</p>`,
          },
          boire: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> has the following endings in the present tense: 
            '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>However, it's still quite irregular as it doesn't exactly
            follow any common conjugation pattern.</p>`,
          },
          partir: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the same pattern as the verbs <i>sentir</i>, <i>mentir</i>,
            <i>sortir</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>`,
          },
          vivre: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verbs <b>vivre</b> and <b>suivre</b> follow the same conjugation pattern
            with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>
            <p>Note that the 'je' conjugation of 'suivre' in the present tense is <b>'je suis'</b>.</p>`,
          },
          venir: {
            message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> follows the same pattern as the verbs <i>tenir</i>, <i>venir</i>,
            <i>devenir</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>`,
          },
        },
      },
      irregular: {
        message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is an irregular verb. It doesn't follow a common pattern.</p>`,
      },
    },
  };
  return messages;
}

export function getPastcompMessages(verb) {
  const messages = {
    avoir: {
      participle: {
        regular: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with 'avoir' and it follows the regular '-er' pattern 
          in the <i>Passé composé</i>.</p> <p>To form the <b>past participle</b> of
          <b>-er verbs</b>, you replace the -er
          at the end of the infinitive with -é.</p>`,
          link: "",
        },
        ir: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with 'avoir' and it follows the regular '-ir' pattern 
          in the <i>Passé composé</i>.</p> <p>To form the <b>past participle</b> of
          <b>-ir verbs</b>, you usually replace the -ir
          at the end of the infinitive with <b>-i</b>.</p>`,
          link: "",
        },
        ouvrir: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with 'avoir'.</p> 
          <p>Verbs like <i><b>ouvrir</b></i>,
          <i><b>couvrir</b></i>, <i><b>découvrir</b></i>,
          <i><b>offrir</b></i>, <i><b>souffrir</b></i> form their past participle
          with <b>-ert</b> at the end.</p>`,
          link: "",
        },
        dre: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with 'avoir'.</p><p>Many verbs ending in <b>-dre</b> (<i>attendre</i>, <i>entendre</i>, <i>répondre</i>, etc)
          form their past participle by replacing the <b>-re</b> ending with <b>-u</b>.</p>`,
          link: "",
        },
        prendre: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with 'avoir'.</p>
          <p>Verbs like <i><b>prendre</b></i>, <i><b>apprendre</b></i>,
          <i><b>comprendre</b></i> form their past participle in the same way: prendre <i class="fa-solid fa-arrow-right"></i> pris,
          apprendre <i class="fa-solid fa-arrow-right"></i> appris, etc.</p>`,
          link: "",
        },
        rejoindre: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with 'avoir' in the <i>Passé composé</i>.</p>
          <p>To form the <b>past participle</b> of verbs ending in <b>-oindre</b>,
          <b>-eindre</b> and
          <b>-aindre</b> in the Passé Composé, replace the <b>-dre</b> at the end of the infinitive with
          <b>-t</b></p>`,
          link: "",
        },
        irregular: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with 'avoir' and 
          has an <u><b>irregular</b></u> past participle.</p>`,
          link: "",
        },
      },
      twoAux: `<p><i class="fa-solid fa-exclamation-triangle"></i> Note that in some cases, <b>${verb}</b> 
          is conjugated with 'être'.</p>`,
    },
    etre: {
      participle: {
        regular: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with <b>'être'</b> and it follows the regular '-er' pattern 
          in the <i>Passé composé</i>.</p> <p>To form the <b>past participle</b> of
          <b>-er verbs</b>, you replace the -er
          at the end of the infinitive with -é.</p>`,
          link: "",
        },
        ir: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with <b>'être'</b> and it follows the regular '-ir' pattern 
          in the <i>Passé composé</i>.</p> <p>To form the <b>past participle</b> of
          <b>-ir verbs</b>, you usually replace the -ir
          at the end of the infinitive with <b>-i</b>.</p>`,
          link: "",
        },
        ouvrir: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with <b>'être'</b>.</p> 
          <p>Verbs like <i><b>ouvrir</b></i>,
          <i><b>couvrir</b></i>, <i><b>découvrir</b></i>,
          <i><b>offrir</b></i>, <i><b>souffrir</b></i> form their past participle
          with <b>-ert</b> at the end.</p>`,
          link: "",
        },
        dre: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with <b>'être'</b>.</p><p>Many verbs ending in <b>-dre</b> (<i>attendre</i>, <i>entendre</i>, <i>répondre</i>, etc)
          form their past participle by replacing the <b>-re</b> ending with <b>-u</b>.</p>`,
          link: "",
        },
        prendre: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with <b>'être'</b>.</p>
          <p>Verbs like <i><b>prendre</b></i>, <i><b>apprendre</b></i>,
          <i><b>comprendre</b></i> form their past participle in the same way: prendre <i class="fa-solid fa-arrow-right"></i> pris,
          apprendre <i class="fa-solid fa-arrow-right"></i> appris, etc.</p>`,
          link: "",
        },
        rejoindre: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with <b>'être'</b>
          in the <i>Passé composé</i>.</p>
          <p>To form the <b>past participle</b> of verbs ending in <b>-oindre</b>,
          <b>-eindre</b> and
          <b>-aindre</b> in the Passé Composé, replace the <b>-dre</b> at the end of the infinitive with
          <b>-t</b></p>`,
          link: "",
        },
        irregular: {
          message: `<p><i class="fa-solid fa-bolt"></i> The verb <b>${verb}</b> is conjugated with <b>'être'</b> and 
          has an <u><b>irregular</b></u> past participle.</p>`,
          link: "",
        },
      },
      twoAux: `<p class='twoAuxMessage'><i class="fa-solid fa-exclamation-triangle"></i> Note that in some cases, <b>${verb}</b> 
          can be conjugated with 'avoir'.</p>`,
    },
    almostPastComp: {
      plural: {
        message: `<p><i class="fa-solid fa-exclamation-triangle"></i> Don't forget to add an <b>'s'</b> to match plural subjects (ils, les enfants, etc.) when a verb is conjugated 
        with 'être' in the Passé composé.</p>`,
        link: "",
      },

      fem: {
        message: `<p><i class="fa-solid fa-exclamation-triangle"></i> Don't forget to add an <b>'e'</b> to match feminine singular subjects (elle, Anna, etc.) when a verb 
        in conjugated with 'être' in the Passé composé.</p> <p> For the subjects 'je' and 'tu', 
        pay attention to hints like '(masc.)' and '(fem.)'.</p>`,
        link: "",
      },
    },
  };

  return messages;
}

export function getPastimpMessages(verb) {
  const messages = {};

  return messages;
}
