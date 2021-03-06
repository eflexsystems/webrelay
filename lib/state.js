(function() {
  var get;

  get = require('http').get;

  module.exports = function(ip, callback) {
    return get("http://" + ip + "/state.xml", function(res) {
      var received;
      received = '';
      res.on('data', function(data) {
        return received += data.toString();
      });
      return res.on('end', function() {
        return process.nextTick(function() {
          return callback(null, received);
        });
      });
    }).on('error', function(err) {
      return process.nextTick(function() {
        return callback(err, null);
      });
    });
  };

}).call(this);
