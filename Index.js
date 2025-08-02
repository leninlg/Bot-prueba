const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox'],
    }
});

client.on('qr', (qr) => {
    console.log('Escanea este QR con WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot listo para usarse.');
});

client.on('message', message => {
    if (message.body.toLowerCase() === '!ping') {
        message.reply('🏓 Pong!');
    }
});

client.initialize();
