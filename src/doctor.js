import $ from 'jquery';

class API {
  searchByIssue(query){
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`);
  }
  searchByName(name){
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`);
  }
}

export { API };
