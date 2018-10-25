import Api from './Api'

export default {
  getAllProducts () { // ovo bi trebalo da se zove index () po nekom standardu
    return Api().get('products')
  }
}
