import $ from 'jquery';

class API {
  searchByIssue(query){
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=or-portland&skip=0&limit=5&user_key=${process.env.exports.apiKey}`)
  }
  searchByName(name){
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=or-portland&skip=0&limit=5&user_key=${process.env.exports.apiKey}`)
  }
}

export { API };
