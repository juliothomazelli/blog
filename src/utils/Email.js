import emailjs from '@emailjs/browser';

export default class Email {
  
  sendMessage(data){
    const templateParams = {
        from_name: data.from_name,
        from_email: data.from_email,
        message: data.message
    };

    emailjs.send('service_vvqdhqb','template_cthqm97', templateParams, 'yxS6Qq-H_fDQwgNbg')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
  }
}