import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { doctor } from './../src/doctor.js';

$(document).ready(function() {
  $('#showDr').click(function() {
    // event.preventDefault();
    let query = $('#findDr').val();
    $('#findDr').val("");
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&skip=0&limit=5&user_key=`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#output').text(`${response.data[0].profile.first_name}`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
