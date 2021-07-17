module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single'], // 使用单引号
    semi: ['error', 'never'],
    // 该规则旨在强制使用一致的缩进风格。默认是 4个空格。
    // indent: ['error', 4], // 缩进的方式有两种 要么使用 tab缩进  要么使用空格缩进
    "indent": ["error", 4], // 使用tab，作为缩进，一个tab，4个空格。

    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    // 'comma-dangle': ['error', 'never']
    'comma-dangle': [
      'error',
      {
        arrays: 'never', // never (默认) 禁用拖尾逗号
        objects: 'never', // always 要求使用拖尾逗号
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    // "no-debugger": "error", // 开启no-debugger
    // "no-console": "error" // 开启no-console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
