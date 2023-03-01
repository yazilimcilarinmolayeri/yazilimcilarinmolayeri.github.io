/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#7289da",
        "hover-blue": "#5e78d5",
        "discord-color": "#697ec4ff",
        "h1-title": "#4a4a4a",
        "h2-title": "#363636",
        "icon-bg": "#3eb2ef",
        "footer": "#363636",
      },
      height: {
        "header": "76px",
        "hero-section": "500px",
        "hero-banner": "360px",
        "body-icon": "30px",
        "btn": "60px",
        "project-box": "200px",
        "textarea": "100px",
      },
      width: {
        "hero-banner": "640px",
        "body-item": "684px",
        "body-icon": "30px",
        "body-btn": "212px",
        "adv-form": "750px",
      },
      backgroundImage: {
        "discord-button": "url('https://cdn.discordapp.com/attachments/854448022288990238/1080495843393667263/discord.svg')",
        "timeline": "linear-gradient(to right,#ffffff00,#666666ff,#ffffff00)",
      },
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
  plugins: [],
}
