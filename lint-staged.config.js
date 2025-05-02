module.exports = {
  '**/*.{js,ts,jsx,tsx}': [
    'eslint --fix --cache --cache-location .eslintcache',
    'prettier --write',
  ],
};
