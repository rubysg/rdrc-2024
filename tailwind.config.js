const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./_drafts/**/*.md",
    "./_includes/**/*.{html,liquid}",
    "./_layouts/**/*.{html,liquid}",
    "./_pages/*.{html,liquid}",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
