// Function takes in a URL and a file path as command line arguments and downloads the body of the URL to the file.

const request = require("request");
const argv = process.argv.slice(2);
const fs = require("fs");

request(argv[0], (error, response, body) => {

  console.log("Status Code: ", response.statusCode);

  if (error) {
  console.log("Error: ", error);
  };

  fs.appendFile(argv[1], body, err => {
    if (err) {
      console.log("Issue with file appending: ", err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${argv[1]}`);
    }
  });

});