const axios = require('axios').default;

const PORT = 5000;
const URL = 'http://192.168.0.17:' + PORT;
const headers = {'Content-Type': 'application/json', 'Content-Type': 'text/html; charset=utf-8' }
const timeout = 1000

class ApiService {
  constructor(){
    this.axios  = axios.create({
      baseURL: URL,
      timeout: timeout,
      headers: headers
    });
  }
    
    get(path, params) {
      return (
        this.axios( {          
          method: 'put',
          url: path,          
          params: params,
          timeout: timeout,
        })  
      );
    }

    put(path,params,data) {
      return(
       this.axios( {
          method: 'put',
          url: path,          
          params: params,
          data: data,          
        })
      );      
    }

}

export default new ApiService();