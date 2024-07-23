import emailjs from '@emailjs/browser';

import { showContactSuccessMsg, showContactFailMsg } from "./pagesetup.js";


// Initialize EmailJS

emailjs.init({
    publicKey: 'Y5Qz1lQ7G8HnUd_eX',
  });

  export function sendEmail() {
    
    const contactForm = document.querySelector(".contact-form");
    
      emailjs.sendForm('service_b247irw', 'template_34r13a2', contactForm)
        .then(() => {
          console.log('SUCCESS!');
          showContactSuccessMsg();

          }, (error) => {
          console.log('FAILED...', error);
          showContactFailMsg();
          });

  }

  