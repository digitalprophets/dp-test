import Api from './Api'
// TODO VELJKO ovde definisemo funkcije za komunikaciju
export default {
  register (credentials) {
    return Api().post('register', credentials)
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