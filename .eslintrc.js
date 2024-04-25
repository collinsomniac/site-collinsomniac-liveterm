module.exports = {
  plugins: ['prettier'],
  extends: ['next'], ['next/core-web-vitals'],
  rules: {
    'no-console': 'error',
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'off',
  },
  ignores: ['./src/components/theme/*']
};
