fs = require('fs-extra')
https = require('https')
redir = require('follow-redirects')


function nulis(link, dest, callback) {
    var file = fs.createWriteStream(dest);
    https.get(link, function (response) {
        async function f(){
          await response.pipe(file);
          console.log('complete')
        }
        f()
      file.on('finish', function () {
        file.close(callback); // close() is async, call callback after close completes.
      });
      file.on('error', function (err) {
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        if (callback)
          callback(err.message);
      });
    });
  }

module.exports = {
    nulis
}