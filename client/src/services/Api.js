import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`, // TODO VELJKO prvi korak u slanju danilu
  })
}
