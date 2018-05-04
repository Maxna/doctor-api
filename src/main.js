import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from './../src/doctor.js';

$(document).ready(function() {
  let apiCall;
  apiCall = new API();
  $('#formDr').submit(function(event) {
    event.preventDefault();
    let query;
    query = $('#findDr').val();
    // $('#findDr').val("");
    let issueResult = apiCall.searchByIssue(query);
    issueResult.then(function(response){
      for (let i = 0; i < `${response.data.length}`; i++) {
        // if (`${response.data[i]}` === undefined) {
        //   $('#output').text("Sorry, we couldn't find anyone matching those terms.");
        // } else {
        $('#output').append('<h5>' + `${response.data[i].profile.first_name} ${response.data[i].profile.last_name}` + '</h5>');
        $('#output').append('<h6>' + 'Address: ' + `${response.data[i].practices[0].visit_address.street}` + '</h6>');
        $('#output').append('<h6>' + 'Phone: ' + `${response.data[i].practices[0].phones[0].number}` + '</h6>');
        $('#output').append('<h6>' + 'Currently accepting new patients: ' + "<b>" + `${response.data[i].practices[0].accepts_new_patients}` + "</b>" + '</h6>');
        $('#output').append('<h6>' + 'Website: ' + `${response.data[i].practices[1].website}` + '</h6>');
        // }
      }
      // if (`${response.data.length}` === undefined) {
      //   $('#output').text("Sorry, we couldn't find anyone matching those terms.");
      // }

      // for (let i = 0; i < `${response.data.practices.length}`; i++) {
      //   if (`${response.data.practices[1].website}` === undefined) {
      //     $('#output').append('<h6>' + 'No Website Listed' + '</h6>');
      //   } else {
      //     $('#output').append('<h6>' + 'Website: ' + `${response.data[i].practices[1].website}` + '</h6>');
      //   }
      // }
    }).fail(function(error){
      $('#output').text(`There was an error processing your request: ${error.responseText}`);
    });

    let name;
    name = $('#findName').val();
    // $('#findName').val("");
    let nameResult = apiCall.searchByName(name);
    nameResult.then(function(response){
      for (let i = 0; i < `${response.data.length}`; i++) {
        // if (`${response.data[i]}` === undefined) {
        //   $('#output').text("Sorry, we couldn't find anyone matching those terms.");
        // } else {
        $('#output').append('<h5>' + `${response.data[i].profile.first_name} ${response.data[i].profile.last_name}` + '</h5>');
        $('#output').append('<h6>' + 'Address: ' + `${response.data[i].practices[0].visit_address.street}` + '</h6>');
        $('#output').append('<h6>' + 'Phone: ' + `${response.data[i].practices[0].phones[0].number}` + '</h6>');
        $('#output').append('<h6>' + 'Currently accepting new patients: ' + "<b>" + `${response.data[i].practices[0].accepts_new_patients}` + "</b>" + '</h6>');
        $('#output').append('<h6>' + 'Website: ' + `${response.data[i].practices[1].website}` + '</h6>');
        // }
      }
      // if (`${response.data.length}` === undefined) {
      //   $('#output').text("Sorry, we couldn't find anyone matching those terms.");
      // }

      // for (let i = 0; i < `${response.data.practices.length}`; i++) {
      //   if (`${response.data.practices[1].website}` === undefined) {
      //     $('#output').append('<h6>' + 'No Website Listed' + '</h6>');
      //   } else {
      //     $('#output').append('<h6>' + 'Website: ' + `${response.data[i].practices[1].website}` + '</h6>');
      //   }
      // }
    }).fail(function(error){
      $('#output').text(`There was an error processing your request: ${error.responseText}`);
    });
  });
});
