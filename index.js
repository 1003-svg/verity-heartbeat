export default {
  async scheduled(event, env, ctx) {
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
    const url = `${env.BARK_URL}${encodeURIComponent(msg)}`;

    await fetch(url);
  },
};
