module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies":true}],
    'no-unused-vars': ['error', { args: 'none' }],
    'class-methods-use-this': 'off',
  },
  "extends": "airbnb",
  "ignorePath": ".eslintignore",
};