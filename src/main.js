import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from './../src/doctor.js';

$(document).ready(function() {
  $('#showDr').click(function() {
    // event.preventDefault();
    let query = $('#findDr').val();
    $('#findDr').val("");
    let name = $('#findName').val();
    $('#findName').val("");
    // let api_Key = $(process.env.apiKey);
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        for (var i = 0; i < `${response.data.length}`; i++) {
        $('#output').append('<h5>' + `${response.data[i].profile.first_name} ${response.data[i].profile.last_name}` + '</h5>');
        $('#output').append('<h6>'+'Address: ' + `${response.data[i].practices[i].visit_address.street}`+'</h6>');
        $('#output').append('<h6>'+'Phone: ' + `${response.data[i].practices[i].phones[0].number}`+'</h6>');
        $('#output').append('<h6>'+'Currently accepting new patients: ' +"<b>"+ `${response.data[i].practices[i].accepts_new_patients}`+"</b>"+'</h6>');
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
