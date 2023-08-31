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
    // 함수 컴포넌트 옵션
    // Function component is not a function declaration Error
    "react/function-component-definition": [
      2,
      { namedComponents: ["arrow-function", "function-declaration"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  settings: {
    // Missing file extension "tsx" 에러 해결
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