import $ from 'jquery';
import 'bootstrap';
// import { doctor } from './../src/doctor.js';

$(document).ready(function() {
  $('#findDoctor').click(function() {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=sore%20throat&location=or-portland&skip=0&limit=10&user_key=`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#output').prepend(`${response.data[0].practices}`)
      },
      error: function() {
        $('#output').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
