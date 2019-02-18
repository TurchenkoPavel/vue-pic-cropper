module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    'browser': true,
  },
  extends: [
    "eslint:recommended",
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/base'
  ],
  plugins: [
    'vue',
  ],
  rules: {
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/prop-name-casing": ["error", "snake_case"],
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "ignores": ["vue-snotify"]
    }],
    'no-console': 'off',
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "span", "textarea"]
    }],
    "vue/max-attributes-per-line": ["error", {
        "singleline": 1,
        "multiline": {
            "max": 1,
            "allowFirstLine": true
        }
    }]
  },
  "globals": {
    "axios": false,
    "require": false,
    "Cookies":false
  }
}