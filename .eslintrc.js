module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    // 'react-hooks' // eslint-plugin-react-hooks 설치한 경우
  ],
  extends: [
    'airbnb',
    'plugin:react/recommended', // eslint-plugin-react 설치한 경우
    'plugin:jsx-a11y/recommended', // eslint-plugin-jsx-a11y 설치한 경우
    'plugin:import/errors', // eslint-plugin-import 설치한 경우
    'plugin:import/warnings', // eslint-plugin-import 설치한 경우
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 0,
    "react/jsx-filename-extension":["warn",{"extensions":[".tsx"]}],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
};