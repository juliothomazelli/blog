import axios from "axios";

export default class Email {
  
  async sendMessage(data){
    await axios({url: "http://149.100.142.228:3000/email/send", data: data, method: "POST"});  
  }
}