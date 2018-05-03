import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { API } from './../src/doctor.js';

$(document).ready(function() {
  $('#showDr').click(function() {
    let query = $('#findDr').val();
    $('#findDr').val("");
    let name = $('#findName').val();
    $('#findName').val("");
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`).then(function(response) {
      for (let i = 0; i < `${response.data.length}`; i++) {
        if (`${response.data[i]}` === null) {
          $('#output').text("Sorry, we couldn't find anyone matching those terms.");
        } else {
          $('#output').append('<h5>' + `${response.data[i].profile.first_name} ${response.data[i].profile.last_name}` + '</h5>');
          $('#output').append('<h6>' + 'Address: ' + `${response.data[i].practices[i].visit_address.street}` + '</h6>');
          // $('#output').append('<h6>' + 'Phone: ' + `${response.data[i].practices[i].phones[0].number}` + '</h6>');
          // $('#output').append('<h6>' + 'Currently accepting new patients: ' + "<b>" + `${response.data[i].practices[i].accepts_new_patients}` + "</b>" + '</h6>');
          // $('#output').append('<h6>' + 'Website: ' + `${response.data[i].practices[i].website}` + '</h6>');
        }
      }
    }).fail(function(error) {
      $('#output').text(`There was an error processing your request: ${error.responseText}`);
    });
  });
});
