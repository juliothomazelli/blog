import axios, {AxiosRequestConfig} from "axios";

export default class Email {
  
  async sendMessage(asdas){
    let data = JSON.stringify({
      "name": "Maria Gabriela",
      "email": "teste@testando.com",
      "message": "Estou mandando essa mensagem para informar que estou entrando em contato"
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://149.100.142.228:3000/email/send',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  }
}