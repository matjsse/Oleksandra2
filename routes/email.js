/**
 * Created with IntelliJ IDEA.
 * User: andrey
 * Date: 2014-02-09
 * Time: 8:31 PM
 * To change this template use File | Settings | File Templates.
 */


//Email add on
var sendgrid  = require('sendgrid')(
    process.env.SENDGRID_USERNAME,
    process.env.SENDGRID_PASSWORD,
    {api: 'smtp'}
);

var send = function(req, res) {
    if(req.body.email && req.body.message) {
        sendEmail(req.body);
        res.send("Thank you! Your email is on its way to me :)");
    } else {   //input invalid, return error message
        res.send("Please provide all details!");
    }
}

var sendEmail = function(body) {
    sendgrid.send({
        to: 'oleksandra.sydorenko@hotmail.com',
        from: body.email,
        subject: 'Oleksandra Portfolio Website Email',
        text: body.message
    }, function(err, json) {
        if (err) { return console.error(err); }
        console.log(json);
    });
}

exports.send = send;