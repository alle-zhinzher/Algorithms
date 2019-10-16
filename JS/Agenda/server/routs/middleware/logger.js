const logTextWithColor = require('../../lib/colors')

module.exports = (req, res, next) => {
    const logText = `${req.method} ${req.url}`
    let logColor = ''
    
    switch(req.method) {
        case "GET": logColor = "GREEN"; break;
        case "POST": logColor = "BLUE"; break;
        case "PUT": logColor = "YELLOW"; break;
        case "DELETE": logColor = "RED"; break;
        default: logColor = "BLACK"; break;
    }

    logTextWithColor(logText, logColor)
    
    next();
};