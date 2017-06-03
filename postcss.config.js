module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-cssnext": {},
    "postcss-browser-reporter": {},
    "postcss-reporter": {},
    cssnano: process.env.DB_HOST === "production",
  },
};
