import axios from 'axios';

const apiWeather = axios.create({
  baseURL: "http://apiadvisor.climatempo.com.br/api/v1/forecast/locale",
});

export default apiWeather;

const apiSearch = axios.create({
  baseURL: "http://apiadvisor.climatempo.com.br/api/v1/locale/city"
})

const token = "1507edddb8ba9bd054906bdc19779215"

export{token, apiSearch}