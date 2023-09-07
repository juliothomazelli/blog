import axios, {AxiosRequestConfig} from "axios";

export default class Email {
  
  async sendMessage(data){
    await axios({url: "https://getrich.click/email/send", data: data, method: "POST"});
  }
}