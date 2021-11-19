// Function takes in a URL and a file path as command line arguments and downloads the body of the URL to the file.

const request = require("request");
const argv = process.argv.slice(2);
const fs = require("fs");

request(argv[0], (error, response, body) => {
  
  if (error) {
    console.log("HTTP error encountered with site: ", error.hostname);
    process.exit();
  }

  if (response.statusCode !== 200) {
    console.log("Abnormal HTTP Status Code received: ", response.statusCode);
    console.log("Please review server response: ", response);
    process.exit();
  }

  fs.appendFile(argv[1], body, err => {
    if (err) {
      console.log("Issue encountered with file appending: ", err);
      process.exit();
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${argv[1]}`);
      process.exit();
    }
  });

});