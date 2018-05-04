# Matthew Nardoni

#### _Week 7 Independent Project Assignment for Epicodus_

#### By: _**Matthew Nardoni**_

## Description

_This website will provide information about doctors in Portland, Oregon. It uses a unique API key from the Better Doctor developer site to access a database of doctors, who have been narrowed down by location, to be further narrowed down by a users search terms._ 

## Setup/Installation Requirements

* Clone repository on your local computer
* Run 'npm install' in the terminal
* Aquire unique api key from betterdoctor.com
* Save api key in new .env file as 'exports.apiKey'
* Run 'npm run start' in the terminal
* Enter terms of search on new server webpage

## Known Bugs

_Feel free to email me at [nardoni59@gmail.com](mailto:nardoni59@gmail.com) if you run into any issues or have questions, ideas or concerns._

## Technologies Used

* _HTML_
* _Node_
* _JavaScript_
* _Git_
* _GitHub_

### Specs
| Behavior | Input | Output |
| :-------------     | :------------- | :------------- |
| Program will return a doctors name in portland when searching illness | Input: "headache" | Output: "Harry" |
| Program will return a doctors name in portland when searching names| Input: "Harry" | Output: "Harry" |
| Program will return multiple doctors in portland when searching illness or name | Input: "headache" | Output: "Harry, Brooke" |
| Program will return information about doctors | Input: "headache" | Output: "Harry Jones, 1234 Dr Lane, (310)888-888, Accepting patients: true" |
| Program will return a message if no doctors are found | Input: "Gatorade" | Output: "Sorry, your search returned no results" |
| Program will return an error message for non 200 OK protocols | Input: "headache" | Output: "error 401: Authorization not granted" |





### Link
https://github.com/Maxna/doctor-api.git

### License

_This software is licensed under the MIT license_

Copyright (c) 2018 Matt Nardoni.
