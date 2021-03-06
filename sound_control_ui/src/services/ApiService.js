const axios = require('axios').default;

const PORT = 5000;
const URL = 'http://192.168.0.23:' + PORT;
const headers = {'Content-Type': 'application/json', 'Content-Type': 'text/html; charset=utf-8' }
const timeout = 1000

class ApiService {
  constructor(baseUrl) {
    this.axios  = axios.create({
      baseURL: baseUrl || URL,
      timeout: timeout,
      headers: headers
    });
  }
    
    get(path, params) {
      return (
        this.axios( {          
          method: 'get',
          url: path,          
          params: params,
          timeout: timeout,
        } )  
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

export const apiConstructor = function(baseUrl) {
  return new ApiService(baseUrl)
}