import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from './doctor.js';

$(document).ready(function() {
  $('#formDr').submit(function(event) {
    event.preventDefault();
    let name = $('#findName').val();
    $('#findName').val("");
    let query = $('#findDr').val();
    $('#findDr').val("");
    let apiCall;
    apiCall = new API();
    // if (name === "" && query === "") {
    //   alert("type something");
    // }
    let doctorResult = apiCall.searchDoctor(name, query);
    doctorResult.then(function(response){
      if ( `${response.meta.total}` >= 1 && (name !== "" || query !== "")) {
        for (let i = 0; i < `${response.data.length}`; i++) {
          $('#output').append('<h5>' + `${response.data[i].profile.first_name} ${response.data[i].profile.last_name}` + '</h5>');
          $('#output').append('<h6>' + 'Address: ' + `${response.data[i].practices[0].visit_address.street}` + '</h6>');
          $('#output').append('<h6>' + 'Phone: ' + `${response.data[i].practices[0].phones[0].number}` + '</h6>');
          $('#output').append('<h6>' + 'Currently accepting new patients: ' + "<b>" + `${response.data[i].practices[0].accepts_new_patients}` + "</b>" + '</h6>');
          if (`${response.data[i].practices[0].website}` === "undefined") {
            $('#output').append('<h6>' + 'Website: No Website Listed' + '</h6><br>')
          } else {
          $('#output').append('<h6>' + 'Website: ' + `${response.data[i].practices[0].website}` + '</h6><br>');
        }
        }
      } else {
        $('#output').text("Sorry, we couldn't find anyone matching those terms.");
      }
      // for (let i = 0; i < `${response.data.practices.length}`; i++) {
      //   if (`${response.data.practices[1].website}` === undefined) {
      //     $('#output').append('<h6>' + 'No Website Listed' + '</h6>');
      //   } else {
      //     $('#output').append('<h6>' + 'Website: ' + `${response.data[i].practices[1].website}` + '</h6>');
      //   }
      // }
    }).fail(function(error){
      $('#errors').text(`There was an error processing your request: ${error.responseText}`);
    });
  });
});
