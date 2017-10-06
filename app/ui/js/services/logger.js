module.exports = {
  error: function(error) {
    if (!error.response) {
      console.error(error);
    }
  }
};
