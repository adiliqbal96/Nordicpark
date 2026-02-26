const transporter = require('../config/mailer');

exports.sendContactEmail = async (req, res) => {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Navn, e-mail og besked skal udfyldes.' });
    }

    const mailOptions = {
        from: '"NordicPark" <onboarding@resend.dev>',
        to: 'Info@nordicpark.eu',
        subject: `Ny kontakthenvendelse fra: ${name}`,
        text: `
      Ny kontakthenvendelse modtaget fra hjemmesiden:
      
      Navn: ${name}
      E-mail: ${email}
      Virksomhed: ${company || 'Ikke angivet'}
      
      Besked:
      ${message}
    `,
        html: `
      <h3>Ny kontakthenvendelse modtaget fra hjemmesiden:</h3>
      <p><strong>Navn:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Virksomhed:</strong> ${company || 'Ikke angivet'}</p>
      <p><strong>Besked:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'Din besked er blevet sendt. Vi vender tilbage hurtigst muligt.' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Der opstod en fejl. Prøv venligst igen senere.' });
    }
};

exports.sendTicketEmail = async (req, res) => {
    const { ticketNumber, licensePlate, message } = req.body;

    if (!ticketNumber || !licensePlate || !message) {
        return res.status(400).json({ error: 'Alle felter skal udfyldes.' });
    }

    const mailOptions = {
        from: '"NordicPark" <onboarding@resend.dev>',
        to: 'kontakt@nordicpark.eu',
        subject: `Ny henvendelse vedr. afgift: ${ticketNumber}`,
        text: `
      Ny henvendelse modtaget fra hjemmesiden:
      
      Afgiftsnummer: ${ticketNumber}
      Nummerplade: ${licensePlate}
      
      Besked:
      ${message}
    `,
        html: `
      <h3>Ny henvendelse modtaget fra hjemmesiden (Klagesag):</h3>
      <p><strong>Afgiftsnummer:</strong> ${ticketNumber}</p>
      <p><strong>Nummerplade:</strong> ${licensePlate}</p>
      <p><strong>Besked:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'Din henvendelse er blevet sendt.' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Der opstod en fejl under afsendelse af din henvendelse. Prøv venligst igen senere.' });
    }
};
