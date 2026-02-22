// routes/users.js
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

// A simple GET route
router.get('/', (req, res) => {
  res.render('index'); 
});
router.get('/service', (req, res) => {
  res.render('service'); 
});
router.get('/price', (req, res) => {
  res.render('price'); 
});
router.get('/case', (req, res) => {
  res.render('case'); 
});
router.get('/fleet', (req, res) => {
  res.render('fleet'); 
});
router.get('/flow', (req, res) => {
  res.render('flow'); 
});
router.get('/faq', (req, res) => {
  res.render('faq'); 
});
router.get('/beginners', (req, res) => {
  res.render('beginners'); 
});
router.get('/faq/usage', (req, res) => {
  res.render('usage'); 
});
router.get('/faq/crew_vehicle', (req, res) => {
  res.render('crew_vehicle'); 
});
router.get('/faq/price', (req, res) => {
  res.render('prices'); 
});
router.get('/inquiry', (req, res) => {
  res.render('inquiry'); 
});
router.get('/business/contact', (req, res) => {
  res.render('contact'); 
});
router.get('/business/regist', (req, res) => {
  res.render('business_registration'); 
});
router.get('/business/airport', (req, res) => {
  res.render('airport'); 
});
router.get('/business/hire', (req, res) => {
  res.render('hire'); 
});
router.get('/price/haneda-airport', (req, res) => {
  res.render('haneda_airport'); 
});
router.get('/price/narita-airport', (req, res) => {
  res.render('narita_airport'); 
});
router.get('/travel/services', (req, res) => {
  res.render('travel_services'); 
});
router.get('/travel/airport', (req, res) => {
  res.render('travel_airport'); 
});
router.get('/about/partner', (req, res) => {
  res.render('partner'); 
});
router.get('/about/company', (req, res) => {
  res.render('about_company'); 
});
router.get('/about/privacy', (req, res) => {
  res.render('about_privacy'); 
});
router.get('/about/tokusyo', (req, res) => {
  res.render('about_tokusyo'); 
});
router.get('/case/guests/detail001', (req, res) => {
  res.render('detail001'); 
});
router.get('/case/events/detail002', (req, res) => {
  res.render('events_detail002'); 
});
router.get('/case/sales/detail002', (req, res) => {
  res.render('sales_detail002'); 
});
router.get('/case/media/detail001', (req, res) => {
  res.render('media_detail001'); 
});
router.get('/case/sales/detail001', (req, res) => {
  res.render('sales_detail001'); 
});
router.get('/case/events/detail003', (req, res) => {
  res.render('events_detail003'); 
});
router.get('/case/events/detail004', (req, res) => {
  res.render('events_detail004'); 
});
router.get('/case/guests/detail002', (req, res) => {
  res.render('guests_detail002'); 
});
router.get('/case/events/detail005', (req, res) => {
  res.render('events_detail005'); 
});
router.get('/case/events/detail006', (req, res) => {
  res.render('events_detail006'); 
});
router.get('/case/guests/detail003', (req, res) => {
  res.render('guests_detail003'); 
});
router.get('/case/events/detail001', (req, res) => {
  res.render('events_detail001'); 
});
router.get('/about/agreements', (req, res) => {
  res.render('about_agreements'); 
});

// A GET route with a parameter
router.get('/:id', (req, res) => {
  res.send(`User Profile for ID: ${req.params.id}`);
});
router.post('/inquiry', async (req, res) => {
    // DEBUG: This must appear in your terminal immediately after clicking submit
    console.log(">>>> [SERVER] Inquiry route hit! <<<<");
    console.log(">>>> [SERVER] Received Data:", req.body);
  console.log("!!! THE SERVER DEFINITELY RECEIVED THIS !!!");
    res.json({ status: "received", data: req.body });
    const { name, mailaddress, tel, company, content, contact_types } = req.body;

    // Configure Mailer with DEBUG logs
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'btcjapantour@gmail.com',
            pass: 'oybv mrln wftv imct' 
        },
        logger: true, // Print logs to your terminal
        debug: true   // Print SMTP traffic to your terminal
    });

    const mailOptions = {
        from: 'btcjapantour@gmail.com',
        to: 'btcjapantour@gmail.com',
        replyTo: mailaddress,
        subject: `【お問い合わせ】${name}様より`,
        text: `氏名: ${name}\nメール: ${mailaddress}\n電話: ${tel}\n会社: ${company}\n区分: ${contact_types}\n\n内容:\n${content}`
    };

    try {
        console.log(">>>> [SERVER] Attempting to send email...");
        const info = await transporter.sendMail(mailOptions);
        
        console.log(">>>> [SERVER] Success! MessageID:", info.messageId);

        res.send(`
            <script>
                alert('お問い合わせありがとうございます。送信が完了しました。');
                window.location.href = '/'; 
            </script>
        `);
    } catch (error) {
        console.error(">>>> [SERVER] MAIL ERROR:");
        console.error(error); // This will tell you if it's a password issue or network issue

        res.status(500).send(`
            <div style="padding:20px; font-family:sans-serif;">
                <h2 style="color:red;">送信エラー (Mail Error)</h2>
                <p>エラー内容: ${error.message}</p>
                <button onclick="history.back()">戻る</button>
            </div>
        `);
    }
});
module.exports = router;