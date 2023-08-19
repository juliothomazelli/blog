import axios, {AxiosRequestConfig} from "axios";

export default class Email {
  
  async sendMessage(data){
    // await axios({url: "http://localhost:3000/email/send", data: data, method: "POST"});
    await axios("http://149.100.142.228:3000/email/send", { method: "POST", data: data });
  }
}