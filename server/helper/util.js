var STATUS_OK = 0;
var STATUS_ERR = 1;
// var STATUS_EMPTY = 2;
var isArray = (arr) => {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

module.exports = {
  format (err, data) {
    if (err) {
      return {
        status: STATUS_ERR,
        msg: err.toString()
      };
    }
    var resultType = typeof (data);
    if (resultType === 'object' || resultType === 'string') {
      return {
        status: STATUS_OK,
        data
      };
    } else {
      return {
        status: STATUS_ERR,
        msg: 'result格式不正确'
      };
    }
  }
};
