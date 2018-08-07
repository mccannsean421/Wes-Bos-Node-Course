exports.myMiddleware = (req, res, next) => {
    req.name = "Cormac";
    if(req.name === "Cormac") {
        throw Error('that is a stupid name');
    }
    next();
}

exports.homePage = (req, res) => {
    console.log(req.name);
    res.cookie('name', 'cormac', {maxAge: 90000});
    res.render('index');
}