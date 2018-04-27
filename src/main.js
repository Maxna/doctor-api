import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { doctor } from './../src/doctor.js';
require('Dotenv').config();

$(document).ready(function() {
  $('#showDr').click(function() {
    // event.preventDefault();
    let query = $('#findDr').val();
    $('#findDr').val("");
    var apiKey = process.env.apiKey;
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&skip=0&limit=5&user_key=apiKey`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#output').append('<h5>'+`${response.data[0].profile.first_name}`+'</h5>');
        $('#output').append('<h5>'+`${response.data[0].profile.last_name}`+'</h5>');
        $('#output').append(`${response.data[0].practices[0].visit_address.street}`);
        $('#output').append(`${response.data[0].practices[0].phones[0].number}`);
        $('#output').append(`${response.data[0].practices[0].accepts_new_patients}`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
