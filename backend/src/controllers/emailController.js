const transporter = require('../config/mailer');

exports.sendContactEmail = async (req, res) => {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
        let missing = [];
        if (!name) missing.push('Navn');
        if (!email) missing.push('E-mail');
        if (!message) missing.push('Besked');
        return res.status(400).json({ error: 'Navn, e-mail og besked skal udfyldes. Mangler: ' + missing.join(', ') });
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
    const { type, ticketNumber, licensePlate, email, message } = req.body;

    if (!ticketNumber || !licensePlate || !email) {
        let missing = [];
        if (!ticketNumber) missing.push('Afgiftsnummer');
        if (!licensePlate) missing.push('Nummerplade');
        if (!email) missing.push('E-mail');
        return res.status(400).json({ error: 'Afgiftsnummer, nummerplade og e-mail skal udfyldes. Mangler: ' + missing.join(', ') });
    }

    // Message is required for complaints, optional for photo requests
    if (type === 'complaint' && !message) {
        return res.status(400).json({ error: 'Beskrivelse af klagen mangler.' });
    }

    const isComplaint = type === 'complaint';
    const subject = (isComplaint ? "Klage over afgift: " : "Anmodning om fotodokumentation: ") + ticketNumber;

    const mailOptions = {
        from: '"NordicPark" <onboarding@resend.dev>',
        to: isComplaint ? 'kontakt@nordicpark.eu' : 'dokumentation@nordicpark.eu', // Simplified routing
        subject: subject,
        text: `
      Ny henvendelse modtaget fra hjemmesiden:
      
      Type: ${isComplaint ? 'Klage' : 'Fotodokumentation'}
      Afgiftsnummer: ${ticketNumber}
      Nummerplade: ${licensePlate}
      E-mail: ${email}
      
      Besked:
      ${message || 'Ingen besked vedhæftet.'}
    `,
        html: `
      <h3>Ny henvendelse modtaget fra hjemmesiden (${isComplaint ? 'Klagesag' : 'Fotodokumentation'}):</h3>
      <p><strong>Afgiftsnummer:</strong> ${ticketNumber}</p>
      <p><strong>Nummerplade:</strong> ${licensePlate}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Besked:</strong><br>${(message || '<i>Ingen besked vedhæftet.</i>').replace(/\n/g, '<br>')}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: isComplaint ? 'Din klage er blevet sendt.' : 'Din anmodning om billeder er modtaget.' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Der opstod en fejl under afsendelse. Prøv venligst igen senere.' });
    }
};

exports.sendPaymentConfirmation = async (req, res) => {
    const { ticketNumber, licensePlate, amount, paymentIntentId } = req.body;

    console.log('--- Incoming Payment Confirmation ---');
    console.log(`Ticket: ${ticketNumber}, Plate: ${licensePlate}, Amount: ${amount}, ID: ${paymentIntentId}`);

    const mailOptions = {
        from: '"NordicPark Betaling" <onboarding@resend.dev>',
        to: 'kontakt@nordicpark.eu',
        subject: `💰 Ny betaling modtaget: #${ticketNumber}`,
        text: `
      En ny betaling er blevet gennemført via hjemmesiden:
      
      Afgiftsnummer: ${ticketNumber}
      Nummerplade: ${licensePlate}
      Beløb: ${amount} DKK
      Stripe ID: ${paymentIntentId}
      
      Dette er en automatisk bekræftelse.
    `,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #2e7d32;">💰 Ny betaling modtaget</h2>
        <p>En ny parkeringsafgift er blevet betalt via Stripe:</p>
        <hr style="border: none; border-top: 1px solid #eee;">
        <p><strong>Afgiftsnummer:</strong> #${ticketNumber}</p>
        <p><strong>Nummerplade:</strong> ${licensePlate}</p>
        <p><strong>Beløb:</strong> <span style="font-size: 1.2em; font-weight: bold;">${amount} DKK</span></p>
        <p><strong>Stripe Payment ID:</strong> <code>${paymentIntentId}</code></p>
        <hr style="border: none; border-top: 1px solid #eee;">
        <p style="font-size: 0.8em; color: #666;">Dette er en automatisk besked fra NordicPark systemet.</p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Kunne ikke sende bekræftelses-email.' });
    }
};
