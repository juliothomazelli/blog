import axios from "axios";

export default class Email {
  
  async sendMessage(data){
    await axios({url: "http://localhost:3000/email/send", data: data, method: "POST"});  
  }
}