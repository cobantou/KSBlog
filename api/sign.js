var login = function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
console.log(1)
    if(email==="cobantou@qq.com" && password==="123456"){
      return  res.send('login success');
    }

    return res.send('login test');
};

var logout = function (req, res, next) {
    res.send('logout test');
};

var signUp = function (req, res, next) {
    res.send('signUp test');
};

exports.login = login;
exports.logout = logout;
exports.signUp = signUp;
