
/*
  loadImage - send an XHR to receive an image
  @params url {string} url from which to fetch the image
  @returns {resolve, reject}
*/
const loadImage = url => {
    return new Promise(function(resolve, reject) {

      //Open a new XHR
      var request = new XMLHttpRequest();
      request.open('GET', url);

      // When the request loads, check whether it was successful
      request.onload = function() {
        if (request.status === 200) {
        // If successful, resolve the promise
          resolve(request.response);
        } else {
        // Otherwise, reject the promise
          reject(Error('An error occurred while loading image. error code:' + request.statusText));
        }
      };

      request.send();
    });
