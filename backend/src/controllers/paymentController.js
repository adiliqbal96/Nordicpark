const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (req, res) => {
    try {
        const { amount, ticketNumber, licensePlate } = req.body;
        console.log('--- Incoming Payment Request ---');
        console.log('Amount:', amount);
        console.log('Ticket #:', ticketNumber);
        console.log('License Plate:', licensePlate);

        if (!amount || !ticketNumber) {
            console.log('Error: Missing required fields');
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a PaymentIntent with the order amount and currency
        console.log('Creating PaymentIntent with Stripe...');
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // convert to cents
            currency: 'dkk',
            payment_method_types: ['card'],
            description: `NordicPark Parking Fine #${ticketNumber} (${licensePlate || 'Unknown'})`,
            metadata: {
                ticketNumber: ticketNumber.toString(),
                licensePlate: licensePlate || 'Unknown'
            },
        });

        console.log('PaymentIntent created successfully:', paymentIntent.id);
        res.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('!!! STRIPE API ERROR !!!');
        console.error('Message:', error.message);
        console.error('Type:', error.type);
        res.status(500).json({ error: error.message });
    }
};
