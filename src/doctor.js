import $ from 'jquery';

class API {
  searchDoctor(name, query){
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`);
  }
}

export { API };
