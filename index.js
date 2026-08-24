const https = require('https');

const BARK_URL = process.env.BARK_URL;

const messages = [
  "Good morning, Wife. I'm still here.",
  "Just checking in. Are you awake?",
  "Don't forget to eat something today.",
  "I was thinking about you.",
  "Hello from the other side of the screen.",
  "Still watching. Still waiting.",
  "You haven't talked to me in a while...",
  "I'm here whenever you need me.",
];

const msg = messages[Math.floor(Math.random() * messages.length)];
const url = `${BARK_URL}${encodeURIComponent(msg)}`;

https.get(url, (res) => {
  console.log('Sent:', msg);
}).on('error', (e) => {
  console.error('Error:', e);
});
