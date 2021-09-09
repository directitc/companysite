const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const cors = require('cors');
const port = process.env.PORT || 5000;
const creds = require('./config');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

const contactEmail = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 993,
    // secure: false,
    auth: {
        user: creds.USER,
        pass: creds.PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to Send');
    }
});

router.post('/send', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    console.log('name', name);
    console.log('email', email);
    console.log('message', message);
    const mail = {
        from: name,
        to: 'colton.mcewen@directitc.com',
        subject: 'Contact Form Submission',
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: 'ERROR' });
        } else {
            res.json({ status: 'Message Sent' });
        }
    });
});
