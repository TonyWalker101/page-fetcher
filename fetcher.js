const request = require("request");
const argv = process.argv.slice(2);
const fs = require("fs");

request(argv[0], (error, response, body) => {

  if (error) {
    console.log("Error: ", error);
  }

  console.log("Status Code: ", response.statusCode);

  fs.appendFile(argv[1], body, err => {
    if (err) {
      console.log("Issue with file appending: ", err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${argv[1]}`);
    }
  });

});