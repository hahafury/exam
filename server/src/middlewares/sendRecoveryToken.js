/* eslint-disable indent */
const nodemailer = require('nodemailer');
const ServerError = require('../errors/ServerError');
const userQueries = require('../controllers/queries/userQueries');
const hashPass = require('./hashPassMiddle');

module.exports = async (req, res, next) => {
    const foundUser = await userQueries.findUser({ email: req.body.email });
    hashPass;
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'examtest733@gmail.com',
                pass: 'qwerty123qwerty',
            },
        },
        );
          const result = await transporter.sendMail({
            from: 'Squadhelp <bladeb071@gmail.com>',
            to: `${req.body.email}`,
            subject: 'Message from Node js',
            text: ``,
            html:
              `To reset your password follow the link <strong>localhost:5000/recovery/${foundUser.recovery}</strong>`,
          });
        res.send(result);
    } catch (err) {
        next (new ServerError('Server Error on send recovery token'));
    }

};
