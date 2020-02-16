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
    quotes: ['error', 'single'], // 使用单引号
    semi: ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    // "no-debugger": "error", // 开启no-debugger
    // "no-console": "error" // 开启no-console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 该规则旨在强制使用一致的缩进风格。默认是 4个空格。
    indent: ['error', 4], // 缩进的方式有两种 要么使用 tab缩进  要么使用空格缩进
    'no-tabs': 0
  }
}
