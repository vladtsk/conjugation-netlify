export function getMessages(verb) {
  const messages = {
    group: {
      1: {
        regular: {
          incorrect: {
            reflexive: {
              message: `<p>The verb <b>${verb}</b> follows the regular '-er' conjugation pattern.</p> 
            <p>It's also a reflexive verb, so the reflexive pronoun 'se' 
            should change depending on the subject: "Je me...", "tu te...", "il se...", etc. </p>`,
            },
            nonReflexive: {
              message: `<p>The verb <b>${verb}</b> follows the regular '-er' conjugation pattern.</p>`,
            },
          },
          almost: {
            message: `<p>Don't forget the accent marks (é, è, û, etc.). In this case, the accent remains the same as in the infinitive form.</p>
    <p>You can use the buttons above the text field to type letters with an accent mark.</p>`,
          },
        },
        irregular: {
          reflexive: {
            spellingChange: {
              message: `<p>The verb <b>${verb}</b> is one of the verbs that follow the regular '-er' 
              conjugation pattern with spelling changes: 'e' or 'é' => 'è'.</p> 
              <p>The conjugations of 'nous' and 'vous' remain regular. </p>
              <p>It's also a reflexive verb, so the reflexive pronoun 'se' 
              should change depending on the subject: "Je me...", "tu te...", "il se...", etc. </p>`,
            },
          },
          nonReflexive: {
            spellingChange: {
              message: `<p>The verb <b>${verb}</b> is one of the verbs that follow the regular '-er' 
              conjugation pattern with spelling changes: 'e' or 'é' => 'è'.</p> 
              <p>The conjugations of 'nous' and 'vous' remain regular. </p>`,
            },
          },
        },
      },
      2: {
        message: `The verb <b>${verb}</b> follows the same pattern as the verbs <i>choisir</i>, <i>finir</i>,
        <i>grandir</i> with the following endings: '-is', '-is', '-it', '-issons', '-issez', '-issent'.`,
      },
      3: {
        pattern: {
          lire: {
            message: `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>conduire</i>, <i>dire</i>,
            <i>lire</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>
            <p>The exception is the 'vous' form of <i>'dire'</i>: vous <b>di<span class="red">tes</span></b>.</p>.`,
          },
          mettre: {
            message: `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>battre</i>, <i>promettre</i>,
            <i>mettre</i> with the following endings: '-ts', '-ts', '-t', '-ons', '-ez', '-ent'.</p>`,
          },
          savoir: {
            message: `<p>The verb <b>${verb}</b> has the following endings in the present tense: 
            '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>However, it's still quite irregular as it doesn't exactly
            follow any common conjugation pattern.</p>`,
          },
          voir: {
            message: `<p>The verb <b>${verb}</b> has the following endings in the present tense: 
            '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>However, it's still quite irregular as it doesn't exactly
            follow any common conjugation pattern.</p>`,
          },
          ecrire: {
            message: `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>(s')inscrire</i>, <i>décrire</i>,
            <i>écrire</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>
            <p>Note that the 'nous', 'vous' and 'ils/elles' conjugations have a <b>'-v'</b>: 
            <i>vous écri<span class='red'>v</span>ez</i>, <i>elles s'inscri<span class='red'>v</span>ent</i>, etc.`,
          },
          vouloir: {
            message: `<p>The verbs <b>pouvoir</b> and <b>vouloir</b> follow the same pattern
            with the following endings:  -x, -x, -t, -ons, -ez, -ent.</p>`,
          },
          attendre: {
            message: `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>répondre</i>, <i>attendre</i>,
            <i>entendre</i> with the following endings: -ds, -ds, -d, -ons, -ez, -ent.</p>`,
          },
          devoir: {
            message: `<p>The verbs <b>recevoir</b> and <b>devoir</b> follow the same pattern       
            with the following endings in the present tense: 
            '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>Note that in the verb 'recevoir', 'c' changes to '<b>ç</b>'
            for the <i>je</i>, <i>tu</i> and <i>il/elle/on</i> conjugations.</p>`,
          },
          prendre: {
            message: `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>apprendre</i>, <i>comprendre</i>,
            <i>prendre</i> with the following endings: -ds, -ds, -d, -ons, -ez, -ent.</p>`,
          },
          boire: {
            message: `<p>The verb <b>${verb}</b> has the following endings in the present tense: 
            '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>However, it's still quite irregular as it doesn't exactly
            follow any common conjugation pattern.</p>`,
          },
          partir: {
            message: `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>sentir</i>, <i>mentir</i>,
            <i>sortir</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>`,
          },
          vivre: {
            message: `<p>The verbs <b>vivre</b> and <b>suivre</b> follow the same conjugation pattern
            with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>
            <p>Note that the 'je' conjugation of 'suivre' in the present tense is 'je suis'.</p>`,
          },
          venir: {
            message: `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>tenir</i>, <i>venir</i>,
            <i>devenir</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>`,
          },
        },
      },
      irregular: {
        message: `<p>The verb <b>${verb}</b> is an irregular verb. It doesn't follow a common pattern.</p>`,
      },
    },
  };
  return messages;
}
