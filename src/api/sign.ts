export let login = function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    if (email === "cobantou@qq.com" && password === "123456") {
        return res.send('login success');
    }

    return res.send('login test');
};
export let logout = function (req, res, next) {
    res.send('logout test');
};

export let signUp = function (req, res, next) {
    res.send('signUp test');
};
