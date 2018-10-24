import Api from './Api'
// TODO VELJKO ovde definisemo funkcije za komunikaciju
export default {
  register (credentials) {
    return Api().post('gdejebote', credentials) // gdejebote je kao u api ono sto je pa /prviParamOvde
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// ovako zoves posle
// AuthenticationService.register({
//     username: 'veliki',
//     password: 'govnar'
// })