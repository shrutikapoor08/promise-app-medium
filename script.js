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
        request.responseType = 'blob';
        request.setRequestHeader('Content-Type', 'application/json');
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

};


const embedImage = url => {
    loadImage(url).then(function(result) {
        const img = new Image();
        var imageURL = window.URL.createObjectURL(result);
        img.src = imageURL;
        document.querySelector('body').appendChild(img);
    }, function(err) {
        console.log(err);
    });
}

embedImage('https://www.google.com/image.jpeg');
