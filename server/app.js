const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')

const allowOrigin = ['https://www.mayhelp.co.il', 'http://localhost:5173']

app.use(cors())

app.use(bodyParser.json())

// Endpoint Form Contact

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bensadondavidn@gmail.com', 
        pass: 'kmiy vqec keqx cfwf'      
    }
});

app.post('/contact', (req, res)=>{
        const {lastName, firstName, indicatif, phone, message} = req.body

        const mailOptions = {
            from: 'bensadondavidn@gmail.com', 
            to: 'davidbensadon56@gmail.com, contact@mayhelp.co.il', 
            subject: `Nouveau message de ${firstName} ${lastName}`,
            text: `
            Détails du message :
    
            Nom: ${firstName} ${lastName}
            Téléphone: ${indicatif} ${phone}
            Message: ${message}
            `
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).json({message : 'Erreur lors de l\'envoi de l\'email'});
            }
            console.log('Email envoyé: ' + info.response);
            res.status(200).json({message : 'Formulaire reçu et email envoyé avec succès'});
        });
})


app.listen(4000, ()=>{
    console.log('Server is listening on 4000');
})