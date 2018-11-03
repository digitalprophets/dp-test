import Api from './Api'

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